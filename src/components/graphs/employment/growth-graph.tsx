'use client'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const GrowthGraph = () => {
  const labels = [
    '2007-08', '2008-09', '2009-10', '2010-11', '2011-12', '2012-13', 
    '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', 
    '2019-20', '2020-21', '2021-22', '2022-23', '2023-24', '2024-25(proj)'
  ];

  const employmentData = [
    3.5, 3.4, 3.3, 3.4, 3.3, 3.0, 2.8, 3.2, 3.2, 3.2, 3.1, 3.0,
    3.2, 2.9, 3.1, 2.9, 3.0, 3.2
  ];

  const percentageChangeData = [
    0, -1.5, -1, 0.5, 0, -12, 0, 0, 0, -0.5, -1, 0.5,
    1.5, 0.5, 2, 2.5, 2, 3.5
  ];

  const data = {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'Employment (in lakhs)',
        data: employmentData,
        backgroundColor: 'rgba(200, 200, 200, 0.5)',
        yAxisID: 'y' as const,
        order: 2
      },
      {
        type: 'line' as const,
        label: 'Percentage Change (%)',
        data: percentageChangeData,
        borderColor: 'rgb(255, 99, 32)',
        backgroundColor: 'rgb(255, 99, 32)',
        yAxisID: 'y1' as const,
        order: 1
      }
    ]
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      y: {
        type: 'linear' as const,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Employment (in lakhs)',
        },
        min: 0,
        max: 4,
        ticks: {
          stepSize: 0.5,
          callback: (value: string | number) => value + ' lakhs'
        }
      },
      y1: {
        type: 'linear' as const,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Percentage Change (%)',
        },
        min: -14,
        max: 4,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: (value: string | number) => value + '%'
        }
      },
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Employment Growth Trend'
      },
      legend: {
        position: 'top' as const,
      }
    }
  };

  return (
    <div className="h-[400px]">
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default GrowthGraph;