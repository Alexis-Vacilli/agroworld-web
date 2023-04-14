import '../styles/globals.css'
import  ThemeContextProvider  from '../context/themeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp


