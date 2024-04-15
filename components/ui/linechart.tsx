import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true
    },
  },
};

const labels = ['Na 5 jaar', 'Na 10 jaar', 'Na 15 jaar', 'Na 20 jaar', 'Na 25 jaar', 'Na 30 jaar', 'Na 35 jaar'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Uw investering',
      data: labels.map(() => faker.number.int({ min: -100000, max: 100000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Winst met alleen isolatie',
      data: labels.map(() => faker.number.int({ min:  -100000, max: 100000 })),
      borderColor: 'rgb(255, 1, 237)',
      backgroundColor: 'rgba(255, 1, 237, 0.3)',
    },
    {
        label: 'Winst met alleen zonnepanelen',
        data: labels.map(() => faker.number.int({ min:  -100000, max: 100000 })),
        borderColor: 'rgb(252, 255,1)',
        backgroundColor: 'rgba(252, 255, 1, 0.54)'
      },
      {
        label: 'Hybride warmtepomp',
        data: labels.map(() => faker.number.int({ min:  -100000, max: 100000 })),
        borderColor: 'rgb(255, 157, 1)',
        backgroundColor: 'rgba(255, 157, 1, 0.3)',
      },
      {
        label: 'Lucht/water warmtepomp',
        data: labels.map(() => faker.number.int({ min:  -100000, max: 100000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      },
      {
        label: 'Airco 2 units split systeem',
        data: labels.map(() => faker.number.int({ min:  -100000, max: 100000 })),
        borderColor: 'rgb(162, 0, 255)',
        backgroundColor: 'rgba(162, 0, 255, 0.45)'
      },
      {
        label: 'Grond/water warmtepomp',
        data: labels.map(() => faker.number.int({ min:  -100000, max: 100000 })),
        borderColor: 'rgb(205, 136, 4)',
        backgroundColor: 'rgba(205, 136, 4, 0.35)'
      },
      {
        label: 'Accu kWh/prijs',
        data: labels.map(() => faker.number.int({ min:  -100000, max: 100000 })),
        borderColor: 'rgb(40, 255, 0)',
        backgroundColor: 'rgba(40, 255, 0, 0.35)'
      },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
