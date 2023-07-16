import '@/styles/globals.css';
import Script from 'next/script';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false


export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZXNLLQZGP1" />
      <Script id="gtag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', 'G-ZXNLLQZGP1');
        `}
      </Script> */}
      <Component {...pageProps} />
    </>
  )
}