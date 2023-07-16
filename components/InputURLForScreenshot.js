import styles from '@/styles/Websites.module.css'
import { faInfoCircle, faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export default function InputURLForScreenshot() {

    useEffect(() => {
        if (document.getElementById("inputURL")) {
            document.getElementById("inputURL").focus();
        }
    });

    const [inputDiv, setInputDiv] = useState(
        <>
            <input id={"inputURL"} type="url" placeholder={"Insert an URL"} onKeyDown={onEnter} />
            <h3>Press enter to get the screenshot</h3>
        </>
    );

    function onEnter(e) {
        if (e.key === "Enter") {
            readURL(e.target.value);
        }
    }

    function readURL(url) {
        setInputDiv(<Image alt={"loading"} id={styles.loading} width={500} height={500} src={"/loading.gif"}></Image>);

        if (!url.startsWith("https://")) {
            url = ("https://" + url);
        }

        axios.get(process.env.NEXT_PUBLIC_IMAGESINFOS_API_URL1 + '/getWebsitesScreenshot', {
            headers: {
                "URL": url,
                "fullpage": "true",
                'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
                'X-RapidAPI-Host': process.env.NEXT_PUBLIC_IMAGESINFOS_API_HOST1
            }
        }).then(result => {
            axios.get(process.env.NEXT_PUBLIC_IMAGESINFOS_API_URL2 + '/getMetadataFromImage', {
                headers: {
                    'URL': result.data.publicUrl,
                    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
                    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_IMAGESINFOS_API_HOST2
                }
            }).then(result1 => {
                setInputDiv(<Link href={result.data.publicUrl} target={"_blank"}><Image id={styles.img} width={result1.data.metadata.width} height={result1.data.metadata.height} src={result.data.publicUrl} alt={result.data.publicUrl}></Image></Link>)
            });
        }).catch(async () => {
            setInputDiv(
                <>
                    <input id={"inputURL"} type="url" placeholder={"Insert an URL"} onKeyDown={onEnter} />
                    <h3><FontAwesomeIcon icon={faWarning} /> Must be a valid URL</h3>
                </>
            );
        });
    }

    return (
        <div className={styles.colorPalette}>
            <div className={styles.inputDiv}>
                {inputDiv}
            </div>
            <div className={styles.infosDiv2}>
                <h2><FontAwesomeIcon icon={faInfoCircle} /> Informations</h2>
                <p>
                    Input an URL and get the website screenshot easily, that a powerful tool to make any web screenshots online for free with no limits. Click in the image to open.
                </p>
                <h2><FontAwesomeIcon icon={faInfoCircle} /> Tip for Devs</h2>
                <p>
                    You can use <strong>https://api1.imagesinfos.com/screenshot/encodedURL</strong> and get the capture of the website.
                </p>
                <p>
                    Or you can use <strong>https://api1.imagesinfos.com/screenshot/full/encodedURL</strong> to get the full page screenshot.
                </p>
                <p>
                    Example: <strong>https://api1.imagesinfos.com/screenshot/https%3A%2F%2Flusrodri.me%2F</strong>
                </p>
            </div>
        </div>
    )
}