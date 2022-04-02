import '../styles/main.scss'
import type { AppProps } from 'next/app'
import {appContext, addToCart} from '@context/context'
function MyApp({ Component, pageProps }: AppProps) {
  const global = addToCart();
  return (
    <appContext.Provider value={global}>
      <Component {...pageProps} />
    </appContext.Provider>
  )
}

export default MyApp
