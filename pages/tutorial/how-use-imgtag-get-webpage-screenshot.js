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
                <title>How to use IMG tag to get a Webpage Screenshot?</title>

                <meta name="description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />

                <meta property="og:title" content="How to use IMG tag to get a Webpage Screenshot?" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />
                <meta property="og:url" content="https://screenshotwebpage.com/tutorial/how-use-imgtag-get-webpage-screenshot" />
                <meta property="og:image" content="https://screenshotwebpage.com/imagesinfos-logo.png" />

                <meta name="twitter:title" content="How to use IMG tag to get a Webpage Screenshot?" />
                <meta name="twitter:description" content="The most powerful and free Tool and API to get capture of websites. Try now and get web screenshots online and with no limits. Rapid and reliable. With non login needed." />
                <meta name="twitter:image" content="https://screenshotwebpage.com/imagesinfos-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/imagesinfos-logo.png" />
            </Head>
            <div className={styles.app}>
                <TopBarComponent isHome={false}></TopBarComponent>
                <main className={styles2.main}>
                    <h1><FontAwesomeIcon icon={faQuestion} /> How to use IMG tag to get a Webpage Screenshot?</h1>
                    <hr></hr>
                    <div className={styles2.article}>
                        <p>
                            The IMG tag is a fundamental element in HTML used primarily for displaying images on webpages. However, by thinking creatively, we can employ the IMG tag to retrieve and showcase webpage screenshots. In this tutorial, we will explore how to utilize the IMG tag to obtain webpage screenshots using the &quot;https://api.screenshotwebpage.com/capture/:encodedURL?fullpage=true&download=true&quot; API. By following this step-by-step guide, you&apos;ll have the ability to seamlessly incorporate webpage screenshots into your projects using the IMG tag.
                        </p>
                        <p>
                            The IMG tag in HTML allows us to display images on webpages by specifying the image source (src) attribute. We will leverage this attribute to request and retrieve webpage screenshots using the aforementioned API. The API URL is &quot;https://api.screenshotwebpage.com/capture/:encodedURL?fullpage=true&download=true&quot;.
                        </p>
                        <p>
                            Identify the URL of the webpage you want to capture a screenshot of and encode it. To ensure web-safe encoding, utilize online URL encoding tools readily available on the internet.
                        </p>
                        <p>
                            Using the encoded URL from Step 2, construct the API URL with the required parameters. Insert &quot;:encodedURL&quot; in place of the encoded URL within the API URL, ensuring to include &quot;?fullpage=true&download=true&quot; after the encoded URL.
                        </p>
                        <p>
                            To initiate the request and obtain the webpage screenshot, insert an IMG tag into your HTML code. Set the &quot;src&quot; attribute of the IMG tag to the constructed API URL from Step 3.
                        </p>
                        <pre>
                            &lt;img src=&quot;https://api.screenshotwebpage.com/capture/encodedURL?fullpage=true&download=true&quot; alt=&quot;Webpage Screenshot&quot;&gt;
                        </pre>
                        <p>
                            Style the IMG tag as needed to fit your webpage&apos;s design. You can adjust the width, height, borders, or apply CSS effects to enhance its visual appearance. Place the IMG tag within the appropriate section of your HTML where you want the screenshot to be displayed.
                        </p>
                        <pre>
                            &lt;style&gt; <br></br>
                            .screenshot &#123; <br></br>
                            width: 100%;<br></br>
                            border: 2px solid black;<br></br>
                            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);<br></br>
                            &#125; <br></br>
                            &lt;/style&gt;<br></br>
                            <br></br>
                            &lt;img class=&quot;screenshot&quot; src=&quot;https://api.screenshotwebpage.com/capture/encodedURL?fullpage=true&download=true&quot; alt=&quot;Webpage Screenshot&quot;&gt;
                        </pre>
                        <p>
                            Save your HTML file and open it in a browser. The IMG tag will initiate the request to the API, and the webpage screenshot should be displayed based on the response. Adjust the styling and layout as necessary to optimize the appearance and placement of the screenshot.
                        </p>
                        <p>
                            In this tutorial, you have learned how to employ the IMG tag to retrieve webpage screenshots using the &quot;https://api.screenshotwebpage.com/capture/:encodedURL?fullpage=true&download=true&quot; API. By encoding the URL, constructing the API URL, and implementing the IMG tag within your HTML code, you can seamlessly incorporate webpage screenshots into your projects. Remember to style the IMG tag using CSS to enhance its visual appearance, ensuring it fits harmoniously within your webpage&apos;s design. By leveraging the power of the IMG tag, you can effectively showcase webpage screenshots and elevate the visual appeal of your web applications.
                        </p>
                    </div>
                </main >
                <Footer></Footer>
            </div >
        </>
    )
}
