import create from 'zustand'
import { ethers } from 'ethers'
import { nftABI } from '@/config/nftABI'
import { config } from '@/config/config'
import { Maybe } from '@/utils/types'
import { swapABI } from '@/config/swapABI'
import { darkSurreals } from '@/config/darkSurreals'

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

const nullProof = ["0x0000000000000000000000000000000000000000000000000000000000000000"]
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
        const { darkSurreals, account } = get()
        const resp = await fetch(`https://surreals.mypinata.cloud/ipfs/Qmd4mEEC82RNQ2rCpy7L9srw4xELXRSW9nKB4NGDbuonAt/${account.toLowerCase()}.json`)
        const walletProof = resp.status == 200 ? (await resp.json()).proof : nullProof
        console.log(walletProof)
        try {
            const cost = await darkSurreals.getCost(mintAmount, account, walletProof)
            console.log(cost)
            const tx = await darkSurreals.mint(mintAmount, walletProof, { value: cost.toString() })
            return tx.wait()
        } catch (e) {
            console.log(e)
        }
    },
    connect: async () => {
        console.log("Connecting")
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0]
        const signer = provider.getSigner()
        const nft = new ethers.Contract(config.nftAddress, nftABI, signer)
        const swap = new ethers.Contract(config.swapAddress, swapABI, signer)
        const dark = new ethers.Contract(config.darkAddress, darkSurreals, signer)
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
