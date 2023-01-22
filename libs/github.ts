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
  shouldStop: (lastItem: T) => boolean = () => false
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
    console.error(response.status);
    console.error(response.body);
    throw "oh no";
  }

  const results: Array<T> = await response.json();

  const additionalResults =
    response.headers.has("link") &&
    (response.headers.get("link") as string).includes('rel="next"') &&
    !shouldStop(results[results.length - 1])
      ? await call(
          token,
          url,
          {
            ...parameters,
            page: parameters.page + 1,
          },
          shouldStop
        )
      : [];

  return results.concat(additionalResults);
};

export const repos = (token: string) =>
  call<Repository>(token, "user/repos", { per_page: 100, page: 1 });

export const commits = (
  token: string,
  owner: string,
  repo: string,
  user: string,
  year: number
) =>
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
        ? getYear(new Date(commit.commit.author?.date)) < year
        : false
  );
