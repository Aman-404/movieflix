import Link from "next/link";
import styles from '../styles/navbar.module.css'
import Image from "next/image";
import Nav from "./nav";

export default function Header(){
    return(
        
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                {/* <Link href="/">
                    <Image src="/logo.png" alt="" width={150} height={40}/>
                </Link> */}
            </div>
            <Nav/>
        </header>
    )
}