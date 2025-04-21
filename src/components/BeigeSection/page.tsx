import React from 'react';
import styles from './BeigeSection.module.scss';

const BeigeSection = ({ text = "Your next section goes here." }) => {
  return (
    <section className={styles.beigeSection}>
      <div className={styles.contentContainer}>
        <p className={styles.sectionText}>{text}</p>
      </div>
    </section>
  );
};

export default BeigeSection;