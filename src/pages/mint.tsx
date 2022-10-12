import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Logo from '@/../public/images/logo.png'
import LogoMobile from '@/../public/images/logoMobile.png'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div className='h-screen w-full bg-stormMobile sm:bg-storm bg-center bg-cover'
      style={{
        backgroundSize: "100% 100%"
      }}>
      <Head>
        <title>Surreals Midnight</title>
        <meta name="description" content="Surreals Midnight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='sm:flex hidden justify-center flex-col w-full items-center pt-10'>
        <Image src={Logo} />
      </div>
      <div className='sm:hidden flex justify-center flex-col w-full items-center '>
        <Image src={LogoMobile} />
      </div>

      <div className='flex flex-col sm:flex-row sm:justify-between justify-center sm:mx-60'>
        <div className='flex flex-col items-center w-[319px] relative' >
          <div className='bg-[#461B1C] w-fit h-[67px] rounded-2xl px-5 mb-4 z-10 absolute top-0 '>
            <img src="/images/surreals.png" className='mt-[-8px]' />
          </div>
          <div className='flex flex-col bg-black justify-center items-center absolute top-[33px]'>
            <div className='text-white text-center mx-4 mt-12 h-full flex flex-col'>
              <Image src="/images/surreals.gif" height={"218"} width={"267"} />

              <span className='mt-4'>
                A collection of 10,000 hand-painted portraits with a surreal, vintage naturalist aesthetic.</span><br />
              <span >
                Deposit Surreals into the Dark Portal to receive a free Dark Surreal mint. A maximum of 3 Surreals per wallet can be sent through the portal.
              </span>
            </div>
            <button
              onClick={() => {
                (new Audio("/sounds/pool.mp3")).play()
                router.push('/pool')
              }}
              className='bg-[#461B1C] w-[90%] p-2 px-10 text-white rounded-lg my-4 '
            >
              The Dark Portal
            </button>
          </div>
        </div>
        <img src="/images/coral1.png" className='mt-10 hidden sm:flex' />
        <div className='flex flex-col items-center w-[319px] relative sm:mt-[-52px]' >
          <div className='bg-[#461B1C] w-fit h-[121px] rounded-2xl px-5 mb-4 z-10 absolute top-0 '>
            <img src="/images/midnight.png" className='mt-1' />
          </div>
          <div className='flex flex-col bg-black justify-center items-center absolute top-[85px]'>
            <div className='text-white text-center mx-4 mt-12 h-full flex flex-col'>
              <Image src="/images/prereveal.gif" height={"240"} width={"263"} />

              <span className='mt-4'>
                Surreals that are relinquished to the Dark Portal will be rewarded with Dark Surreals.
              </span><br />
              <span >
                Free mint for those who deposit, 0.05 ETH for holders and surreaLIST, 0.0666 ETH public.
              </span>
            </div>
            <button
              onClick={() => {
                (new Audio("/sounds/mint.mp3")).play()
                router.push('/mint')
              }}
              className='bg-[#461B1C] w-[90%] p-2 px-10 text-white rounded-lg my-4 mt-[18px] '
            >
              Mint coming soon
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
