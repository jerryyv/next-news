import Nav from '../../components/Nav'


function Category({ articles }) {

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
                        {article.urlToImage && 
                        <img className="w-full" src={article.urlToImage}/>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) =>{
    const category = context.query.slug.toLowerCase()
    const apiKey = process.env.API_KEY

    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ca&category=${category}&apiKey=${apiKey}`)
    const data = await res.json()
    const {articles} = data
    return {
        props: {
            articles:articles,
            
        }
    }
    
}

export default Category
