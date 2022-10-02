import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Pool: NextPage = () => {
    // const poolAudio = new Audio("/sounds/pool.mp3")
    // const mintAudio = new Audio("/sounds/mint.mp3")
    return (
        <div className='h-screen bg-poolBg bg-cover bg-center bg-no-repeat'>
            <Head>
                <title>Surreals Midnight - Sudoswap Pool</title>
                <meta name="description" content="Surreals Midnight" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='w-full h-full flex justify-center items-end'>
                <button className='bg-[#461B1C] p-2 pb-4 px-20 text-white text-2xl rounded-2xl mb-40'>
                    Connect Wallet
                </button>
            </div>
        </div>
    )
}

export default Pool
