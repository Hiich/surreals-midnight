import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Mineral from '@/../public/images/mineral1.png'
import Fungi from '@/../public/images/fungi1.png'
import Logo from '@/../public/images/logo.png'
import LogoMobile from '@/../public/images/logoMobile.png'
import useDappStore from '@/hooks/useDappStore'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Pool: NextPage = () => {
    const { account, mint, connect, sacrifices } = useDappStore()
    const [mintAmount, setMintAmount] = useState(1)
    const router = useRouter()

    useEffect(() => {
        router.push('/')
    }, [])
    
    return (
        <div className='h-full sm:h-screen bg-crimsonMobile sm:bg-crimson bg-cover bg-center bg-no-repeat relative pb-10 sm:pb-0'
            style={{
                backgroundSize: "100% 100%"
            }}>
            <Head>
                <title>Surreals Midnight - Sudoswap Pool</title>
                <meta name="description" content="Surreals Midnight" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='flex flex-col justify-evenly items-center h-full'>
                <Toaster />
                <div className='sm:flex hidden justify-center flex-col w-full items-center pt-10'>
                    <Image src={Logo} />
                </div>
                <div className='sm:hidden flex justify-center flex-col w-full items-center '>
                    <Image src={LogoMobile} />
                </div>

                <div className='flex flex-col gap-2 justify-center  items-center w-fit h-full pt-10 sm:pt-0 z-20'>
                    <div className='bg-black p-5'>
                        <Image src="/images/prereveal.gif" height={"240"} width={"263"} />
                    </div>
                    {!account ?
                        <button className='bg-black rounded-xl p-2 px-20 w-fit text-white' onClick={connect}>Connect wallet</button> :

                        <div className='bg-black rounded-xl text-white flex flex-col justify-center items-center py-4 gap-y-4 w-64'>
                            <div className='flex flex-row gap-x-4 '>
                                <button onClick={() => {
                                    if (mintAmount > 1)
                                        setMintAmount(mintAmount - 1)
                                }}>
                                    -
                                </button>
                                <span className="w-fit bg-[#D9D9D9] text-black rounded-xl px-4">{mintAmount}</span>
                                <button onClick={() => {
                                    if (mintAmount < 9)
                                        setMintAmount(mintAmount + 1)
                                    else
                                        toast.error("Max mintable amount is 9")
                                }}>
                                    +
                                </button>
                            </div>
                            <button
                                className='rounded-xl p-2 px-10 w-fit bg-[#D9D9D9] text-black'
                                onClick={() =>
                                    toast.promise(mint(mintAmount), {
                                        success: "Successfully minted",
                                        loading: "Minting...",
                                        error: "Error while minting, please contact our support"
                                    })}>
                                MINT
                            </button>
                            <span className='bg-black rounded-xl p-2 w-fit text-white'>
                                Free mints available : {sacrifices}
                            </span>
                        </div>
                    }
                    <button className='bg-black rounded-xl p-2 px-16 w-fit text-white'
                        onClick={() => router.push('/')}>
                        Back to Home Page
                    </button>
                </div>
                <div className='xl:mt-4 hidden lg:flex absolute bottom-0 left-0'>
                    <Image src={Fungi} />
                </div>
                <div className='xl:mt-8  hidden lg:flex absolute bottom-0 right-0'>
                    <Image src={Mineral} />
                </div>
            </div>

        </div>
    )
}

export default Pool
