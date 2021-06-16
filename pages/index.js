import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import router from 'next/router'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center h-full w-full fixed justify-center px-4 space-y-8">
        <h2 className="font-extrabold text-5xl -mt-28">NextNews</h2>
        <h3 className="text-bold text-4xl text-center">Find Breaking News Articles From Sources All Across Canada!</h3>
        <div className="flex cursor-pointer items-center py-3 px-3 space-x-2 rounded-lg bg-red-600 text-white hover:bg-red-500"
            onClick={() => router.push('/trending')}
        >
            <a href="#" className="">Top Trending</a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  fill-none"  viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </div>
      </div>
    </div>

    
  )
}
