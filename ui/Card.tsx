import { ReactNode } from "react";
import styles from "./Card.module.css";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => (
  <section className={styles.card}>{children}</section>
);

export default Card;
