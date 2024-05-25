import "../App.css";
import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Typography,
  Breadcrumbs,
  Link,
  Box,
  Paper,
} from "@mui/material";

import { SalesChart } from "../saleschart";
import { YearlyBreakup } from "../piechart";
import { MonthlyEarnings } from "../monthlyearnings";
import { RecentTransactions } from "../recenttransactions";
import { ProductPerformance } from "../productperformance";

export const Dashboard = () => {
  return (
    <Box
      sx={{
        marginLeft: 5,
      }}
    >
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Dashboard</Typography>
      </Breadcrumbs>
      <Grid container spacing={2} my={5} display={"flex"}>
        <Grid Item xs={6}>
          <SalesChart />
        </Grid>
        <Grid Item xs={3} mx={5}>
          <Card sx={{ marginBottom: 2 }}>
            <YearlyBreakup />
          </Card>
          <Card sx={{ marginBottom: 2 }}>
            <MonthlyEarnings />
          </Card>
        </Grid>
        <Grid Item xs={3}>
          <Card>
            <RecentTransactions />
          </Card>
        </Grid>
        <Grid Item xs={6} mx={5}>
          <Card>
            <ProductPerformance />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
