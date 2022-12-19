import type { ReactNode } from "react";
import styles from "./Container.module.css";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => (
  <section className={styles.container}>{children}</section>
);

export default Container;
