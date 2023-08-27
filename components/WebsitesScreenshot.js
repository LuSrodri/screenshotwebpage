import styles from '@/styles/Websites.module.css'
import { faArrowUpRightFromSquare, faCode, faDownload, faHandHoldingDollar, faQuestion, faScrewdriverWrench, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputURLForScreenshot from './InputURLForScreenshot'
import Link from 'next/link'

export default function WebsitesScreenshot() {
    return (
        <main className={styles.main}>
            <h1><FontAwesomeIcon icon={faStar} /> API and Tool to Capture a Website Screenshot - Powerful, Rapid, Reliable and Free! <FontAwesomeIcon icon={faStar} /></h1>
            <hr></hr>
            <InputURLForScreenshot></InputURLForScreenshot>


            <h1><FontAwesomeIcon icon={faScrewdriverWrench} /> How to use the API?</h1>
            <hr></hr>
            <p className={styles.startP}>
                The Screenshot Webpage API is very rapid and reliable tool to capture websites. Here we use <strong>Cache</strong> with <strong>Content Delivery Network</strong> to provide the image very fast and with guarantee of non-fail.
                When are made the first request to the API, we will charge the image of the website capture and save in our Cache then provides it in CDN way. So the very first request will be a little slow, but the next requests will be very fast.
                It meaning that in some moments the screenshot will be a not up-to-date, in 7 days max.
            </p>
            <p className={styles.startP}>
                To use the API you need to make a &quot;GET&quot; request to the endpoint <strong>https://api.screenshotwebpage.com/capture/:encodedURL</strong> being the :encodedURL an URL of the website that you want to capture. The URL must be encoded, so you can use the <a rel="noreferrer" href="https://www.urlencoder.org/" target="_blank">URL Encoder</a> to do it.
            </p>
            <p className={styles.startP}>
                <strong>Example: </strong>
            </p>
            <p className={styles.startP}>
                Made the &quot;GET&quot; request to:
            </p>
            <pre style={{ alignSelf: 'flex-start' }}>https://api.screenshotwebpage.com/capture/https%3A%2F%2Froadmap.sh%2Fbackend</pre>
            <p className={styles.startP}>
                The result will be an PNG image of the website capture:
            </p>
            <img style={{ alignSelf: 'flex-start' }} width={128} height={72} src='https://api.screenshotwebpage.com/capture/https%3A%2F%2Froadmap.sh%2Fbackend' />
            <p className={styles.startP}>
                You can also use the <strong>fullpage</strong> query parameter to capture the full page of the website, like this:
            </p>
            <pre style={{ alignSelf: 'flex-start' }}>https://api.screenshotwebpage.com/capture/https%3A%2F%2Flusrodri.me%2F?fullpage=true</pre>
            <p className={styles.startP}>
                The result will be:
            </p>
            <img style={{ alignSelf: 'flex-start' }} width={128} src='https://api.screenshotwebpage.com/capture/https%3A%2F%2Froadmap.sh%2Fbackend?fullpage=true' />
            <p className={styles.startP}>
                Or you can use the <strong>download</strong> query parameter to download the image, like this:
            </p>
            <pre style={{ alignSelf: 'flex-start' }}>https://api.screenshotwebpage.com/capture/https%3A%2F%2Froadmap.sh%2Fbackend?download=true</pre>
            <p className={styles.startP}>
                <strong>Example:</strong> <a rel="noreferrer" target='_blank' href='https://api.screenshotwebpage.com/capture/https%3A%2F%2Froadmap.sh%2Fbackend?download=true'>Download here! <FontAwesomeIcon icon={faDownload} /></a>
            </p>
            <p className={styles.startP}>
                If the website is not found, the API will return an error with the <strong>status code 404</strong> and the image with text description saying that &quot;Page Not Found&quot;.
            </p>

            <h1><FontAwesomeIcon icon={faCode} /> Some code snippets</h1>
            <hr></hr>
            <p className={styles.startP}>
                In HTML (IMG tag):
            </p>
            <pre style={{ alignSelf: 'flex-start' }}>&lt;img src=&quot;https://api.screenshotwebpage.com/capture/:encodedURL&quot; alt=&quot;Capture of a Website&quot;&gt;</pre>
            <p className={styles.startP}>
                In HTML (A tag):
            </p>
            <pre style={{ alignSelf: 'flex-start' }}>&lt;a href=&quot;https://api.screenshotwebpage.com/capture/:encodedURL&quot; /a&gt;</pre>
            <p className={styles.startP}>
                In JS (Fetch API):
            </p>
            <pre style={{ alignSelf: 'flex-start' }}>fetch(&apos;https://api.screenshotwebpage.com/capture/:encodedURL&apos;)</pre>
            <p className={styles.startP}>
                In JS (Axios Library):
            </p>
            <pre style={{ alignSelf: 'flex-start' }}>axios.get(&apos;https://api.screenshotwebpage.com/capture/:encodedURL&apos;)</pre>

            <h1><FontAwesomeIcon icon={faQuestion} /> Tutorial</h1>
            <hr></hr>

            <Link href={"./tutorial/how-use-atag-get-webpage-screenshot"}>
                <h3>How to use A tag to get a Webpage Screenshot? <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h3>
                <p>As an increasingly visual medium, the internet relies heavily on captivating images. When it comes to sharing website screenshots, one way to accomplish this is by leveraging the A-tag, an HTML anchor tag.</p>
            </Link>

            <Link href={"./tutorial/how-use-axios-get-webpage-screenshot"}>
                <h3>How to use Axios to get a Webpage Screenshot? <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h3>
                <p>In today&apos;s digital landscape, visuals play a crucial role in capturing users&apos; attention. Webpage screenshots are an effective way to showcase the content and design of a website...</p>
            </Link>

            <Link href={"./tutorial/how-use-fetch-get-webpage-screenshot"}>
                <h3>How to use Fetch API to get a Webpage Screenshot? <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h3>
                <p>Webpage screenshots are powerful visual assets that can enhance user experience and aid in communication. In this tutorial, we will explore how to utilize the Fetch API, a built-in JavaScript method, to obtain webpage screenshots...</p>
            </Link>

            <Link href={"./tutorial/how-use-imgtag-get-webpage-screenshot"}>
                <h3>How to use IMG tag to get a Webpage Screenshot? <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h3>
                <p>The IMG tag is a fundamental element in HTML used primarily for displaying images on webpages. However, by thinking creatively, we can employ the IMG tag to retrieve and showcase webpage screenshots...</p>
            </Link>

            <h1><FontAwesomeIcon icon={faHandHoldingDollar} /> Do you want help?</h1>
            <hr></hr>
            <p className={styles.startP}>
                We provide a free and highly effective service for capturing websites, allowing users to easily take screenshots and preserve web pages.
                However, maintaining this service comes with significant operational costs.
                To ensure its continuation, we kindly ask for your contribution through a donation.
                Your support will go a long way in keeping this service available for everyone.
                Please consider making a donation to help us sustain and improve our platform. Thank you for your generosity!
            </p>
            <script async
                src="https://js.stripe.com/v3/buy-button.js">
            </script>

            <stripe-buy-button
                buy-button-id="buy_btn_1NctJpCDEfie1SEOJupHXqQq"
                publishable-key="pk_live_51Nct5UCDEfie1SEOwbGjl9O6ELU1FKRu44APYak2y7UgwMhLrTfoNUe5HPEdKCwEhelMd8EPmCwsypUodz4Uxfei00XKFBVxuo"
            >
            </stripe-buy-button>
            <hr></hr>
        </main>
    )
}