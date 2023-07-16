import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import TopBarComponent from '@/components/TopBarComponent'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Important tools to work with images - Images Infos</title>

        <meta name="description" content="Important tools to work with images. Tools to manipulation and get informations of images." />
        <meta name="keywords" content="important, tools, tool, work, image, images, infos, manipulation, information" />

        <meta property="og:title" content="Important tools to work with images - Images Infos" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Important tools to work with images. Tools to manipulation and get informations of images." />
        <meta property="og:url" content="https://imagesinfos.com/" />
        <meta property="og:image" content="https://imagesinfos.com/imagesinfos-logo.png" />

        <meta name="twitter:title" content="Important tools to work with images - Images Infos" />
        <meta name="twitter:description" content="Important tools to work with images. Tools to manipulation and get informations of images." />
        <meta name="twitter:image" content="https://imagesinfos.com/imagesinfos-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imagesinfos-logo.png" />
      </Head>
      <div className={styles.app}>
        <TopBarComponent isHome={false}></TopBarComponent>
        <h1>Page not found 😔</h1>
        <Footer></Footer>
      </div>
    </>
  )
}
