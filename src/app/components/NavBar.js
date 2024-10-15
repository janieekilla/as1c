import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <Link href="/" className={styles.homeIcon}><HomeIcon/></Link>
      <div className={styles.navLinks}>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/interests">Interests</Link>
      </div>
    </nav>
  );
}

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a6a02b">
    <g data-name="Layer 2">
      <g data-name="home">
        <rect width="24" height="24" opacity="0" />
        <path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z" />
      </g>
    </g>
  </svg>
);
