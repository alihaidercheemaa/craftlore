'use client'

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const MissionGraph = () => {
    const [thickness, setThickness] = useState<number>(40);
    const [fontSize, setFontSize] = useState<number>(20); // Default font size

    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.innerWidth < 640;
            setThickness(isSmallScreen ? 20 : 40);
            setFontSize(isSmallScreen ? 14 : 20);
        };

        handleResize(); // Set values on initial render

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const data = {
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
        datasets: [
            {
                label: 'Mission Alignment Progress (%)',
                data: [80, 70, 55, 75, 70, 60, 85, 75, 65, 90, 85, 70, 80],
                backgroundColor: 'hsl(212, 99%, 24%)',
                barThickness: thickness,
                maxBarThickness: thickness,
                barPercentage: 0.8,
                categoryPercentage: 0.8,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'CraftLore Mission Alignment Progress',
                color: '#000',
                font: {
                    size: fontSize, // Dynamic font size
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    font: {
                        size: fontSize, // Dynamic font size
                    },
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Progress (%)',
                    color: '#000',
                    font: {
                        size: fontSize, // Dynamic font size
                    },
                },
            },
        },
    };

    return (
        <section className="col-span-12 bg-[#e5edf7] gap-4 mt-12 py-32">
            <div className="mx-6 lg:container">
                <div className="grid gap-7">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-montserrat text-secondary text-center">
                        Craftlore Missions
                    </h2>
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-montserrat text-secondary text-center">
                        Where Do We Stand Now?
                    </h2>
                    <div className="relative h-80 sm:h-[400px] lg:h-[500px]">
                        <Bar data={data} options={options} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="border border-black rounded-md p-4">
                            <p>A. Biggest Craft Repository</p>
                            <p>B. Changing the Narrative to Science</p>
                            <p>C. Universal Craft Price Model</p>
                            <p>D. Developing Kashmir as a Brand</p>
                        </div>
                        <div className="border border-black rounded-md p-4">
                            <p>E. Mitigating Vulnerabilities</p>
                            <p>F. Craft Economics Monitoring</p>
                            <p>G. Education & Awareness</p>
                            <p>H. Counterfeit Detection</p>
                        </div>
                        <div className="border border-black rounded-md p-4">
                            <p>I. Supply Chain Optimization</p>
                            <p>J. Blockchain Authentication</p>
                            <p>K. Sustainable Leadership</p>
                            <p>L. Big Data Platform</p>
                            <p>M. Tech-Powered Insights</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
