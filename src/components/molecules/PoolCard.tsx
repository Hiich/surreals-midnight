import Image from 'next/image'
import { useRouter } from 'next/router'
import PreReveal from "@/../public/images/prereveal.gif"
import toast from 'react-hot-toast'
export const PoolCard = () => {
    const router = useRouter()

    return (
        <div className='flex justify-center relative sm:mt-[52px]'>
            <div className='bg-[#461B1C] w-fit h-[121px] rounded-2xl px-5 z-10 top-[-90px] sm:top-[-140px] absolute'>
                <img src="/images/midnight.png" className='mt-1' />
            </div>
            <div className='flex flex-col items-center w-[319px]  sm:mt-[-52px]' >
                <div className='flex flex-col bg-black justify-center items-center  top-[85px] '>
                    <div className='text-white text-center mx-4 mt-12 h-full flex flex-col'>
                        {/* <Image src="/images/prereveal.gif" height={"240"} width={"263"} /> */}
                        <Image src={PreReveal} className="rounded-xl mx-10" />
                        <span className='mt-4'>
                            Surreals that are relinquished to the Dark Portal will be rewarded with Dark Surreals.
                        </span><br />
                        <span >
                            Free mint for those who deposit, 0.05 ETH for holders and surreaLIST, 0.0666 ETH public.
                        </span>
                    </div>
                    <button
                        onClick={() => {
                            toast("Minting is closed")
                        }}
                        className='bg-[#461B1C] w-[90%] p-2 px-10 text-white rounded-lg my-4 mt-10 z-20'
                    >
                        Mint now
                    </button>
                </div>
            </div>
        </div>
    )
}