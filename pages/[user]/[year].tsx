import Head from "next/head";
import { GetServerSideProps } from "next";
import { useYear } from "../../libs/stats";
import Container from "../../ui/Container";
import GraphCard from "../../ui/GraphCard";
import TwitterShare from "../../ui/TwitterShare";

const URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

interface Props {
  user: string;
  year: number;
}

const Profile = ({ user, year }: Props) => {
  const stats = useYear(year, { user });

  return (
    <Container>
      <Head>
        <title>
          {user}&apos;s {year} commits
        </title>
        <meta property="og:title" content={`${user}'s ${year} commits`} />
        <meta
          property="og:image"
          content={`${URL}/api/og?user=${user}&year=${year}`}
        />
        <meta property="og:url" content={URL} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {stats && <GraphCard year={stats} user={user} />}

      <TwitterShare user={user} year={year} />
    </Container>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user, year } = context.query;

  return {
    props: {
      user,
      year: parseInt(year as string),
    },
  };
};
