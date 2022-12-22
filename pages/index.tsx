import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { Year } from "../libs/types";
import { useUserStore } from "../libs/userStore";
import { useHasHydrated } from "../libs/useHasHydrated";
import Container from "../ui/Container";
import Login from "../ui/Login";
import GraphCard from "../ui/GraphCard";
import TwitterShare from "../ui/TwitterShare";
import Loading from "../ui/Loading";

const YEAR = 2022;

const Index = () => {
  const router = useRouter();

  const [stats, setStats] = useState<Year | null>(null);

  const hasHydrated = useHasHydrated();

  const { token, user, login } = useUserStore();

  useEffect(() => {
    if (router.query.token && router.query.user) {
      login(
        router.query.token as string,
        router.query.user as string,
        router.query.expires
          ? new Date(router.query.expires as string)
          : undefined
      );

      router.push("/");
    }
  }, [router.query.token, router.query.user, router.query.expires]);

  useEffect(() => {
    if (token) {
      fetch(`/api/stats/${YEAR}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(setStats);
    }
  }, [token]);

  if (!token || !hasHydrated) {
    return <Login />;
  }

  if (!stats) {
    return (
      <Container>
        <Loading slow />
      </Container>
    );
  }

  return (
    <Container>
      <GraphCard year={stats} user={user} />
      <TwitterShare user={user} year={YEAR} />
    </Container>
  );
};

export default Index;
