import styles from './SplashScreen.module.css';

const SplashScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="https://user-images.githubusercontent.com/100826194/232267828-1255bcd8-7cce-4a2b-ac02-0184d060dccd.png" alt="Logo" />
      </div>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default SplashScreen;
