import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import MainLayout from "../../components/layouts/Main";

const Roulette = dynamic(() => import("../../components/promos/roulette"));

export default function Home() {
  return (
    <MainLayout>
      <Grid
        container
        alignItems="center"
        direction="row"
        justifyContent="center"
      >
        <Grid item xs={12} textAlign="center">
        <Card>
          <CardHeader title="Add Product"></CardHeader>
          <CardContent>
            Add Product
          </CardContent>
        </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
