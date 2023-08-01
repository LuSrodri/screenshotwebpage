import styles from '@/styles/Websites.module.css'
import { faCode, faDownload, faNewspaper, faScrewdriverWrench, faToolbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputURLForScreenshot from './InputURLForScreenshot'

export default function WebsitesScreenshot() {
    return (
        <main className={styles.main}>
            <h1><FontAwesomeIcon icon={faToolbox} /> Get use the tool</h1>
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
            <p className={styles.startP}>
                <FontAwesomeIcon icon={faNewspaper} /> In soon more code snippets...
            </p>
        </main>
    )
}