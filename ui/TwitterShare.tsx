import styles from "./TwitterShare.module.css";

interface Props {
  user: string;
  year: number;
}

const TwitterShare = ({ user, year }: Props) => (
  <a
    className={styles.link}
    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `Here's my ${year} commits!`
    )}&url=${encodeURIComponent(
      `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}/${user}/${year}`
    )}`}
    target="_blank"
  >
    Share on Twitter
  </a>
);

export default TwitterShare;
