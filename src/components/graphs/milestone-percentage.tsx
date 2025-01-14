"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { ChartContainer } from "../common/chart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const MilestonePercentageGraph = () => {
  const [fontSize, setFontSize] = useState<number>(12);

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 640 ? 10 : 12);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = {
    labels: [
      "Counterfeit Prevention Outreach",
      "Middlemen Blocked",
      "Counterfeit Reports Received",
      "Total Authenticity Verifications",
      "Craft Business Blacklist Data Inquiries",
      "Craft Blockchain Traceability Queries",
      "Craft Carbon Footprint Valuations",
      "Craft GI Integration",
      "Craft Profile Enquiries",
    ],
    datasets: [
      {
        data: [80, 60, 40, 50, 10, 25, 30, 10, 20],
        backgroundColor: "hsl(212 99% 24%)",
        barThickness: 20,
        maxBarThickness: 30,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `CraftLore Milestrones (Percentage) ${dayjs().year()}`,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black",
        borderColor: "rgb(240, 240, 240)",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "#f0f0f0",
        },
        ticks: {
          font: {
            size: fontSize,
          },
        },
        max: 100,
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: fontSize,
          },
        },
      },
    },
  };

  return (
    <ChartContainer className="h-[16rem] lg:w-[30rem] xl:w-[40rem] 2xl:w-[45rem]">
      <Bar data={data} options={options} />
    </ChartContainer>
  );
};
