import styles from '@/styles/Topbar.module.css'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function TopBarComponent({isHome = true}) {
    return (
        <header className={styles.topbar}>
            <h2><FontAwesomeIcon icon={faImage} /> <span className={styles.show}>Screenshot Webpage</span></h2>
            { !isHome &&
                <Link href={"/"}>Back to home <FontAwesomeIcon icon={faArrowLeft} /></Link>
            }
        </header>
    )
}