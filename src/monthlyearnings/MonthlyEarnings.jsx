import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SouthEastIcon from "@mui/icons-material/SouthEast";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const MonthlyEarnings = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Earnings",
        data: [
          500, 700, 600, 800, 1200, 1500, 1700, 1600, 1400, 1300, 1200, 1000,
        ],
        fill: true,
        backgroundColor: "rgba(93, 135, 255, 0.2)",
        borderColor: blue[500],
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#5D87FF",
        titleFont: {
          family: "Plus Jakarta Sans",
          size: 14,
          color: "#FFFFFF",
        },
        bodyFont: {
          family: "Plus Jakarta Sans",
          size: 12,
          color: "#FFFFFF",
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 2,
      },
    },
  };

  return (
    <Card>
      <CardContent sx={{ height: 250 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom sx={{ fontSize: "18px", fontWeight: 600 }}>
            Monthly Earnings
          </Typography>
          <Avatar sx={{ bgcolor: blue[500], width: 32, height: 32 }}>
            <AttachMoneyIcon sx={{ fontSize: 20 }} />
          </Avatar>
        </Box>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          $6,820
        </Typography>
        <Typography>
          <Box component="span">
            <SouthEastIcon
              sx={{
                backgroundColor: "#fdede8",
                padding: "2px",
                marginRight: "5px",
                borderRadius: "50%",
                color: "#fa896b",
              }}
            />
          </Box>
          -4% last year
        </Typography>
        <Box sx={{ height: 100, mt: 2 }}>
          <Line data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};
