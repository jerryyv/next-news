import router, { useRouter } from 'next/router'
import { useState } from 'react'
function Nav() {
    const countries = [
        'ca','us','gb','au','cn','ar','gr','za','in','ie','fr','de','ru','kr'
    ]
    
    const [isActive,setIsActive] = useState(false)

    const handleSelect = (country) => {
        setIsActive(false)
        router.push(`/newsfeed/${country}`)
    }
    
    return (
        
        <div className=" mt-5 space-x-5">
            <h2 className="cursor-pointer hover:text-gray-500"
                onClick={() => router.push('/')}
            >Home
            </h2>
                <button onClick={()=>setIsActive(!isActive)}>country</button>
                {isActive ? 
                    <>
                        <div>
                            {countries.map((country,index) => {
                                return <p key={index} onClick={()=>handleSelect(country)}
                                          className="cursor-pointer"  
                                       >
                                           {country}
                                       </p>
                            })
                            }
                        </div>
                    </>
                :<></>
                }
            
           
        </div>
        
    )
}

export default Nav
