import NewsFeed from '../../components/NewsFeed'
import Pagination from '../../components/Pagination'
import { useEffect } from 'react'
import { useCategory } from '../../context/CategoryContext'
import NotFound from '../404'

function Category({ articles, page, total, category }) {
    console.log(articles);
    const { selectedCategory,setSelectedCategory } = useCategory()
    const url = `/trending/${category}`

    useEffect(() => {
        const categoryCaptilized = category.charAt(0).toUpperCase() + category.slice(1)
        setSelectedCategory(categoryCaptilized)
    }, [category])
    
    
    if(articles.length < 1) return <NotFound />
    
    
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold py-4">{selectedCategory} Trending</h1>
            <NewsFeed articles={articles}/>
            <Pagination url={url} page={page} total={total}/>
        </div>
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
