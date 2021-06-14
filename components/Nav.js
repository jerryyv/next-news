import router, { useRouter } from 'next/router'

function Nav() {
    return (
        // <main >
        <div className="w-full h-1/2 flex justify-center mt-5 space-x-5">
            <h2 className="cursor-pointer hover:text-gray-500"
                onClick={() => router.push('/')}
            >Home
            </h2>
            <h2 className="cursor-pointer hover:text-gray-500"
                onClick={() => router.push('/newsfeed/1')}
            >News Feed
            </h2>
        </div>
        // </main>
    )
}

export default Nav
