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



export const HandiCraftExportGraph = () => {


    const data = {
        labels: ['2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2022-23 (Projected)'],
        datasets: [{
            label: 'Total Export (in Cr)',
            data: [1004.10, 1643.37, 1538.28, 1695.65, 1287.04, 1059.41, 1151.12, 1090.12, 917.93, 935.25, 635.52, 700], // 700 is a placeholder for the projected year
            backgroundColor: 'hsl(212 99% 24%)',
            borderColor: 'hsl(212 99% 24%)',
            borderWidth: 2,
            fill: true
        }]
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