import router from 'next/router'
import { useState } from 'react'
function Nav() {
    const categories = [
        'Sports', 'Technology', 'Entertainment','Business'
    ]
    
     
    return (
        <div className="flex justify-between p-5">
            <h2 className="cursor-pointer hover:text-gray-500"
                onClick={() => router.push('/')}
            >NextNews
            </h2>
            <div className="space-x-4">
                {categories.map((category,index) => {
                    return <a key={index} onClick={() => router.push(`/category/${category}`)}
                              className="cursor-pointer hover:underline"
                            >{category}</a>
                })}
            </div>
            
           
        </div>
        
    )
}

export default Nav
