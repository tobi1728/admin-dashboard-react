import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { blue, lightBlue, cyan } from "@mui/material/colors";
import NorthWestIcon from "@mui/icons-material/NorthWest";

ChartJS.register(ArcElement, Tooltip, Legend);

export const YearlyBreakup = () => {
  const data = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        data: [30, 40, 30], // Example data
        backgroundColor: [blue[700], lightBlue[400], cyan[200]],
        hoverBackgroundColor: [blue[800], lightBlue[500], cyan[300]],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%", // Powiększ dziurę w środku donut
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
  };

  return (
    <Card>
      <CardContent sx={{ height: 250 }}>
        <Typography gutterBottom sx={{ fontSize: "18px", fontWeight: 600 }}>
          Yearly Breakup
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          $36,358
        </Typography>
        <Typography>
          <NorthWestIcon
            sx={{
              backgroundColor: "#E6FFFA",
              padding: "2px",
              marginRight: "5px",
              borderRadius: "50%",
              color: "#39b69a",
            }}
          />
          +9% last year
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: blue[700],
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Typography variant="body2">2021</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: lightBlue[400],
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Typography variant="body2">2022</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: cyan[200],
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Typography variant="body2">2023</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: 150,
              height: 150,
              top: -30,
            }}
          >
            <Doughnut data={data} options={options} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
