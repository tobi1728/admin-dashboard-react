import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import {
  Card,
  CardContent,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

const salesData = {
  2021: [300, 200, 400, 300, 500, 200, 400, 300, 450, 350, 250, 500],
  2022: [320, 240, 420, 310, 530, 210, 430, 310, 460, 370, 260, 510],
  2023: [340, 260, 440, 320, 550, 220, 450, 320, 470, 380, 270, 520],
};

const months = [
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
];

export const SalesChart = () => {
  const [year, setYear] = useState("2023");

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const data = {
    labels: months,
    datasets: [
      {
        label: `Sales ${year}`,
        data: salesData[year],
        backgroundColor: "#5D87FF",
        borderColor: "#5D87FF",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "Plus Jakarta Sans",
            color: "#5A6A85",
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "Plus Jakarta Sans",
          },
          stepSize: 100,
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
  };

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: "18px", fontWeight: 600 }}>
          Sales Overview
        </Typography>
        <FormControl sx={{ padding: 2 }}>
          <InputLabel>Year</InputLabel>
          <Select value={year} onChange={handleYearChange}>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
          </Select>
        </FormControl>
        <div style={{ height: 355 }}>
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};
