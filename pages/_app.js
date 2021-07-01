import '../styles/globals.css'
import { CategoryProvider } from '../context/CategoryContext'

function MyApp({ Component, pageProps }) {
  return (
    <CategoryProvider>
      <Component {...pageProps} />
    </CategoryProvider>
  )
}

export default MyApp
