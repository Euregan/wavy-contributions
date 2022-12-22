import styles from "./Loading.module.css";

interface Props {
  slow?: boolean;
}

const Loading = ({ slow = false }: Props) => (
  <div className={styles.container}>
    <div>Fetching commits, computing data...</div>
    {slow && <div>This might take a while</div>}
  </div>
);

export default Loading;
