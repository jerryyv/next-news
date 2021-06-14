import Nav from '../../components/Nav'

function newsfeed({ articles, country }) {

    return (
        <div>
             <Nav />
            <div className="flex flex-col items-center justify-center justify-items-center">
                {articles.map((article,index) => (
                    <div key={index}
                        className=" w-1/2 border-b-2 border-gray-800 cursor-pointer py-5"
                        onClick={() => window.open(`${article.url}`)}
                    >
                        <h1 className="text-xl font-bold">{article.title}</h1>
                        <p>{article.description}</p>
                        {article.urlToImage && <img className="w-full"src={article.urlToImage}/>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) =>{
    const country = context.query.pid
    const apiKey = process.env.API_KEY

    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=100&apiKey=${apiKey}`)
    const data = await res.json()
    const {articles} = data
    return {
        props: {
            articles:articles,
            country:country
        }
    }
    
}

export default newsfeed
