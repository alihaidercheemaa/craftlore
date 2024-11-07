'use client'

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';

// Register required components with Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const ProductionTrendGraph = () => {
    const data = {
        labels: ['2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2022-23','2023-2024','2025-2026(Projected)'],
        datasets: [
            {
                label: 'Total Production (in Cr)',
                data: [1911.77, 2103.7, 2151.68, 2950.43, 3136.34, 3277.15, 3825.98, 1935.04, 1514.26, 1405.45, 811.769, 946.84,1100.45,1300.50],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'hsl(212 99% 24%)',
                borderWidth: 2,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 2000,
            easing: 'easeInOutBounce' as const,
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Total Production (in Crores ₹)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Year',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    boxWidth: 10,
                },
            },
        },
    };

    return (
        <div className='h-[400px]'>
            <Line data={data} options={options} />
        </div>
    )
}

