import styles from '../styles/bounce.module.css'

export default function BounceText({children}){
    return <div className={styles.bounce}>{children}</div>
}