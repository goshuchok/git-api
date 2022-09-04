import React from 'react';
import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <div className={styles.logo_container}>
      <img
        src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
        alt="logo"
        className={styles.logo}
      />
      <h1 className={styles.main_text}>GitHub Users</h1>
    </div>
  );
};

export default Logo;
