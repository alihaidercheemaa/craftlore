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




export const WageGraph = () => {
    const labels: string[] = [
        'Pashmina Weavers',
        'Carpet Weavers',
        'Papier Mache Artisans',
        'Crewel Workers',
        'Chain Stitch Workers'
    ];
    const data: ChartData<'bar'> = {
        labels,
        datasets: [
            {
                label: 'Lower Range of Monthly Earnings (₹)',
                backgroundColor: 'hsl(212 99% 24%)',
                borderColor: 'hsl(212 99% 24%)',
                borderWidth: 1,
                data: [8000, 7500, 5000, 6000, 4500]
            },
            {
                label: 'Upper Range of Monthly Earnings (₹)',
                backgroundColor: 'hsl(21 91% 55%)',
                borderColor: 'hsl(21 91% 55%)',
                borderWidth: 1,
                data: [12000, 11000, 9000, 10000, 7500]
            }
        ]
    };
    const options: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Monthly Earnings Range by Craft Category',

            }
        },
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'CRAFT CATEGORIES',
                    color: '#000'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Monthly Earnings (₹)',
                    color: '#000'
                },
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
        <div className='h-[400px]'>
            <Bar data={data} options={options} />
        </div>

    )
}