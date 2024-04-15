import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
  },
};

const labels = ['Alleen Isoleren', 'Alleen zonnepanelen', 'Hybride warmtepomp', 'Lucht/water warmtepomp', 'Airco 2 units split systeem', 'Grond/water warmtepomp', 'Accu kWh/prijs'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Terugverdientijd particulier warmtepomp of airco met/zonder zonnepanelen en accu  (alleen bij dynamisch contract)',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(61, 236, 52, 0.58)',
    },
    {
      label: 'Terugverdientijd zakelijk warmtepomp of airco met/zonder zonnepanelen en accu  (alleen bij dynamisch contract)',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
