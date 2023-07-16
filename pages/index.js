import Head from 'next/head'
import styles from '@/styles/ScreenshotWebpage.module.css'
import TopBarComponent from '@/components/TopBarComponent'
import Footer from '@/components/Footer'
import WebsitesScreenshot from '@/components/WebsitesScreenshot'

export default function WebsiteScreenshot() {
  return (
    <>
      <Head>
        <title>Capture a Website Screenshot - Screenshot Webpage</title>

        <meta name="description" content="Get the Website screenshot easily, that a powerful tool to make any web screenshots online for free with no limits." />

        <meta property="og:title" content="Capture a Website Screenshot - Screenshot Webpage" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Get the Website screenshot easily, that a powerful tool to make any web screenshots online for free with no limits." />
        <meta property="og:url" content="https://screenshotwebpage.com/" />
        <meta property="og:image" content="https://screenshotwebpage.com/imagesinfos-logo.png" />

        <meta name="twitter:title" content="Capture a Website Screenshot - Screenshot Webpage" />
        <meta name="twitter:description" content="Get the Website screenshot easily, that a powerful tool to make any web screenshots online for free with no limits." />
        <meta name="twitter:image" content="https://screenshotwebpage.com/imagesinfos-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imagesinfos-logo.png" />
      </Head>
      <div className={styles.app}>
        <TopBarComponent></TopBarComponent>
        <WebsitesScreenshot></WebsitesScreenshot>
        <Footer></Footer>
      </div>
    </>
  )
}