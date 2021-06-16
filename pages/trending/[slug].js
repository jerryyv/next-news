import NewsFeed from '../../components/NewsFeed'
import Pagination from '../../components/Pagination'

function Category({ articles, page, total, category }) {
    const url = `/trending/${category}`
    return (
        <>
            <NewsFeed articles={articles}/>
            <Pagination url={url} page={page} total={total}/>
        </>
    )}

export const getServerSideProps = async (context) =>{
    const apiKey = process.env.API_KEY
    const category = context.query.slug
    const page = context.query.page 
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ca&category=${category}&pageSize=8&page=${page}&apiKey=${apiKey}`)
    const data = await res.json()
    const {articles, totalResults} = data
    
    return {
        props: {
            articles: articles,
            page: +page,
            total: totalResults,
            category: category
        }
    }
    
}

export default Category
