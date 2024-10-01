import styles from "@/app/styles/navbar.module.css";
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <Link href="/">Home</Link>
      <div className={styles.navLinks}>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/interests">Interests</Link>
      </div>
    </nav>
  );
}
