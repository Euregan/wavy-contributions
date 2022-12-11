import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUserStore } from "../libs/userStore";
import { useContributions } from "../libs/github";
import Login from "../ui/Login";
import Graph from "../ui/Graph";

const Index = () => {
  const router = useRouter();

  const { token, user, login } = useUserStore();

  useEffect(() => {
    if (router.query.token && router.query.user && router.query.expires) {
      login(
        router.query.token as string,
        router.query.user as string,
        new Date(router.query.expires as string)
      );

      router.push("/");
    }
  }, [router.query.token, router.query.user, router.query.expires]);

  const contributions = useContributions(token, user);

  if (!token) {
    return <Login />;
  }

  if (!contributions) {
    return <>Fetching your contributions</>;
  }

  return <Graph contributions={contributions} user={user} token={token} />;
};

export default Index;
