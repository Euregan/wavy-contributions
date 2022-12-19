import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const user = searchParams.get("user");
  const year = searchParams.get("year");

  if (!user || !year) {
    return new ImageResponse(<>Wavy contributions</>, {
      width: 1200,
      height: 630,
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#00031B",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          width="1200"
          height="630"
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${user}-${year}.svg`}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
