import router from 'next/router'
import Link from 'next/link'
import { useEffect } from 'react'

export default function NotFound() {

    useEffect(() => {
        setTimeout(() =>{
            router.push('/')
        },4000)
    },[])

    return (
        <div className = "flex flex-col items-center h-full w-full fixed justify-center px-4">
            <h1 className="-mt-28 text-3xl font-bold">404</h1>
            <h2 className="text-2xl text-center">Oops! That page cannot be found :(</h2>
            <p className="text-xl">Redirecting to <Link href="/"><span className="font-semibold cursor-pointer">Homepage</span></Link></p>
        </div>
    )
}


