import { add } from "date-fns";
import { NextApiRequest, NextApiResponse } from "next";
import database from "../../../libs/database";

const REDIRECT_URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { code } = request.query;

  const body = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`,
    {
      method: "POST",
    }
  ).then((response) => response.text());

  const { access_token, expires_in } = Object.fromEntries(
    body.split("&").map((part) => part.split("="))
  );

  const expires = expires_in ? add(new Date(), { seconds: expires_in }) : null;

  const { login } = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then((response) => response.json());

  await database.user.upsert({
    create: {
      handle: login,
      lastChecked: new Date(),
    },
    update: {
      lastChecked: new Date(),
    },
    where: {
      handle: login,
    },
  });

  response.redirect(
    `${REDIRECT_URL}?token=${access_token}&user=${login}${
      expires ? `&expires=${expires.toISOString()}` : ""
    }`
  );
};

export default handler;
