/* eslint-disable react/jsx-key */
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { CurrentCashCard } from "./CurrentCashCard";
import Link from "next/link";

const menuItems = [
  {
    name: "Products",
    icon: "",
    goto: "/products",
  },
  {
    name: "Orders",
    icon: "",
    goto: "/orders",
  },
  {
    name: "Expenses",
    icon: "",
    goto: "/expenses",
  },
  {
    name: "Manage Accounting",
    icon: "",
    goto: "/accounting",
  },
  {
    name: "View Report",
    icon: "",
    goto: "/view-report",
  },
];
const Dashboard = () => {
  return (
    <Grid container direction="column" height="100vh">
      <Grid item>
        <CurrentCashCard />
      </Grid>
      <Grid item>
        <Card>
          <CardContent
            sx={{
              height: "60vh",
            }}
          >
            <Grid container>
              <Grid xs={8} container spacing={2}>
                {menuItems.map((item) => (
                  <Grid item>
                    <Link href={item?.goto}>
                      <Card>
                        <CardContent
                          sx={{
                            height: "10rem",
                            width: "10rem",
                          }}
                        >
                          {item.name}
                        </CardContent>
                      </Card>
                    </Link>
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
