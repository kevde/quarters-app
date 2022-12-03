import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Prize } from "../../interfaces/Prize";

const SubmitForm = ({ claimId, prize }: { claimId: string; prize: Prize }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      spacing={3}
    >
      <Grid item xs={12}>
        <Typography color="secondary" variant="h5">
          You Claim ID is:
        </Typography>
        <Typography color="secondary" variant="h6">
          {claimId}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <img alt={prize.text} width={300} src={prize.image} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="secondary" variant="h5">
          {prize.text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SubmitForm;
