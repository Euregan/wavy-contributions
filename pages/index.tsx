import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUserStore } from "../libs/userStore";
import Login from "../ui/Login";

const Index = () => {
  const router = useRouter();

  const { token, login } = useUserStore();

  useEffect(() => {
    if (router.query.token && router.query.expires) {
      login(
        router.query.token as string,
        parseInt(router.query.expires as string)
      );

      router.push("/");
    }
  }, [router.query.token, router.query.expires]);

  if (!token) {
    return <Login />;
  }

  return <>{token}</>;
};

export default Index;
