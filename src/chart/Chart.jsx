import React from "react";
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary chart components including the Legend for the chart
Chart.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// Set global default options for all charts
Chart.defaults.font.family = "Nunito Sans"; // Setting the default font family

export const ChartCard = () => {
  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales 2023",
        data: [12, 19, 3, 5, 2, 3, 20, 22, 30, 45, 10, 6],
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        tension: 0.4,
      },
      {
        label: "Sales 2024",
        data: [15, 25, 8, 12, 6, 5, 25, 26, 35, 50, 15, 10],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "black",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleFont: {
          size: 16,
          weight: "bold",
        },
        bodyFont: {
          size: 14,
        },
        borderColor: "rgba(255,255,255,0.8)",
        borderWidth: 1,
        caretSize: 6,
        caretPadding: 10,
        cornerRadius: 6,
        displayColors: true,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <Card className="text-center stat-card">
      <Card.Body>
        <Line data={chartData} options={chartOptions} height={300} />
      </Card.Body>
    </Card>
  );
};
