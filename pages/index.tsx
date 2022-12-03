import { Button, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Roulette = dynamic(() => import('../components/promos/roulette'));

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quarters Burger House</title>
        <meta name="description" content="Quarters Burger Roulette" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Grid
          container
          alignItems="center"
          direction="row"
          justifyContent="center"
        >
          <Grid item xs={12} textAlign="center">
            <Typography variant="h4">Welcome to</Typography>
            <Typography variant="h1">Quarters Burger House</Typography>
          </Grid>
          <Grid item xs={12}>
            <Roulette />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
