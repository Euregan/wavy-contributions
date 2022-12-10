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

  // const [contributions, setContributions] = useState<Array<
  //   Array<Contributions>
  // > | null>(null);

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

  // const client = useMemo(
  //   () =>
  //     token
  //       ? createClient({
  //           url: "https://api.github.com/graphql",
  //           headers: {
  //             Authorization: `Bearer ${token}`
  //           }
  //         })
  //       : null,
  //   [token]
  // );

  // useEffect(() => {
  //   if (token) {
  //     fetch(
  //       "https://api.github.com/repos/Euregan/nuance/commits?committer=Euregan&sort=author-date&order=desc&per_page=100&page=1",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       }
  //     )
  //       .then(response => response.json())
  //       .then(console.log);
  //   }
  // }, [token]);

  // useEffect(() => {
  //   if (token) {
  //     fetch(
  //       "https://api.github.com/search/commits?q=committer:Euregan&sort=author-date&order=desc&per_page=100&page=1",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       }
  //     )
  //       .then(response => response.json())
  //       .then(console.log);
  //   }
  // }, [token]);

  // useEffect(() => {
  //   if (client && user) {
  //     client
  //       .query({
  //         user: [
  //           { login: user },
  //           {
  //             contributionsCollection: {
  //               contributionCalendar: {
  //                 totalContributions: true,
  //                 weeks: {
  //                   contributionDays: {
  //                     contributionCount: true,
  //                     date: true,
  //                     weekday: true
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         ]
  //       })
  //
  //       .then(contributions => {
  //         setContributions(
  //           contributions.user?.contributionsCollection.contributionCalendar.weeks.map(
  //             ({ contributionDays }) => contributionDays
  //           ) || null
  //         );
  //       });
  //   }
  // }, [client]);

  if (!token) {
    return <Login />;
  }

  if (!contributions) {
    return <>Fetching your contributions</>;
  }

  return <Graph contributions={contributions} />;
};

export default Index;
