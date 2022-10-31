import useDappStore from '@/hooks/useDappStore'
import { url } from 'inspector'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Pool: NextPage = () => {
    const { account, connect, sacrifice, approve, isApproved, getApproval, sacrifices } = useDappStore()
    const router = useRouter()
    const [tokenId, setTokenId] = useState("")
    useEffect(() => getApproval, [account])
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

            <div className='w-full h-full flex justify-end flex-col items-center gap-y-10 pb-20'>
                <Toaster />
                {!account ?
                    <button className='bg-[#461B1C] p-2 pb-4 px-20 text-white text-2xl rounded-2xl mb-40'
                        onClick={connect}>
                        Connect Wallet
                    </button>
                    :
                    <>
                        {isApproved ? <div className='flex flex-col items-center w-72 py-4 justify-center text-xl bg-[#461B1C] p-2 rounded-xl text-white gap-y-2'>
                            <label>Surreal ID #</label>
                            <input type="text" className='font-black bg-[#D9D9D9] w-28 rounded-md text-center text-black' onChange={(e) => setTokenId(e.target.value as any)} />
                            <button className='bg-white text-black text-2xl px-4 rounded-full mt-4 w-44'
                                onClick={async () => {
                                    const tokenIds = tokenId.split(",")
                                    console.log(tokenIds)

                                    if (tokenIds.length > 3) toast.error("Cannot sacrifice more than 3")
                                    else
                                        await toast.promise(sacrifice(tokenIds), {
                                            success: "Successfully sacrificed",
                                            loading: "Sacrificing...",
                                            error: "Error while sacrificing, please contact our support"
                                        })
                                }}>
                                SACRIFICE
                            </button>
                        </div> :
                            <button className='bg-[#461B1C] p-2 pb-4 px-20 text-white text-2xl rounded-2xl mb-40'
                                onClick={() =>
                                    toast.promise(approve(), {
                                        success: "Successfully approved",
                                        loading: "Approving...",
                                        error: "Error while approving, please contact our support"
                                    })}>
                                Approve
                            </button>
                        }
                        {sacrifices > 0 && <p className='bg-[#461B1C] p-2 pb-4 px-20 text-white text-2xl rounded-2xl'>Sacrifices made : {sacrifices}</p>}
                    </>
                }
                <button className='bg-[#461B1C] p-2 pb-4 px-16 text-white text-2xl rounded-2xl'
                    onClick={() => router.push('/')}>
                    Back to Home Page
                </button>
            </div>
        </div >
    )
}

export default Pool
