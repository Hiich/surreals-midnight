import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Mineral from '@/../public/images/mineral1.png'
import Fungi from '@/../public/images/fungi1.png'
import Logo from '@/../public/images/logo.png'
import LogoMobile from '@/../public/images/logoMobile.png'
import useDappStore from '@/hooks/useDappStore'
import { useRouter } from 'next/router'

const Pool: NextPage = () => {
    const { account, mint, connect } = useDappStore()
    const router = useRouter()
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

            <div>
                <div className='sm:flex hidden justify-center flex-col w-full items-center pt-10'>
                    <Image src={Logo} />
                </div>
                <div className='sm:hidden flex justify-center flex-col w-full items-center '>
                    <Image src={LogoMobile} />
                </div>

                <div className='pt-36 flex flex-col gap-2 justify-center  items-center w-full h-full'>
                    <div className='bg-black p-5'>
                        <Image src="/images/prereveal.gif" height={"240"} width={"263"} />
                    </div>
                    {!account && <button className='bg-black rounded-xl p-2 px-20 w-fit text-white' onClick={connect}>Connect wallet</button>}
                    {account && <button className='bg-black rounded-xl p-2 px-20 w-fit text-white'>Mint</button>}
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
