import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Logo from '@/../public/images/logo.png'
import LogoMobile from '@/../public/images/logoMobile.png'
import Coral from '@/../public/images/coral1.png'

import useDappStore from '@/hooks/useDappStore'
import { PoolCard } from '@/components/molecules/PoolCard'
import { MintingCard } from '@/components/molecules/MintingCard'

const Home: NextPage = () => {
  const router = useRouter()
  const { account } = useDappStore()

  // useEffect(() => {
  //   if (account == undefined)
  //     router.push("/")
  // }, [account])


  return (
    <div className='w-full h-full sm:h-screen bg-stormMobile sm:bg-storm bg-center bg-cover relative pb-9'
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

      <div className='hidden sm:flex justify-center flex-col w-full items-center absolute bottom-0'>
        <Image src={Coral} className='mt-10 hidden lg:flex items-center' />
      </div>

      <div className='flex flex-col mt-24 sm:mt-0 sm:flex-row sm:justify-between justify-center items-center gap-y-40 sm:mx-60'>
        <MintingCard />
        <PoolCard />
      </div>
    </div>
  )
}

export default Home
