import NewsFeed from '../../components/NewsFeed'
import Pagination from '../../components/Pagination'
import { useCategory } from '../../context/CategoryContext'
import { useEffect } from 'react'
import NotFound from '../404'

export function TrendingPage({ articles, page, total }) {
    const { setSelectedCategory } = useCategory()
    const url = `/trending`

    useEffect(() => {
        setSelectedCategory('All')
    }, [])

    if(articles.length < 1) return <NotFound />
    
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold py-4">Top Trending</h1>
            <NewsFeed articles={articles}/>
            <Pagination url={url} page={page} total={total}/>
        </div>
  )      
}

export default TrendingPage


export const getServerSideProps = async (context) => {
    const apiKey = process.env.API_KEY
    const page = context.query.page 
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ca&pageSize=8&page=${page}&apiKey=${apiKey}`)
    const data = await res.json()
    const {articles, totalResults} = data
    return {
        props: {
            articles: articles,
            page: +page,
            total: totalResults
        }
    }
}