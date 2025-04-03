import Link from "next/link";

import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css'
import Image from "next/image";
import MainHeaderBg from "./main-header-bg";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBg />

            <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <Image src={logoImg} alt="Logo" priority />
                Next Level Food
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse meals</Link>
                    </li>
                    <li>
                        <Link href="/meals">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
            </header>
        </>
    
    );
};
