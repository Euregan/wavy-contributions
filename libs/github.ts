import { useEffect, useState, useMemo, useCallback } from "react";
import { Repository, Commit } from "./types";

const call = (token: string, url: string) =>
  fetch(`https://api.github.com/${url}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => response.json());

const repos = (token: string): Promise<Array<Repository>> =>
  call(token, "user/repos?per_page=100&page=1");

const commits = (
  token: string,
  owner: string,
  repo: string,
  user: string
): Promise<Array<Commit>> =>
  call(
    token,
    `repos/${owner}/${repo}/commits?author=${user}&sort=author-date&order=desc&per_page=100&page=1`
  );

export const useContributions = (token?: string, user?: string) => {
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
        .then(console.log);
    }
  }, [token, user]);
};
