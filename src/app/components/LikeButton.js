"use client"
import React from 'react'
import styles from '@/app/styles/likeButton.module.css'

export default function LikeButton(){
    const [likeCount, setLikeCount] = React.useState(0)

    const handleLikeClicked = () => {
        setLikeCount(likeCount + 1)
    }
    return <div className={styles.container}>{likeCount}<button className={styles.button} onClick={handleLikeClicked}>Like Me</button></div>
}