import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../../components/layouts/Main";
import { NumericFormat } from "react-number-format";
import { CURRENCY } from "../../constants/currency";

const CustomTextField = (props: TextFieldProps) => {
  return <TextField fullWidth {...props} />;
};

const Products = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <MainLayout>
      <Grid
        container
        alignItems="center"
        direction="row"
        justifyContent="center"
      >
        <Grid item xs={12} textAlign="center">
          <form
            onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          >
            <Card>
              <CardHeader title="Add Product"></CardHeader>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField
                        id="name"
                        fullWidth
                        label="Product Name"
                        {...register("name")}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="category"
                      fullWidth
                      label="Category"
                      {...register("category")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <NumericFormat
                      thousandSeparator
                      allowNegative={false}
                      prefix={CURRENCY.symbol}
                      decimalScale={2} fixedDecimalScale
                      customInput={CustomTextField}
                      {...register("price")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      color="primary"
                      disabled={isLoading}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Products;
