import Nav from '../../components/Nav'

function newsfeed({ articles, page }) {
     console.log(articles,page);
    return (
        <div>
             <Nav />
            <div className="flex flex-col items-center justify-center justify-items-center">
                {articles.map((article,index) => (
                    <div key={index}
                        className=" w-1/2 border-b-2 border-gray-800 cursor-pointer"
                        onClick={() => window.open(`${article.url}`)}
                    >
                        <h1 className="text-xl font-bold"
                            // onClick={() => window.open(`${article.url}`)}
                        >{article.title}</h1>
                        <p>{article.description}</p>
                        {article.urlToImage && <img classname="w-full"src={article.urlToImage}/>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) =>{
    const page = context.query.pid
    const apiKey = process.env.API_KEY
    if(!page || page < 1 ){
        return {
            props: {
                articles: [],
                page: 1
            }
        }
    }

    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ca&pageSize=5&page=${page}&apiKey=${apiKey}`)
    const data = await res.json()
    const {articles} = data
    return {
        props: {
            articles:articles,
            page:Number.parseInt(page)
        }
    }
    
}

export default newsfeed
