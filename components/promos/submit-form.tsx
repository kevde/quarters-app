import { Avatar, Grid, Typography } from "@mui/material";
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
        <Typography color="secondary" variant="h3">
          {claimId}
        </Typography>
      </Grid>
      <Grid item>
        <Avatar
          variant={"rounded"}
          alt={prize.text}
          src={prize.image}
          style={{
            width: 200,
            height: 200,
          }}
        />
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
