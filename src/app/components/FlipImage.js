import React from 'react';
import styles from '@/app/styles/flipImage.module.css'; 
import Image from 'next/image';

export default function FlipImage({ frontImgSrc, backImgSrc }) {
  return (
    <div className={styles.container}>
      <div className={styles.flipImage}>
        <div className={styles.front}>
          <Image src={frontImgSrc} alt="Flip" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.back}>
          <Image src={backImgSrc} alt="Flipped" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
