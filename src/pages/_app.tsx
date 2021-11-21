import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import { AppProvider } from '../contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AppProvider>
  )
}

export default MyApp
