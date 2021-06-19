import { useState } from 'react'
import { useCategory } from '../context/CategoryContext'
import { categories } from '../utils/categories'
import Link from 'next/link'

function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const { selectedCategory } = useCategory()

    return (
        <nav className="bg-red-700 text-gray-100">
            <div className="flex items-center justify-between py-5 px-10 lg:px-20">
                <Link href="../">
                    <div  className="flex items-center cursor-pointer hover:text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <h2 className="text-4xl">NextNews</h2>
                    </div>
                </Link>
                <div className="hidden md:flex space-x-4 text-lg lg:text-xl">
                    {categories.map((category,index) => {
                        return <Link href={category.url}>
                        <a key={index} className={selectedCategory===category.name?"cursor-pointer text-white underline font-bold":"cursor-pointer hover:underline hover:text-white "}
                        >{category.name}
                        </a>
                        </Link>
                    })}
                </div>
                {/* hamburger menu for mobile screens */}
                <button onClick={()=>setIsOpen(!isOpen)} className="md:hidden h-8 w-8 cursor-pointer focus:outline-none">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button> 
            </div>
            {/* display for mobile screens */}
            {isOpen &&
                <div className="flex flex-col items-end px-8 md:hidden pb-4">
                    {categories.map((category,index) => {
                        return <Link href={category.url}>
                        <a key={index} className={selectedCategory===category.name?"py-1 cursor-pointer text-white underline font-bold":"py-1 cursor-pointer hover:underline hover:text-white "}
                        >{category.name}
                        </a>
                        </Link>
                    })} 
                </div>
            }
        </nav>
    )
}

export default Nav
