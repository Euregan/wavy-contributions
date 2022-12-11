import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

const URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

interface Props {
  user: string;
  year: string;
}

const Preview = ({ user, year }: Props) => {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/");
  // }, []);

  return (
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
