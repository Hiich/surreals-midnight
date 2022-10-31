import Image from 'next/image'
import { useRouter } from 'next/router'
import Surreals from "@/../public/images/surreals.gif"
export const MintingCard = () => {
    const router = useRouter()

    return (
        <div className='flex justify-center relative'>
            <div className='bg-[#461B1C] w-fit h-[67px] rounded-2xl px-5 z-10 absolute top-[-40px]'>
                <img src="/images/surreals.png" className='mt-[-8px]' />
            </div>
            <div className='flex flex-col items-center w-[319px]' >
                <div className='flex flex-col bg-black justify-center items-center  top-[33px]'>
                    <div className='text-white text-center mx-4 mt-12 h-full flex flex-col'>
                        {/* <Image src="/images/surreals.gif" height={"218"} width={"267"} className="rounded-xl mx-10" /> */}
                        <Image src={Surreals} className="rounded-xl mx-10" />
                        <span className='mt-4'>
                            A collection of 10,000 hand-painted portraits with a surreal, vintage naturalist aesthetic.</span><br />
                        <span >
                            Deposit Surreals into the Dark Portal to receive a free Dark Surreal mint. A maximum of 3 Surreals per wallet can be sent through the portal.
                        </span>
                    </div>
                    <button
                        onClick={() => {
                            router.push('/pool')
                        }}
                        className='bg-[#461B1C] w-[90%] p-2 px-10 text-white rounded-lg my-4 z-20'
                    >
                        The Dark Portal
                    </button>
                </div>
            </div>
        </div>
    )
}