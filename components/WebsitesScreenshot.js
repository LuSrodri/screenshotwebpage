import styles from '@/styles/Websites.module.css'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputURLForScreenshot from './InputURLForScreenshot'

export default function WebsitesScreenshot() {
    return (
        <main className={styles.main}>
            <h1><FontAwesomeIcon icon={faLink} /> Get website&apos;s screenshot</h1>
            <hr></hr>
            <InputURLForScreenshot></InputURLForScreenshot>
        </main>
    )
}