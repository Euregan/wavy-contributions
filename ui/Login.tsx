import styles from "./Login.module.css";

const REDIRECT_URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/auth/callback`;

const Login = () => (
  <div className={styles.login}>
    <h1 className={styles.catchphrase}>
      Welcome to <span className={styles.coloredWord}>Wave</span>
    </h1>
    <a
      className={styles.link}
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=repo read:user`}
    >
      Login with Github
    </a>
  </div>
);

export default Login;
