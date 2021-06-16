import NewsFeed from '../components/NewsFeed'

function trending({ articles }) {
    
    return <NewsFeed articles={articles}/>
}

export default trending


export const getServerSideProps = async () => {
    const apiKey = process.env.API_KEY
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ca&apiKey=${apiKey}`)
    const data = await res.json()
    const { articles } = data
    return {
        props: {
            articles:articles
        }
    }
}