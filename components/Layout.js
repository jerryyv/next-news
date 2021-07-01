import Head from 'next/head'
import Nav from './Nav'
export default function Layout({title, description, children}) {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}/>
        </Head>
        <Nav />
        <div>
            {children}
        </div>
        </>
    )
}

Layout.defaultProps = {
    title: 'NextNews',
    description: 'Find trending news articles'
}