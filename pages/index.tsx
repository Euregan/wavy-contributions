import { useEffect, useState } from "react";
import Head from "next/head";
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

const URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

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
    return (
      <>
        <Head>
          <title>Make a graph from your commits!</title>
          <meta property="og:title" content="Make a graph from your commits!" />
          <meta property="og:image" content={`${URL}/api/og?year=${YEAR}`} />
          <meta property="og:url" content={URL} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Login />
      </>
    );
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
