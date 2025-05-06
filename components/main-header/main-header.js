import Link from "next/link";

import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css'
import Image from "next/image";
import MainHeaderBg from "./main-header-bg";
import NavLink from "./nav-link";

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
                        <NavLink href="/meals">Browse meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
            </header>
        </>
    
    );
};
