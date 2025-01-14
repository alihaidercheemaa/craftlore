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
import { useState, useEffect } from "react";
import { Container } from "~/components/common/container";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const ProjectGraph = () => {
  const [thickness, setThickness] = useState<number>(40);

  useEffect(() => {
    const handleResize = () => {
      setThickness(window.innerWidth < 640 ? 10 : 40);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const data = {
    labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    datasets: [
      {
        label: "Project Cost ($)",
        data: [80000, 21000, 17000, 20000, 10000, 140000, 4000, 3700, 93000],
        backgroundColor: "#00387A",
        borderColor: "#00387A",
        borderWidth: 1,
        barThickness: thickness,
        maxBarThickness: thickness,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      title: {
        display: true,
        text: "CraftLore Projects & Business Tools Cost Overview",
        color: "#000",
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Project Cost ($)",
          color: "#000",
        },
      },
    },
  };

  return (
    <section className="col-span-12 mt-12 gap-4 bg-[#e5edf7] pb-32 pt-60">
      <Container className="grid gap-7">
        <h2 className="text-center font-montserrat text-2xl text-secondary lg:text-4xl">
          Craftlore Projects Overview
        </h2>
        <h2 className="text-center font-montserrat text-2xl text-secondary lg:text-4xl">
          CraftLore Business Tools and Project Costs
        </h2>
        <div className="relative h-[130px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
          <Bar data={data} options={options} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm lg:text-base col-span-2 rounded-md border border-black p-4 lg:col-span-1">
            <p>A. Craft Authentication Registry</p>
            <p>B. Craft Traceability Registry</p>
            <p>C. Craft Carbon Footprint Registry</p>
            <p>D. Craft Business Listing Registry</p>
          </div>
          <div className="text-sm lg:text-base col-span-2 rounded-md border border-black p-4 lg:col-span-1">
            <p>E. Craft Economic Monitoring System</p>
            <p>F. Blockchain-Powered Digital Authentication</p>
            <p>G. Craft Gender Registry</p>
            <p>H. Craft Employment Registry</p>
            <p>I. Craft Digital Marketing Platform</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
