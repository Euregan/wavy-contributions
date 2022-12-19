import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Container from "../../ui/Container";
import styles from "./Profile.module.css";

const URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

interface Props {
  user: string;
  year: string;
}

const Profile = ({ user, year }: Props) => {
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
      <Image
        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${user}-${year}.svg`}
        alt={`${user}'s ${year} commits`}
        width={1200}
        height={630}
        className={styles.image}
      />
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `Here's my ${year} commits!`
        )}&url=${encodeURIComponent(
          `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}/${user}/${year}`
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        Share your contributions on Twitter
      </a>
    </Container>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user, year } = context.query;

  return {
    props: {
      user,
      year,
    },
  };
};
