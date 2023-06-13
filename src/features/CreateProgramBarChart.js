import { Chart, LinearScale, CategoryScale, registerables } from 'chart.js';

// Create a single Chart instance
Chart.register(LinearScale, CategoryScale, ...registerables);

const createBarChart = (groupName, levels, id) => {
  // Get the canvas element
  const canvas = document.getElementById(id);
  console.log("canvas "+canvas);
  if (canvas.chart) {
    // Dispose of the existing chart
    canvas.chart.destroy();
  }

  // Create a new chart instance
  Chart.register(...registerables);
  canvas.chart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E', 'F'],
      datasets: [
        {
          label: 'Počty známek',
          data: [
            levels.countOfA,
            levels.countOfB,
            levels.countOfC,
            levels.countOfD,
            levels.countOfE,
            levels.countOfF,
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.8)',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Počet',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Známka',
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: `Bar diagram pro skupinu: ${groupName}`,
          padding: {
            top: 10,
            bottom: 20,
          },
        },
      },
    },
  });
};

export default createBarChart;
