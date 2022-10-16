import useDappStore from '@/hooks/useDappStore'
import { url } from 'inspector'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import { useEffect } from 'react'

const Pool: NextPage = () => {
    const { account, connect } = useDappStore()
    // const router = useRouter()
    // useEffect(() => {
    //     if (account != undefined)
    //         router.push("/home")
    // }, [account])

    return (
        <div className='h-screen bg-endOflightMobile sm:bg-endOflight bg-auto bg-center bg-no-repeat w-full'
            style={{
                backgroundSize: "100% 100%"
            }}>
            <Head>
                <title>Surreals Midnight - Connect Wallet</title>
                <meta name="description" content="Surreals Midnight" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='w-full h-full flex justify-center items-end'>
                <button className='bg-[#461B1C] p-2 pb-4 px-20 text-white text-2xl rounded-2xl mb-40'
                    onClick={connect}>
                    Connect Wallet
                </button>
            </div>
        </div>
    )
}

export default Pool
