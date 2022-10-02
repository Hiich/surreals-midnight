import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Mint: NextPage = () => {
    // const poolAudio = new Audio("/sounds/pool.mp3")
    // const mintAudio = new Audio("/sounds/mint.mp3")
    return (
        <div className='h-screen bg-mintBg bg-cover bg-center bg-no-repeat'>
            <Head>
                <title>Surreals Midnight - Minting</title>
                <meta name="description" content="Surreals Midnight" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='flex flex-col gap-2 justify-center items-center w-full h-full'>
                <div className='bg-black p-5'>
                    <Image src="/images/prereveal.gif" height={"240"} width={"263"} />
                </div>
                <button className='bg-black rounded-xl p-2 px-20 w-fit text-white'>Connect wallet</button>
            </div>
        </div>
    )
}

export default Mint
