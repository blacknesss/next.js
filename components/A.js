import Link from 'next/link';
import styles from '../styles/A.module.scss';

export default function A({text, href}){
    return (
        <Link href={href}>
            <p className={styles.link}>{text}</p>
        </Link>
    )
}