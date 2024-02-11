import { Card, CardContent, Grid, Typography } from "@mui/material";
import { CURRENCY } from "../../constants/currency";

export const CurrentCashCard = () => {
  return (
    <Grid container width="100%" height="40vh"
      direction="column"
      alignItems="center"
      justifyContent="center">
      <Grid>Current Cash</Grid>
      <Grid>
        <Typography variant="h1">{CURRENCY.symbol} 0.00</Typography>
      </Grid>
    </Grid>
  );
};
