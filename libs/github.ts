import { useEffect, useState, useMemo, useCallback } from "react";
import { Repository, Commit } from "./types";

const call = async <T>(token: string, url: string): Promise<T> => {
  const response = await fetch(`https://api.github.com/${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json"
    }
  });

  console.log(response.headers.get("link"));

  return response.json();
};

const repos = (token: string) =>
  call<Array<Repository>>(token, "user/repos?per_page=100&page=1");

const commits = (token: string, owner: string, repo: string, user: string) =>
  call<Array<Commit>>(
    token,
    `repos/${owner}/${repo}/commits?author=${user}&sort=author-date&order=desc&per_page=100&page=1`
  );

export const useContributions = (token?: string, user?: string) => {
  const [contributions, setContributions] = useState<Array<Date> | null>(null);

  useEffect(() => {
    if (token && user) {
      repos(token)
        .then(repos =>
          Promise.all(
            repos.map(({ owner, name }) =>
              commits(token, owner.login, name, user)
            )
          )
        )
        .then(commits =>
          // If the repo is empty (not initialized), it returns an object
          commits.flatMap(commits => (Array.isArray(commits) ? commits : []))
        )
        .then(
          commits =>
            commits
              .map(({ commit }) =>
                commit.author?.date ? new Date(commit.author?.date) : null
              )
              .filter(x => x) as Array<Date>
        )
        .then(setContributions);
    }
  }, [token, user]);

  return contributions;
};
