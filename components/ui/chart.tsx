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
import { faker }  from '@faker-js/faker'

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
    title: {
      display: true,
      text: 'Uw terugverdien tijd',
    },
  },
};

const labels = ['Alleen isoleren', 'Alleen zonnepanelen', 'Hybride warmtepomp', 'Lucht/water warmtepomp', 'Airco 2 unit split systeem', 'grond/water warmtepomp', 'Accu'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Terugverdientijd particulier warmtepomp'+  'of airco met/zonder zonnepanelen en accu',
      data: labels.map(() => faker.number.int({ min: 0, max: 50 })),
      backgroundColor: 'rgba(67, 220, 11, 0.59)',
    },
    {
      label: 'Terugverdientijd zakelijk warmtepomp of airco met/zonder zonnepanelen en accu',
      data: labels.map(() => faker.number.int({ min: 0, max: 50 })),
      backgroundColor: 'rgba(0, 120, 235, 0.6)',
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}