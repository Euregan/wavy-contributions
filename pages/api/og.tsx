import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import Graph from "../../ui/Graph";

export const config = {
  runtime: "experimental-edge",
};

const WIDTH = 1200;
const HEIGHT = 630;

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const user = searchParams.get("user") || "Euregan";
  const year = searchParams.get("year") || "2022";

  const stats = await fetch(
    `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/stats/${year}/${user}`
  ).then((response) => response.json());

  // Only a subset of CSS is supported, please refer to https://github.com/vercel/satori#css
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#00031B",
          width: WIDTH,
          height: HEIGHT,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            // Adding some padding
            width: WIDTH - 60,
            height: HEIGHT - 60,
          }}
        >
          <Graph year={stats} />
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
    }
  );
}
