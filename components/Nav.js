import router from 'next/router'
import { useState } from 'react'

const categories = [
    'Sports', 
    'Technology', 
    'Entertainment',
    'Business'
]

function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (category) => {
        router.push(`/trending/${category}?page=1`)
    }
    
    return (
        <nav className="bg-red-700 text-gray-100">
            <div className="flex items-center justify-between py-5 px-10 lg:px-20">
                <div className="flex items-center cursor-pointer hover:text-white"
                    onClick={() => {
                        router.push('/')
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <h2 className="text-3xl">NextNews</h2>
                </div>
                <div className="hidden sm:flex space-x-4">
                    {categories.map((category,index) => {
                        return <a key={index} onClick={() => handleClick(category)}
                                className={"cursor-pointer hover:underline hover:text-white "}
                                >{category}</a>
                    })}
                </div>
                {/* hamburger menu for mobile screens */}
                <button onClick={()=>setIsOpen(!isOpen)} className="sm:hidden h-6 w-6 cursor-pointer focus:outline-none">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button> 
            </div>
            {/* display for mobile screens */}
            {isOpen &&
                <div className="flex flex-col items-end px-8 sm:hidden pb-4">
                {categories.map((category,index) => {
                            return <a key={index} onClick={()=>handleClick(category)}
                                    className="cursor-pointer hover:underline py-1"
                                    >{category}</a>
                        })} 
                </div>
            }
        </nav>
    )
}

export default Nav
