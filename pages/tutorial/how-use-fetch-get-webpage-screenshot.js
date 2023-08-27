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
                <title>How to use Fetch API to get a Webpage Screenshot?</title>

                <meta name="description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />

                <meta property="og:title" content="How to use Fetch API to get a Webpage Screenshot?" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />
                <meta property="og:url" content="https://screenshotwebpage.com/tutorial/how-use-fetch-get-webpage-screenshot" />
                <meta property="og:image" content="https://screenshotwebpage.com/imagesinfos-logo.png" />

                <meta name="twitter:title" content="How to use Fetch API to get a Webpage Screenshot?" />
                <meta name="twitter:description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />
                <meta name="twitter:image" content="https://screenshotwebpage.com/imagesinfos-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/imagesinfos-logo.png" />
            </Head>
            <div className={styles.app}>
                <TopBarComponent isHome={false}></TopBarComponent>
                <main className={styles2.main}>
                    <h1><FontAwesomeIcon icon={faQuestion} /> How to use Fetch API to get a Webpage Screenshot?</h1>
                    <hr></hr>
                    <div className={styles2.article}>
                        <p>
                            Webpage screenshots are powerful visual assets that can enhance user experience and aid in communication. In this tutorial, we will explore how to utilize the Fetch API, a built-in JavaScript method, to obtain webpage screenshots using the &quot;https://api.screenshotwebpage.com/capture/:encodedURL?fullpage=true&download=true&quot; API. By following this step-by-step guide, you&apos;ll be equipped with the knowledge to seamlessly retrieve and utilize webpage screenshots in your projects.
                        </p>
                        <p>
                            The Fetch API is a modern, lightweight alternative to classical XMLHttpRequest. It offers a simplified and efficient method for making web requests and handling responses. In this tutorial, we will leverage the Fetch API to retrieve webpage screenshots from the designated API endpoint.
                        </p>
                        <p>
                            Identify the URL of the webpage you wish to capture a screenshot of and encode it. Ensure the URL is web-safe. Several online URL encoding tools are available to help you accomplish this quickly and accurately.
                        </p>
                        <p>
                            Using the encoded URL obtained in Step 2, construct the API URL with the necessary parameters. The base URL should be &quot;https://api.screenshotwebpage.com/capture/&quot; followed by &quot;:encodedURL?fullpage=true&download=true&quot;. Replace &quot;:encodedURL&quot; with the encoded URL of the webpage you want to capture.
                        </p>
                        <p>
                            To initiate the request for the webpage screenshot, use the Fetch API&apos;s fetch() method. Pass the constructed API URL as the argument. This will send the request to the API, triggering the generation and retrieval of the screenshot.
                        </p>
                        <pre>
                            const captureWebpageScreenshot = () =&gt; &#123;<br></br>
                            const encodedURL = encodeURIComponent(&quot;your_encoded_url&quot;);<br></br>
                            const apiUrl = `https://api.screenshotwebpage.com/capture/$&#123;encodedURL&#125;?fullpage=true&download=true`;<br></br>
                            <br></br>
                            fetch(apiUrl)<br></br>
                            .then(response =&gt; &#123;<br></br>
                            &frasl;&frasl; Process the response or save/download the screenshot<br></br>
                            console.log(response);<br></br>
                            &#125;)<br></br>
                            .catch(error =&gt; &#123;<br></br>
                            &frasl;&frasl; Handle any errors<br></br>
                            console.error(error);<br></br>
                            &#125;);<br></br>
                            &#125;;<br></br>
                            <br></br>
                            captureWebpageScreenshot();<br></br>
                        </pre>
                        <p>
                            Once the Fetch API request is successfully executed, you can process the response as needed. This could involve saving the screenshot to your server, displaying it to the user, or enabling them to download it directly based on your project requirements.
                        </p>
                        <p>
                            By following this tutorial, you have gained a comprehensive understanding of how to use the Fetch API to retrieve webpage screenshots using the &quot;https://api.screenshotwebpage.com/capture/:encodedURL?fullpage=true&download=true&quot; API. Remember to encode the URL, construct the API URL, and utilize the fetch() method to initiate the screenshot request. With this knowledge, you can seamlessly integrate webpage screenshots into your projects using the Fetch API&apos;s simplicity and efficiency. Enhance your websites and applications by leveraging the power of visual communication and captivating webpage screenshots.
                        </p>
                    </div>
                </main >
                <Footer></Footer>
            </div >
        </>
    )
}
