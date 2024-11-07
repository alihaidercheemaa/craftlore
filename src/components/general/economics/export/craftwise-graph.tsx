'use client'
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type ExportChartProps = {
    label: string;
    data: number[];
}
const ExportChart = ({ label, data }: ExportChartProps) => {
    const years = ['2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2022-23'];

    const chartData = {
        labels: years,
        datasets: [{
            label: label,
            data: data,
            backgroundColor: 'hsl(212 99% 24%)',
            borderColor: 'hsl(212 99% 24%)',
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Export Value (Crores ₹)'
                }
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeOutBounce' as const
        },
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div className="w-3/5 mx-auto my-5 h-64">
            <Bar data={chartData} options={options} />
        </div>
    );
};


export const CraftExportDashboard = () => {

    const charts = [
        { label: 'Carpet Export', data: [412.45, 567.13, 455.86, 551.9, 492.18, 293.29, 369.81, 452.12, 353.63, 395.78, 299.56, 287.56], },
        { label: 'Namdah Export', data: [8.01, 7.09, 8.56, 7.19, 8.01, 9.12, 5.19, 4.25, 0.05, 0, 0.04, 0.03], },
        { label: 'Crewel Export', data: [77.09, 82.04, 123.42, 189.14, 192.08, 196.24, 414.11, 200.94, 231.61, 236.26, 140.05, 110.14], },
        { label: 'Wood Carving Export', data: [36.75, 57.94, 69.06, 50.04, 45.19, 40.15, 7.15, 4.71, 10.13, 9.47, 7.22, 6.09], },
        { label: 'Paper Mache Export', data: [125.89, 138.24, 620.02, 39.96, 71.07, 24.85, 50.36, 14.97, 11.07, 9.08, 13.27, 10.04], },
        { label: 'Fur & Leather Export', data: [3.01, 3.68, 3.01, 2.89, 1.96, 1.56, 2.25, 2.25, 2.16, 1.56, 2.18, 2.02], },
        { label: 'Chain Stitch Export', data: [77.01, 233.6, 237.61, 235.01, 230.06, 228.04, 123.01, 123.08, 120.04, 115.03, 110.05, 100.04], },
        { label: 'Woolen Shawls Export', data: [302.04, 607.03, 104.11, 579.72, 368.2, 376.79, 304.05, 284.13, 305.9, 271.62, 172.53, 150.04] }
    ];

    return (
        <div className="space-y-8">
            {charts.map((chart, index) => (
                <ExportChart
                    key={index}
                    label={chart.label}
                    data={chart.data}
                />
            ))}
        </div>
    );
};
