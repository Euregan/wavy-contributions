import type { NextApiRequest, NextApiResponse } from "next";
import type { Prisma } from "@prisma/client";
import { startOfYear, endOfYear } from "date-fns";
import database from "../../../libs/database";
import { graph } from "../../../libs/stats";
import { commits, repos } from "../../../libs/github";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const year = parseInt(request.query.year as string);

  const token = (request.headers.authorization || "").split(" ")[1];

  if (!token) {
    return response.end(401);
  }

  const { login: user } = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
  }).then((response) => response.json());

  const repositories = await repos(token);

  const { id: userId } = await database.user.findUniqueOrThrow({
    where: {
      handle: user,
    },
  });

  await Promise.all(
    repositories.map(async ({ owner, name }) => {
      const repositoryCommits = await commits(
        token,
        owner.login,
        name,
        user,
        year
      );
      const filteredCommits = repositoryCommits.filter(
        ({ commit }) => commit.author?.date
      );

      return database.commit.createMany({
        data: filteredCommits.map(
          (commit): Prisma.CommitCreateManyInput => ({
            date: commit.commit.author?.date as string,
            hash: commit.sha,
            userId,
          })
        ),
        skipDuplicates: true,
      });
    })
  );

  const commitsOfYear = await database.commit.findMany({
    where: {
      date: {
        gte: startOfYear(new Date(year, 0, 1)),
        lte: endOfYear(new Date(year, 0, 1)),
      },
      user: {
        handle: user,
      },
    },
  });

  response.json(graph(commitsOfYear));
};

export default handler;
