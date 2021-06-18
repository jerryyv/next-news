import '../styles/globals.css'
import Nav from '../components/Nav'
import { CategoryProvider } from '../context/CategoryContext'
import Error from 'next/error'

function MyApp({ Component, pageProps }) {
  if(pageProps.error){
    return <Error statusCode={pageProps.erro.statusCode} title={pageProps.error.message}/>
  }
  return (
    <CategoryProvider>
      <Nav />
      <Component {...pageProps} />
    </CategoryProvider>
  )
}

export default MyApp
