import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  secure: true,
});

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { image, token, year } = request.body;

  if (!image || !token || !year) {
    return response.end();
  }

  const { login: user } = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
  }).then((response) => response.json());

  try {
    const result = await cloudinary.uploader.upload(
      `data:image/svg+xml;base64,${image}`,
      {
        use_filename: false,
        unique_filename: true,
        overwrite: true,
        public_id: `${user}-${year}`,
      }
    );
    console.log(result);
    return response.json({ url: result.url });
  } catch (error) {
    console.error(error);
    return response.status(500).end();
  }
};

export default handler;
