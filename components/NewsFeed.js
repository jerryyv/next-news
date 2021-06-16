import Image from 'next/Image'

function NewsFeed({ articles }) {
    return (
    <div className="px-5 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:px-10 ">
        {articles.map((article,index) => (     
            <div key={index}
            className="cursor-pointer p-5 shadow-md space-y-1 hover:scale-105 transition duration-100 ease-in-out transform m-2"
            onClick={() => window.open(`${article.url}`)}
        >
                {article.urlToImage?
                    <img className="w-full" src={article.urlToImage}/>
                    :<img className="w-full" src='/placeholder.png'/>
                }   
                <h1 className="text-xl font-bold">{article.title}</h1>
                {article.description?
                    <p>{article.description}</p>
                    :<p>No Description</p>
                }
        </div>
        ))}
    </div>
    )
}

export default NewsFeed
