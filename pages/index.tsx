import { useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import { useUserStore } from "../libs/userStore";
import { createClient } from "../libs/graphql";
import Login from "../ui/Login";

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

  const client = useMemo(
    () =>
      token
        ? createClient({
            url: "https://api.github.com/graphql",
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        : null,
    [token]
  );

  const contributions = useMemo(
    () =>
      client && user
        ? client.query({
            user: [
              { login: user },
              {
                name: true,
                contributionsCollection: {
                  contributionCalendar: {
                    totalContributions: true,
                    weeks: {
                      contributionDays: {
                        contributionCount: true,
                        date: true,
                        weekday: true
                      },
                      firstDay: true
                    }
                  }
                }
              }
            ]
          })
        : null,
    [client]
  );

  if (!token) {
    return <Login />;
  }

  if (!contributions) {
    return <>Fetching your contributions</>;
  }

  return <>{token}</>;
};

export default Index;
