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
                <title>How to use A tag to get a Webpage Screenshot?</title>

                <meta name="description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />

                <meta property="og:title" content="How to use A tag to get a Webpage Screenshot?" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />
                <meta property="og:url" content="https://screenshotwebpage.com/tutorial/how-use-atag-get-webpage-screenshot" />
                <meta property="og:image" content="https://screenshotwebpage.com/imagesinfos-logo.png" />

                <meta name="twitter:title" content="How to use A tag to get a Webpage Screenshot?" />
                <meta name="twitter:description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />
                <meta name="twitter:image" content="https://screenshotwebpage.com/imagesinfos-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/imagesinfos-logo.png" />
            </Head>
            <div className={styles.app}>
                <TopBarComponent isHome={false}></TopBarComponent>
                <main className={styles2.main}>
                    <h1><FontAwesomeIcon icon={faQuestion} /> How to use A tag to get a Webpage Screenshot?</h1>
                    <hr></hr>
                    <div className={styles2.article}>
                        <p>
                            As an increasingly visual medium, the internet relies heavily on captivating images. When it comes to sharing website screenshots, one way to accomplish this is by leveraging the A-tag, an HTML anchor tag. In this tutorial, we will explore how to utilize the A-tag to capture webpage screenshots using the &quot;https://api.screenshotwebpage.com/capture/:encodedURL?fullpage=true&download=true&quot; API. With this step-by-step guide, you&apos;ll be able to capture and download webpage screenshots effortlessly.
                        </p>
                        <p>
                            The A-tag is typically used for creating hyperlinks, but it can also be utilized to execute certain actions based on the specified attributes. We will harness this functionality to request and download webpage screenshots using the API.
                        </p>
                        <p>
                            Identify the URL of the webpage you wish to capture a screenshot of. Make sure to encode the URL to ensure it is web-safe. There are numerous online URL encoders available that can help you accomplish this in a few simple steps.
                        </p>
                        <p>
                            Using the encoded URL from Step 2, construct the API URL with the necessary parameters. The base URL is &quot;https://api.screenshotwebpage.com/capture/&quot; followed by &quot;:encodedURL?fullpage=true&download=true&quot;. Replace &quot;:encodedURL&quot; with the encoded URL of the webpage you want to capture.
                        </p>
                        <p>
                            To invoke the API request and trigger the screenshot capture, create an A-tag in your HTML code. Set the &quot;href&quot; attribute to the constructed API URL from Step 3.
                        </p>
                        <pre>
                            &lt;a href=&quot;https://api.screenshotwebpage.com/capture/encodedURL?fullpage=true&download=true&quot;&gt;Capture Screenshot&lt;/a&gt;
                        </pre>
                        <p>
                            To enhance the user experience, you might want to style the A-tag as a button or add some visual cues. Use CSS to customize the appearance to match your website design.
                        </p>
                        <pre>
                            &lt;style&gt; <br></br>
                                .screenshot-button &#123;<br></br>
                                    background - color: #4CAF50;<br></br>
                                    color: white;<br></br>
                                    padding: 10px 20px;<br></br>
                                    text-align: center;<br></br>
                                    text-decoration: none;<br></br>
                                    display: inline-block;<br></br>
                                    font-size: 16px;<br></br>
                                    border-radius: 5px;<br></br>
                                    cursor: pointer;<br></br>
                                &#125;<br></br>
                            &lt;/style&gt;
                        </pre>
                        <pre>
                            &lt;a class=&quot;screenshot-button&quot; href=&quot;https://api.screenshotwebpage.com/capture/encodedURL?fullpage=true&download=true&quot;&gt;Capture Screenshot&lt;/a&gt;
                        </pre>
                        <p>
                            Once you have implemented the A-tag, save and refresh your webpage. Click on the &quot;Capture Screenshot&quot; button (or your styled equivalent) to initiate the process. Depending on the webpage&apos;s complexity and size, it may take a few moments to generate the screenshot. Afterward, the browser will prompt you to download the screenshot file.
                        </p>
                        <p>
                            By following this tutorial, you have successfully learned how to utilize the A-tag along with the API &quot;https://api.screenshotwebpage.com/capture/:encodedURL?fullpage=true&download=true&quot; to capture webpage screenshots. This straightforward method allows you to add an A-tag on your webpage, enabling users to easily capture and download screenshots with just a click. Experiment with different styling options to create an intuitive and visually appealing user experience.
                        </p>
                    </div>
                </main >
                <Footer></Footer>
            </div >
        </>
    )
}
