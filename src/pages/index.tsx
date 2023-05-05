import Image from 'next/image'
import { Inter } from 'next/font/google'
import PricesPage from '@/components/PricesPage'
import ImageGrid from '@/components/ImageGrid'
import Header from '@/components/Header'


import Heroq from '@/components/Heroq'
import Testimonials from '@/components/Testimonials'
import Hero from '@/components/Hero'
import ForYou from '@/components/ForYou'
import Toast from '@/components/Toast'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-cyan-200 flex min-h-screen flex-col items-center justify-between p-3">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
       
       <Header/>
       <Hero/>
       <Heroq/>
       
       <ImageGrid/>
       <ForYou/>
       <PricesPage/>
       <Toast/>
       <Testimonials/>
       
      </div>
    </main>
  )
}
