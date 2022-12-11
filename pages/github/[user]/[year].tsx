import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

interface Props {
  user: string;
  year: string;
}

const Preview = ({ user, year }: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <Head>
      <title>
        {user}&apos;s {year} open source contributions
      </title>
      <meta
        property="og:title"
        content={`${user}'s ${year} open source contributions`}
        key="title"
      />
      <meta
        property="og:image"
        content={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${user}-${year}.svg`}
      />
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
