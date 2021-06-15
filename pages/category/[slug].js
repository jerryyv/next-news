import Nav from '../../components/Nav'
import NewsFeed from '../../components/NewsFeed'

function Category({ articles }) {

    return (
        <div>
             <Nav />
             <NewsFeed articles={articles}/>
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
