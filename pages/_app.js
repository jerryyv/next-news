import '../styles/globals.css'
import Nav from '../components/Nav'
import { CategoryProvider } from '../context/CategoryContext'

function MyApp({ Component, pageProps }) {
  return (
    <CategoryProvider>
      <Nav />
      <Component {...pageProps} />
    </CategoryProvider>
  )
}

export default MyApp
