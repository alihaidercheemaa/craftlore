'use client'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, type ChartOptions, type ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartContainer } from '~/components/common/chart';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);




export const ArtianGraph = () => {
    const labels: string[] = [
        '2020',
        '2021',
        '2022',
        '2023',
        '2024'
    ];
    const data: ChartData<'bar'> = {
        labels,
        datasets: [
            {
                label: 'Total Artians',
                backgroundColor: '#89d3d6',
                borderColor: '#89d3d6',
                borderWidth: 1,
                data: [290000, 285000, 296000, 310000, 300000]
            },
        ]
    };
    const options: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => {
                        return '₹' + value.toLocaleString();
                    }
                }
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeOutBounce'
        },
        maintainAspectRatio: true
    };
    return (
        <ChartContainer>
            <Bar data={data} options={options} />
        </ChartContainer>
    )
}