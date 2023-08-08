import Head from 'next/head'
import styles from '@/styles/ScreenshotWebpage.module.css'
import TopBarComponent from '@/components/TopBarComponent'
import Footer from '@/components/Footer'
import WebsitesScreenshot from '@/components/WebsitesScreenshot'

export default function WebsiteScreenshot() {
  return (
    <>
      <Head>
        <title>API and Tool to Capture a Website Screenshot - Powerful, Rapid, Reliable and Free! - Screenshot Webpage</title>

        <meta name="description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />

        <meta property="og:title" content="API and Tool to Capture a Website Screenshot - Powerful, Rapid, Reliable and Free! - Screenshot Webpage" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />
        <meta property="og:url" content="https://screenshotwebpage.com/" />
        <meta property="og:image" content="https://screenshotwebpage.com/imagesinfos-logo.png" />

        <meta name="twitter:title" content="API and Tool to Capture a Website Screenshot - Powerful, Rapid, Reliable and Free! - Screenshot Webpage" />
        <meta name="twitter:description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />
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
