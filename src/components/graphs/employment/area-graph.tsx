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




export const WorkforceAreaGraph = () => {
    const labels: string[] = [
        'Rural Artisans',
        'Urban Artisans',
    ];
    const data: ChartData<'bar'> = {
        labels,
        datasets: [
            {
                label: 'Percentage of Workforce',
                backgroundColor: '#f5be88',
                borderColor: '#f5be88',
                borderWidth: 1,
                data: [65, 35]
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