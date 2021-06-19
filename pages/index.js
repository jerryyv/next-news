import { useCategory } from '../context/CategoryContext'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const { setSelectedCategory } = useCategory()

  useEffect(() => {
    setSelectedCategory('')
}, [])

  return (
    <div>
      <div className="flex flex-col items-center h-full w-full fixed justify-center px-4 space-y-8">
        <h2 className="font-extrabold text-5xl -mt-28">NextNews</h2>
        <h3 className="text-bold text-4xl text-center">Find Breaking News Articles From Sources All Across Canada!</h3>
        <Link href='/trending?page=1'>
          <div className="flex cursor-pointer items-center p-3 space-x-2 rounded-lg bg-red-600 text-white hover:opacity-80">
              <a className="text-lg lg:text-xl">Top Trending</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-8 lg:w-8 fill-none"  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </div>
        </Link>
      </div>
    </div>

    
  )
}
