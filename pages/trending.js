import Nav from '../components/Nav'

function trending({ articles }) {
    console.log(articles);
    return (
        <div>
            <Nav />
            <h2>Top Headlines</h2>
        </div>
    )
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