import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";

const URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

interface Props {
  user: string;
  year: string;
}

const Preview = ({ user, year }: Props) => {
  return (
    <>
      <Head>
        <title>
          {user}&apos;s {year} open source contributions
        </title>
        <meta
          property="og:title"
          content={`${user}'s ${year} open source contributions`}
        />
        <meta
          property="og:image"
          content={`${URL}/api/og?user=${user}&year=${year}`}
        />
        <meta property="og:url" content={URL} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Image
        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${user}-${year}.svg`}
        alt={`${user}'s ${year} open source contributions`}
        width={1200}
        height={630}
      />
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `Here's my ${year} open source contribution!`
        )}&url=${encodeURIComponent(
          `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}/${user}/${year}`
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        Share your contributions on Twitter
      </a>
    </>
  );
};

export default Preview;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user, year } = context.query;

  return {
    props: {
      user,
      year,
    },
  };
};
