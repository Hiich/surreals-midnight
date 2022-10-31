import create from 'zustand'
import { ethers } from 'ethers'
import { nftABI } from '@/config/nftABI'
import { config } from '@/config/config'
import { Maybe } from '@/utils/types'
import { swapABI } from '@/config/swapABI'

export type DappStore = {
    account: string;
    nftContract: Maybe<ethers.Contract>;
    swapContract: Maybe<ethers.Contract>;
    darkSurreals: Maybe<ethers.Contract>;
    isApproved: boolean;
    sacrifices: number;
    getApproval: () => void;
    mint: (mintAmount: number) => Promise<void>;
    connect: () => Promise<void>;
    approve: () => Promise<void>;
    sacrifice: (tokenId: string[]) => Promise<void>;
}

const useDappStore = create<
    DappStore
>((set, get) => ({
    account: null,
    nftContract: undefined,
    swapContract: undefined,
    darkSurreals: undefined,
    isApproved: false,
    sacrifices: 0,
    mint: async (mintAmount) => {
        const { nftContract, account } = get()
        console.log(account, mintAmount)
        console.log(nftContract)

        const cost = await nftContract.getCost(mintAmount, account)
        console.log(cost.toString())

        let tx
        const isWhitelist = await nftContract.isWhitelist()
        if (isWhitelist) {
            const resp = await fetch(`https://surreals.mypinata.cloud/ipfs/QmRpAedpMeFYwM5WydnKQA2uJ6FvHrzJ2TS78PoNeZNhcT/${account}`)
            const proof = await resp.json()
            console.log(proof)
            tx = await nftContract.mintWithSignature(mintAmount, proof, { value: cost.toString() })
        }
        else
            tx = await nftContract.mint(mintAmount, { value: cost.toString() })

        return tx.wait()
    },
    connect: async () => {
        console.log("Connecting")
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0]
        const signer = provider.getSigner()
        const nft = new ethers.Contract(config.nftAddress, nftABI, signer)
        const swap = new ethers.Contract(config.swapAddress, swapABI, signer)
        const dark = new ethers.Contract(config.darkAddress, nftABI, signer)
        const sacrifices = await swap.sacrifices(account)
        set({ account: account, nftContract: nft, swapContract: swap, darkSurreals: dark, isApproved: false, sacrifices: sacrifices.toNumber() })
    },
    approve: async () => {
        const { darkSurreals } = get()
        const tx = await darkSurreals.setApprovalForAll(config.swapAddress, true)
        return tx.wait()
    },
    getApproval: async () => {
        const { darkSurreals, account } = get()
        if (darkSurreals != undefined) {
            const isApproved = await darkSurreals.isApprovedForAll(account, config.swapAddress)
            console.log(isApproved)
            set({ isApproved: isApproved })
        }
    },
    sacrifice: async (tokenId) => {
        const { swapContract } = get()
        console.log(tokenId)
        const tx = await swapContract.makeSacrifice(tokenId)
        return tx.wait()
    }
}))

export default useDappStore;
