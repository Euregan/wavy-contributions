import { ReactNode } from "react";
import styles from "./Page.module.css";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

const Page = ({ children }: Props) => (
  <>
    <Header/>
    <main className={styles.page}>{children}</main>
  </>
);

export default Page;
