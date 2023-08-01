import styles from '@/styles/Footer.module.css'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Developed by <Link href={'https://lusrodri.me'} target='_blank'>LuSRodri <FontAwesomeIcon icon={faUpRightFromSquare} /></Link></p>
        </footer>
    )
}