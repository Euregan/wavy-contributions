import { useState, useEffect } from "react";
import { getHours, getWeek } from "date-fns";
import type { Commit } from "@prisma/client";
import type { Year, Week } from "./types";

const initializeWeek = (): Week => ({
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
  20: 0,
  21: 0,
  22: 0,
  23: 0,
  24: 0,
});

export const initializeYear = (): Year => ({
  0: initializeWeek(),
  1: initializeWeek(),
  2: initializeWeek(),
  3: initializeWeek(),
  4: initializeWeek(),
  5: initializeWeek(),
  6: initializeWeek(),
  7: initializeWeek(),
  8: initializeWeek(),
  9: initializeWeek(),
  10: initializeWeek(),
  11: initializeWeek(),
  12: initializeWeek(),
  13: initializeWeek(),
  14: initializeWeek(),
  15: initializeWeek(),
  16: initializeWeek(),
  17: initializeWeek(),
  18: initializeWeek(),
  19: initializeWeek(),
  20: initializeWeek(),
  21: initializeWeek(),
  22: initializeWeek(),
  23: initializeWeek(),
  24: initializeWeek(),
  25: initializeWeek(),
  26: initializeWeek(),
  27: initializeWeek(),
  28: initializeWeek(),
  29: initializeWeek(),
  30: initializeWeek(),
  31: initializeWeek(),
  32: initializeWeek(),
  33: initializeWeek(),
  34: initializeWeek(),
  35: initializeWeek(),
  36: initializeWeek(),
  37: initializeWeek(),
  38: initializeWeek(),
  39: initializeWeek(),
  40: initializeWeek(),
  41: initializeWeek(),
  42: initializeWeek(),
  43: initializeWeek(),
  44: initializeWeek(),
  45: initializeWeek(),
  46: initializeWeek(),
  47: initializeWeek(),
  48: initializeWeek(),
  49: initializeWeek(),
  50: initializeWeek(),
  51: initializeWeek(),
  52: initializeWeek(),
  53: initializeWeek(),
});

export const graph = (commits: Array<Commit>): Year => {
  const year = initializeYear();

  commits.forEach(({ date }) => {
    const week = (getWeek(date) as unknown) as keyof Year;
    const hour = (getHours(date) as unknown) as keyof Week;

    year[week][hour] += 1;
  });

  return year;
};

export const peak = (week: Week): number =>
  Object.values(week).reduce(
    (max: number, count: number) => (count > max ? count : max),
    0
  );

export const total = (year: Year): number =>
  Object.values(year).reduce(
    (total: number, week: Week) =>
      Object.values(week).reduce(
        (total: number, count: number) => count + total,
        0
      ) + total,
    0
  );

type Options = { token: string } | { user: string };

export const useYear = (year: number, options: Options) => {
  const [stats, setStats] = useState<Year | null>(null);

  useEffect(() => {
    const headers: HeadersInit =
      "token" in options
        ? {
            authorization: `Bearer ${options.token}`,
          }
        : {};

    const url =
      "user" in options
        ? `/api/stats/${year}/${options.user}`
        : `/api/stats/${year}`;

    fetch(url, {
      headers,
    })
      .then((response) => response.json())
      .then(setStats);
  }, []);

  return stats;
};
