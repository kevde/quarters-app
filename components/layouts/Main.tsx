import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function MainLayout({ children }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quarters Burger House</title>
        <meta name="description" content="Quarters Burger Roulette" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
