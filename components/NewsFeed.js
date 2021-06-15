

function NewsFeed({ articles }) {
    return (
    <div className="flex flex-col items-center justify-center justify-items-center">
        {articles.map((article,index) => (
            <div key={index}
                className=" w-1/2 border-b-2 border-gray-800 cursor-pointer py-5"
                onClick={() => window.open(`${article.url}`)}
            >
                <h1 className="text-xl font-bold">{article.title}</h1>
                <p>{article.description}</p>
                {article.urlToImage && 
                <img className="w-full" src={article.urlToImage}/>}
            </div>
        ))}
    </div>
    )
}

export default NewsFeed
