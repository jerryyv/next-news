import NewsFeed from '../../components/NewsFeed'
import Pagination from '../../components/Pagination'
import { useEffect } from 'react'
import { useCategory } from '../../context/CategoryContext'
import Layout from '../../components/Layout'

// trending articles for each category 
function Category({ data,page,category }) {
    const {articles, totalResults} = data
    const { selectedCategory,setSelectedCategory } = useCategory()
    const url = `/trending/${category}`

    useEffect(() => {
        const categoryCaptilized = category.charAt(0).toUpperCase() + category.slice(1)
        setSelectedCategory(categoryCaptilized)
    }, [category])
    
    
    if(!articles || articles.length < 1) return <p className="text-xl flex justify-center mt-4">No Articles Found</p>
    
    return (
        <Layout title={`${category} trending`}>
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold py-4">{selectedCategory} Trending</h1>
            <NewsFeed articles={articles}/>
            <Pagination url={url} page={page} total={totalResults}/>
        </div>
       </Layout>
    )}

export const getServerSideProps = async (context) =>{
    const {query:{page=1},query:{slug}} = context
    const apiKey = process.env.API_KEY
    const category = slug
  
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ca&category=${category}&pageSize=8&page=${page}&apiKey=${apiKey}`)
    const data = await res.json()
   
    return {
        props: {
            data:data,
            page: +page,
            category: category
        }
    }
    
}

export default Category
