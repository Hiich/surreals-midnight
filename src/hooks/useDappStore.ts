import create from 'zustand'
import { ethers } from 'ethers'
import { nftABI } from '@/config/nftABI'
import { config } from '@/config/config'
import { Maybe } from '@/utils/types'

export type DappStore = {
    account: string;
    smartContract: Maybe<ethers.Contract>;
    busdContract: Maybe<ethers.Contract>;
    mint: (referrer: string, tokenId: number) => void;
    connect: () => void;
    approve: () => void;
}

const useDappStore = create<
    DappStore
>((set, get) => ({
    account: null,
    smartContract: undefined,
    busdContract: undefined,
    mint: async (referrer, tokenId) => {
        const { smartContract } = get()
        console.log(smartContract)
        await smartContract.mint(referrer, tokenId)
    },
    connect: async () => {
        console.log("Connecting")
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0]
        // const signer = provider.getSigner()
        // const smartContract = new ethers.Contract(config.contract_address, abi, signer)
        // const busdContract = new ethers.Contract(config.busd_address, busdABI, signer)
        // const allowance = await busdContract.allowance(account, config.contract_address)
        // const claimableRewards = await smartContract.referrals(account)
        // console.log(claimableRewards)
        set({ account: account })//, smartContract: smartContract, busdContract: busdContract, allowance: allowance, claimableRewards: claimableRewards / 1e18 })
    },
    approve: async () => {
        // const { busdContract } = get()
        // const tx = await busdContract.approve(config.contract_address, "100000000000000000000")
        // tx.wait().then(() => getAllowance())
    },
}))

export default useDappStore;
