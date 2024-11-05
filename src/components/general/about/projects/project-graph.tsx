'use client'

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export const ProjectGraph = () => {
    const data = {
        labels: [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I'
        ],
        datasets: [{
            label: 'Project Cost ($)',
            data: [80000, 21000, 17000, 20000, 10000, 140000, 4000, 3700, 93000], // Project costs
            backgroundColor: '#00387A', // Change bar color
            borderColor: '#00387A',
            borderWidth: 1,
            barThickness: 40,
            maxBarThickness: 40,
        }]
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top" as const,
            },
            title: {
                display: true,
                text: 'CraftLore Projects & Business Tools Cost Overview',
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
                    text: 'Project Cost ($)',
                },
            },
        },
    };

    return (
        <section className="col-span-12 bg-[#e5edf7]  gap-4 mt-12 pt-60 pb-32">
            <div className="container">
                <div className="container grid  gap-7 ">
                <h2 className='text-4xl font-montserrat text-secondary text-center'>Craftlore Projects Overview</h2>
                    <h2 className='text-4xl font-montserrat text-secondary text-center'>CraftLore Business Tools and Project Costs</h2>
                    <div className='container'>
                        <Bar data={data} options={options} />
                    </div>
                    <div className="container grid grid-cols-2 gap-2">
                        <div className='border border-black rounded-md p-4'>
                            <p>A. Craft Authentication Registry</p>
                            <p>B. Craft Traceability Registry</p>
                            <p>C. Craft Carbon Footprint Registry</p>
                            <p>D. Craft Business Listing Registry</p>
                        </div>
                        <div className='border border-black rounded-md p-4'>
                            <p>E. Craft Economic Monitoring System</p>
                            <p>F. Blockchain-Powered Digital Authentication</p>
                            <p>G. Craft Gender Registry</p>
                            <p>H. Craft Employment Registry</p>
                            <p>I. Craft Digital Marketing Platform</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

