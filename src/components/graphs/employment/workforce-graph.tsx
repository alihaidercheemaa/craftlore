'use client'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, type ChartOptions, type ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);




export const WorkforceGraph = () => {
    const labels: string[] = [
        'Women',
        'Men',
    ];
    const data: ChartData<'bar'> = {
        labels,
        datasets: [
            {
                label: 'Percentage of Workforce',
                backgroundColor: '#b79cfb',
                borderColor: '#b79cfb',
                borderWidth: 1,
                data: [52, 48]
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
                        return  value.toLocaleString() + '%';
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
        <div className='h-[400px]'>
            <Bar data={data} options={options} />
        </div>
    )
}