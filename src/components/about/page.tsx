import React from 'react';
import Image from 'next/image';
import styles from '@/components/about/about.module.scss';
import '@/app/global.scss';


// Direct imports for images
import blueSquareImage from '@/public/img1.png';
import pinkFiberImage from '@/public/img2.png';
import crystalImage from '@/public/img3.png';
import greenCubeImage from '@/public/img4.png';
import buildingImage from '@/public/img5.png';
import redPerfumeImage from '@/public/img6.png';

const SecondPage = () => {
  return (
    <div className={styles['second-page']}>
      <div className={styles['image-grid']}>
        <div className={styles['image-item']}>
          <Image
            src={blueSquareImage}
            alt="Blue geometric shape"
            placeholder="blur"
            width={120}
            height={120}
          />
        </div>

        <div className={styles['image-item']}>
          <Image
            src={pinkFiberImage}
            alt="Pink fiber structure"
            placeholder="blur"
            width={120}
            height={120}
          />
        </div>

        <div className={styles['image-item']}>
          <Image
            src={crystalImage}
            alt="Crystal structure"
            placeholder="blur"
            width={120}
            height={120}
          />
        </div>

        <div className={styles['image-item']}>
          <Image
            src={greenCubeImage}
            alt="Green geometric design with cube"
            placeholder="blur"
            width={120}
            height={120}
          />
        </div>

        <div className={styles['image-item']}>
          <Image
            src={buildingImage}
            alt="Modern architecture"
            placeholder="blur"
            width={120}
            height={120}
          />
        </div>

        <div className={styles['image-item']}>
          <Image
            src={redPerfumeImage}
            alt="Red perfume bottle"
            placeholder="blur"
            width={120}
            height={120}
          />
        </div>
      </div>

      <div className={styles['content-container']}>
        <h2 className={styles.headline}>Where innovation meets precision.</h2>
        <p className={styles.description}>
          Synergy in action: our team of designers, engineers, architects, and analytical
          experts, collaborating seamlessly to transform challenges into
          opportunities. Together, we deliver tailored solutions that drive impact
          and inspire growth.
        </p>
      </div>
    </div>
  );
};

export default SecondPage;