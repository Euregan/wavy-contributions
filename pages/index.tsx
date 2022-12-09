import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUserStore } from "../libs/userStore";
import { createClient } from "../libs/graphql";
import { Contributions } from "../libs/types";
import { useContributions } from "../libs/github";
import Login from "../ui/Login";
import Graph from "../ui/Graph";

const Index = () => {
  const router = useRouter();

  const { token, user, login } = useUserStore();

  const [contributions, setContributions] = useState<Array<
    Array<Contributions>
  > | null>(null);

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

  useContributions(token, user);

  if (!token) {
    return <Login />;
  }

  return <Login />;
};

export default Index;
