import { Chart, LinearScale, CategoryScale, registerables } from 'chart.js';

// Vytvoření jedné instance Chart
Chart.register(LinearScale, CategoryScale, ...registerables);

/**
 * Funkce pro vytvoření sloupcového grafu.
 * @param {string} groupName - Název skupiny
 * @param {Object} levels - Přehled počtů známek
 * @param {string} id - ID elementu canvas
 */
const createBarChart = (groupName, levels, id) => {
  // Získání elementu canvas
  const canvas = document.getElementById(id);
  console.log("canvas " + canvas);
  if (canvas.chart) {
    // Zrušení existujícího grafu
    canvas.chart.destroy();
  }

  // Vytvoření nové instance grafu
  Chart.register(...registerables);
  canvas.chart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E', 'F'],
      datasets: [{
        label: 'Počty známek',
        data: [levels.countOfA, levels.countOfB, levels.countOfC, levels.countOfD, levels.countOfE, levels.countOfF],
        backgroundColor: 'rgba(75, 192, 192, 0.8)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Počet'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Známka'
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: `Sloupcový diagram pro skupinu: ${groupName}`,
          padding: {
            top: 10,
            bottom: 20
          }
        }
      }
    }
  });
};
export default createBarChart;