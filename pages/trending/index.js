import NewsFeed from '../../components/NewsFeed'
import Pagination from '../../components/Pagination'
import { useCategory } from '../../context/CategoryContext'
import { useEffect } from 'react'
import Layout from '../../components/Layout'
// all trending articles 
export function TrendingPage({  page,data }) {
    const { articles,totalResults } = data 
    const { setSelectedCategory } = useCategory()
    const url = `/trending`

    useEffect(() => {
        setSelectedCategory('All')
    }, [])
    
    return (
        <Layout title="top trending">
            {articles && 
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold py-4">Top Trending</h1>
                    <NewsFeed articles={articles}/>
                    <Pagination url={url} page={page} total={totalResults}/>
                </div>
           }
        </Layout>
  )      
}

export default TrendingPage


export const getServerSideProps = async (context) => {
    const {query:{page=1}} = context
    const apiKey = process.env.API_KEY

    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ca&pageSize=8&page=${page}&apiKey=${apiKey}`)
    const data = await res.json()
    
    return {
        props: {
            data:data,
            page: +page,
            
        }
    }
}