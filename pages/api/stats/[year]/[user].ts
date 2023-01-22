import type { NextApiRequest, NextApiResponse } from "next";
import { startOfYear, endOfYear } from "date-fns";
import database from "../../../../libs/database";
import { graph } from "../../../../libs/stats";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const user = request.query.user as string;
  const year = parseInt(request.query.year as string);

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
