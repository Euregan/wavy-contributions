import styles from "./Login.module.css";

const REDIRECT_URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/auth/callback`;

const Login = () => (
  <div className={styles.title}>   
    <h1 className={styles.h1}>Welcome to <span className={styles.color}>Wave</span></h1>
    <a
      className={styles.link}
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=repo read:user`}
    >
      <span className={styles.span}>Login you with Github</span>
    </a>
  </div>
 
);

export default Login;
