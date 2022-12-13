import { useEffect, useState } from "react";
import { getYear } from "date-fns";
import { Repository, Commit } from "./types";

interface Parameters {
  page: number;
  per_page: number;
  [k: string]: string | number;
}

const call = async <T>(
  token: string,
  url: string,
  parameters: Parameters,
  stopCondition: (lastItem: T) => boolean = () => false
): Promise<Array<T>> => {
  const query =
    "?" +
    Object.entries(parameters)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

  const response = await fetch(`https://api.github.com/${url}${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (response.status === 409) {
    return [];
  }

  if (!response.ok) {
    throw "oh no";
  }

  const results: Array<T> = await response.json();

  const additionalResults =
    response.headers.has("link") &&
    (response.headers.get("link") as string).includes('rel="next"') &&
    !stopCondition(results[results.length - 1])
      ? await call(
          token,
          url,
          {
            ...parameters,
            page: parameters.page + 1,
          },
          stopCondition
        )
      : [];

  return results.concat(additionalResults);
};

const repos = (token: string) =>
  call<Repository>(token, "user/repos", { per_page: 100, page: 1 });

const commits = (token: string, owner: string, repo: string, user: string) =>
  call<Commit>(
    token,
    `repos/${owner}/${repo}/commits`,
    {
      per_page: 100,
      page: 1,
      author: user,
      sort: "author-date",
      order: "desc",
    },
    (commit) =>
      commit.commit.author?.date
        ? getYear(new Date(commit.commit.author?.date)) < 2022
        : true
  );

export const useContributions = (token?: string, user?: string) => {
  const [contributions, setContributions] = useState<Array<Date> | null>(null);

  useEffect(() => {
    if (token && user) {
      repos(token)
        .then((repos) =>
          Promise.all(
            repos.map(({ owner, name }) =>
              commits(token, owner.login, name, user)
            )
          )
        )
        .then((commits) =>
          // If the repo is empty (not initialized), it returns an object
          commits.flatMap((commits) => (Array.isArray(commits) ? commits : []))
        )
        .then(
          (commits) =>
            commits
              .map(({ commit }) =>
                commit.author?.date ? new Date(commit.author?.date) : null
              )
              .filter((x) => x) as Array<Date>
        )
        .then(setContributions);
    }
  }, [token, user]);

  return contributions;
};
