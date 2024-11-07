'use client'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const HandiCraftGraph = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutBounce' as const
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Production (in Crores ₹)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Year'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          boxWidth: 10
        }
      }
    }
  };

  const labels = [
    '2010-11', '2011-12', '2012-13', '2013-14', '2014-15',
    '2015-16', '2016-17', '2017-18', '2018-19', '2019-20',
    '2020-21', '2022-23', '2024-25 (Projected)'
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Carpet',
        data: [735.10, 776.70, 785.40, 686.10, 739.50, 709.20, 821.50, 855.40, 392.92, 436.93, 329.52, 302.45, 400.92],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Namdah',
        data: [3.47, 1.58, 2.88, 2.59, 2.29, 1.99, 1.70, 8.86, 0.01, 0.460, 0.527, 0.55, 1.5],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Crewel',
        data: [79.28, 82.23, 99.96, 110.30, 120.64, 130.98, 141.32, 345.90, 330.87, 312.32, 182.68, 180.24, 200.00],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Wood Carving',
        data: [17.40, 62.30, 63.50, 15.87, 15.11, 14.34, 12.81, 8.42, 15.43, 12.78, 9.75, 10.25, 13.25],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      },
      {
        label: 'Paper Mache',
        data: [38.32, 72.70, 74.15, 141.24, 152.25, 139.52, 164.30, 27.36, 14.85, 12.90, 15.92, 17.21, 20.56],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
      },
      {
        label: 'Fur & Leather',
        data: [14.40, 12.56, 8.26, 9.24, 8.89, 7.25, 6.89, 3.91, 0.70, 0.41, 0.25, 0.15, 3.5],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      },
      {
        label: 'Chain Stitch',
        data: [0.70, 188.33, 192.09, 235.23, 205.41, 201.56, 223.56, 237.23, 125.24, 56.07, 6.24, 0.02, 3.0],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Woolen Shawl',
        data: [343.10, 520.20, 530.60, 631.20, 674.25, 698.05, 874.50, 439.44, 611.80, 413.12, 258.79, 386.25, 400.0],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      },
      {
        label: 'Other Items',
        data: [340.00, 193.55, 197.42, 559.33, 609.00, 687.13, 789.70, 4.26, 11.22, 80.23, 4.046, 24.86, 28.97],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Total',
        data: [1911.77, 2103.7, 2151.68, 2950.43, 3136.34, 3277.15, 3825.98, 1935.04, 1514.26, 1405.45, 811.769, 946.84, 1200.45],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="h-[500px]">
      <Bar options={options} data={data} />
    </div>
  );
};

