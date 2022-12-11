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
    return new ImageResponse(<>Open source Contributions</>, {
      width: 1200,
      height: 630,
    });
  }

  return new ImageResponse(
    (
      <img
        width="1200"
        height="630"
        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${user}-${year}.svg`}
      />
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
