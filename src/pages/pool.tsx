import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Mineral from '@/../public/images/mineral1.png'
import Fungi from '@/../public/images/fungi1.png'
import Logo from '@/../public/images/logo.png'
import LogoMobile from '@/../public/images/logoMobile.png'

const Pool: NextPage = () => {
    return (
        <div className='h-screen bg-crimsonMobile sm:bg-crimson bg-cover bg-center bg-no-repeat relative'
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

                <div className=' sm:pt-36 flex flex-col gap-2 justify-center  items-center w-full h-full'>
                    <div className='bg-black p-5'>
                        <Image src="/images/prereveal.gif" height={"240"} width={"263"} />
                    </div>
                    <button className='bg-black rounded-xl p-2 px-20 w-fit text-white'>Connect wallet</button>
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
