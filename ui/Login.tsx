const REDIRECT_URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/auth/callback`;

const Login = () => (
  <a
    href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URL}`}
  >
    Login with Github
  </a>
);

export default Login;
