"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const GenderInsightGraph = () => {
  const labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  const data = {
    labels,
    datasets: [
      {
        data: [5000, 10000, 5000, 4700, 200, 8500, 8000, 500, 9500],
        backgroundColor: [
          "rgba(255, 182, 193, 0.7)", // Pink
          "rgba(135, 206, 235, 0.7)", // Light Blue
          "rgba(221, 160, 221, 0.7)", // Purple
          "rgba(255, 218, 185, 0.7)", // Peach
          "rgba(144, 238, 144, 0.7)", // Light Green
          "rgba(255, 218, 185, 0.7)", // Peach
          "rgba(255, 182, 193, 0.7)", // Pink
          "rgba(221, 160, 221, 0.7)", // Purple
          "rgba(135, 206, 235, 0.7)", // Light Blue
        ],
        borderColor: [
          "rgba(255, 182, 193, 1)",
          "rgba(135, 206, 235, 1)",
          "rgba(221, 160, 221, 1)",
          "rgba(255, 218, 185, 1)",
          "rgba(144, 238, 144, 1)",
          "rgba(255, 218, 185, 1)",
          "rgba(255, 182, 193, 1)",
          "rgba(221, 160, 221, 1)",
          "rgba(135, 206, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "CraftLore Gender Economics",
        padding: {
          top: 10,
          bottom: 30,
        },
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          stepSize: 1000,
          font: {
            size: 12,
          },
        },
        max: 10000,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
    },
  };
  return (
    <div className="h-[500px] space-y-7 pb-32">
      <Bar data={data} options={options} />
      <div className="grid grid-cols-2 gap-2 lg:container">
        <div className="col-span-2 rounded-md border border-black p-4 lg:col-span-1">
          <p>A. Wage Disparity (₹ Women)</p>
          <p>B. Wage Disparity (₹ Men)</p>
          <p>C. Labor Market Participation (Women)</p>
          <p>D. Labor Market Participation (Men)</p>
        </div>
        <div className="col-span-2 rounded-md border border-black p-4 lg:col-span-1">
          <p>E. Access to Resources (Women)</p>
          <p>F. Access to Resources (Men)</p>
          <p>G. Unpaid Work (Women Hours)</p>
          <p>H. Entrepreneurship (Women-owned Businesses)</p>
          <p>I. Entrepreneurship (Men-owned Businesses)</p>
        </div>
      </div>
    </div>
  );
};
