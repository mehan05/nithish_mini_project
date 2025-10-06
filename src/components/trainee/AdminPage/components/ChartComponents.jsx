import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartComponents = () => {
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Overall Revenue',
        data: [500, 1000, 250, 600, 700, 900, 800, 750, 650, 700, 750, 800],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}$`,
          afterLabel: () => 'Overall Revenue',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
          stepSize: 200,
        },
      },
    },
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'New Students',
        data: [100, 340, 120, 180, 300, 200, 270, 190, 320, 400, 500, 900],
        borderColor: '#4285F4',
        backgroundColor: 'rgba(66, 133, 244, 0.2)',
        tension: 0.4,
        borderWidth: 2,
        pointBackgroundColor: '#4285F4',
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (context) => `${context[0].label}`,
          label: (context) => `${context.raw} new students`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}`,
        },
      },
    },
  };

  return (
    <div className="w-full p-4 bg-white shadow rounded-lg max-w-4xl sm:max-w-4xl">
      <h2 className="text-2xl font-bold text-[#161439] mb-6">Reports</h2>
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Earning Reports</h3>
        <div className="relative" style={{ height: '300px' }}>
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Students Reports</h3>
        <div className="relative" style={{ height: '300px' }}>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ChartComponents;
