import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.title}>
      <a href="/"><img className={styles.img} src="/logo.svg" alt="logo"/></a>
      <h2>Wave</h2>
    </div>
  </header>
);

export default Header;
