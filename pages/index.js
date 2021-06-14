import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col fixed items-center justify-center w-full h-full ">
      <h1 className="-mt-28">Next News</h1>
      <h3>The Best Place To Find Trending News</h3>
      </div>
    </div>

    
  )
}
