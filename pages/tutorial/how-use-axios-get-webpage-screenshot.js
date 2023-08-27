import Head from 'next/head'
import styles from '@/styles/ScreenshotWebpage.module.css'
import styles2 from '@/styles/Websites.module.css'
import TopBarComponent from '@/components/TopBarComponent'
import Footer from '@/components/Footer'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function WebsiteScreenshot() {
    return (
        <>
            <Head>
                <title>How to use Axios to get a Webpage Screenshot?</title>

                <meta name="description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />

                <meta property="og:title" content="How to use Axios to get a Webpage Screenshot?" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />
                <meta property="og:url" content="https://screenshotwebpage.com/tutorial/how-use-axios-get-webpage-screenshot" />
                <meta property="og:image" content="https://screenshotwebpage.com/imagesinfos-logo.png" />

                <meta name="twitter:title" content="How to use Axios to get a Webpage Screenshot?" />
                <meta name="twitter:description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />
                <meta name="twitter:image" content="https://screenshotwebpage.com/imagesinfos-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/imagesinfos-logo.png" />
            </Head>
            <div className={styles.app}>
                <TopBarComponent isHome={false}></TopBarComponent>
                <main className={styles2.main}>
                    <h1><FontAwesomeIcon icon={faQuestion} /> How to use Axios to get a Webpage Screenshot?</h1>
                    <hr></hr>
                    <div className={styles2.article}>
                        <p>
                            In today&apos;s digital landscape, visuals play a crucial role in capturing users&apos; attention. Webpage screenshots are an effective way to showcase the content and design of a website. In this tutorial, we will explore how to utilize Axios, a popular JavaScript library, to retrieve webpage screenshots using the &quot;https://api.screenshotwebpage.com/capture/:encodedURL?fullpage=true&download=true&quot; API. By following this step-by-step guide, you&apos;ll be able to effortlessly fetch and utilize webpage screenshots in your projects.
                        </p>
                        <p>
                            To begin, make sure Axios is installed in your project. You can use npm (Node Package Manager) or yarn to install it:
                        </p>
                        <pre>
                            npm install axios<br></br>
                            or<br></br>
                            yarn add axios
                        </pre>
                        <p>
                            Once Axios is successfully installed, import it into your JavaScript file:
                        </p>
                        <pre>
                            import axios from &quot;axios&quot;;
                        </pre>
                        <p>
                            Identify the URL of the webpage you want to capture a screenshot of and encode it. There are various online URL encoding tools available that can help you accomplish this easily.
                        </p>
                        <p>
                            Using the encoded URL from Step 3, construct the API URL with the necessary parameters. The base URL is &quot;https://api.screenshotwebpage.com/capture/&quot; followed by &quot;:encodedURL?fullpage=true&download=true&quot;. Replace &quot;:encodedURL&quot; with the encoded URL of the webpage you wish to capture.
                        </p>
                        <p>
                            With Axios, making API requests is simple. Use the axios.get() method and pass the API URL as the argument. This will initiate the request to retrieve the webpage screenshot.
                        </p>
                        <pre>
                            const captureWebpageScreenshot = async () =&gt; &#123; <br></br>
                            try &#123;<br></br>
                            const encodedURL = encodeURIComponent(&quot;your_encoded_url&quot;);<br></br>
                            const apiUrl = `https://api.screenshotwebpage.com/capture/$&#123;encodedURL&#125;?fullpage=true&download=true`;<br></br>
                            <br></br>
                            const response = await axios.get(apiUrl);<br></br>
                            <br></br>
                            &frasl;&frasl; Process the response or save/download the screenshot<br></br>
                            console.log(response);<br></br>
                            &#125; catch (error) &#123;<br></br>
                            &frasl;&frasl; Handle any errors<br></br>
                            console.error(error);<br></br>
                            &#125;<br></br>
                            &#125;;<br></br>
                            <br></br>
                            captureWebpageScreenshot();<br></br>
                        </pre>
                        <p>
                            Once the API request is successful, you can process the response as needed. This could involve saving the screenshot to your server, presenting it to the user, or enabling them to download it directly.
                        </p>
                        <p>
                            In this tutorial, you have learned how to use Axios to retrieve webpage screenshots using the &quot;https://api.screenshotwebpage.com/capture/:encodedURL?fullpage=true&download=true&quot; API. By following the step-by-step guide, you can incorporate Axios into your projects and effortlessly fetch webpage screenshots. Remember to install Axios, import it into your JavaScript file, encode the URL, construct the API URL, and utilize the axios.get() method to make the request. With this newfound knowledge, you can enhance your projects by seamlessly integrating webpage screenshots for various purposes.
                        </p>
                    </div>
                </main >
                <Footer></Footer>
            </div >
        </>
    )
}
