import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import router from 'next/router'

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col fixed items-center justify-center w-full h-full ">
      <h1 className="-mt-28">Next News</h1>
      <h2>The Best Place To Find Trending News</h2>
      <div onClick={() => router.push('/trending')}className="flex cursor-pointer">
          <h3>Top Trending</h3>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 fill-current"  viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
      </div>
      </div>
    </div>

    
  )
}
