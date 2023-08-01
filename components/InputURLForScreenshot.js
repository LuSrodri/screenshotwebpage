import styles from '@/styles/Websites.module.css'
import { faDownload, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function InputURLForScreenshot() {

    const [URLOfCapture, setURLOfCapture] = useState("");
    const [downloadLink, setDownloadLink] = useState("");
    const [isFullPage, setIsFullPage] = useState(false);

    useEffect(() => {
        if (document.getElementById("inputURL")) {
            document.getElementById("inputURL").focus();
        }

        if (document.querySelector("#captureWebpage")) {
            document.querySelector("#captureWebpage").addEventListener("load", function (e) {
                e.target.style.minWidth = "unset";
                e.target.style.minHeight = "unset";
            });
        }
    });

    function onChange(e) {
        setURLOfCapture(e.target.value);
    }

    function onEnter(e) {
        if (e.key === "Enter") {
            readURL();
        }
    }

    function readURL() {
        const imageElement = document.querySelector('#captureWebpage');
        imageElement.src = '';
        imageElement.style.minWidth = "80%";
        imageElement.style.minHeight = "40%";

        let url = URLOfCapture;

        if (!url.startsWith("https://")) {
            url = ("https://" + url);
        }

        setDownloadLink('https://api.screenshotwebpage.com/capture/' + encodeURIComponent(url) + '?fullpage=' + isFullPage + '&download=true');
        imageElement.src = 'https://api.screenshotwebpage.com/capture/' + encodeURIComponent(url) + '?fullpage=' + isFullPage;
    }

    return (
        <div className={styles.screenshot}>
            <div className={styles.inputDiv}>
                <h2><FontAwesomeIcon icon={faInfoCircle} /> Capture the webpage</h2>
                <img src='' id='captureWebpage' />
                <Link target='_blank' href={downloadLink}>Download <FontAwesomeIcon icon={faDownload} /></Link>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <input id={"inputURL"} type="url" placeholder={"Insert an URL"} onKeyDown={onEnter} onChange={onChange} />
                    <label><input type='checkbox' onInput={(e) => setIsFullPage(e.target.checked)}></input> FullPage</label>
                    <button onClick={readURL}>Capture</button>
                </div>
            </div>
            <div className={styles.infosDiv}>
                <h2><FontAwesomeIcon icon={faInfoCircle} /> Informations</h2>
                <p>
                    Input an URL and get the website screenshot easily, that a most powerful tool and API to make any webpage capture online for free and with no limits.
                </p>
                <h2><FontAwesomeIcon icon={faInfoCircle} /> Fast Tip for Devs</h2>
                <p>
                    You can use <strong>https://api.screenshotwebpage.com/capture/:encodedURL</strong> and get the capture of the website.
                </p>
                <p>
                    Or you can use <strong>https://api.screenshotwebpage.com/capture/:encodedURL?fullpage=true</strong> to get the full page screenshot.
                </p>
                <p>
                    Or you can use <strong>https://api.screenshotwebpage.com/capture/:encodedURL?download=true</strong> to get the download link.
                </p>
                <p>
                    Being the <strong>:encodeURL</strong> the encoded URL of the website.
                </p>
            </div>
        </div>
    )
}