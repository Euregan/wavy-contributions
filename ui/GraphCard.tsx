import type { Year } from "../libs/types";
import { total } from "../libs/stats";
import Graph from "./Graph";
import styles from "./GraphCard.module.css";

interface Props {
  year: Year;
  user: string;
}

const GraphCard = ({ year, user }: Props) => {
  const count = total(year);

  return (
    <div className={styles.layout}>
      <div className={styles.text}>{user}</div>
      <div className={styles.text}>{count} commits</div>
      <Graph year={year} />
    </div>
  );
};

export default GraphCard;
