// src/pages/index.tsx
import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '@/components/hero/hero.module.scss';
import logo from '@/public/logo.png'; // Adjust the path as necessary

const First: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.logo}>
          <Image 
            src={logo} 
            alt="Digital First Media Logo" 
            width={100} 
            height={60} 
          />
        </div>
        
        <h1 className={styles.title}>
          The First Media Company crafted For the<br />
          Digital First generation
        </h1>
      </main>
    </div>
  );
};

export default First;