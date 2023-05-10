import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

function HouseChart(props) {
  const { characters: storedCharacters } = props;

  const cleanName = function validateAndCleanLastName(houseName) {
    const regex = /House./;
    let cleanedName = houseName.replace(regex, '');

    if (
      cleanedName === '' ||
      cleanedName === 'None' ||
      cleanedName === 'Unkown'
    ) {
      cleanedName = 'Unknown';
    } else if (
      cleanedName === 'Targaryan' ||
      cleanedName === 'Worm' ||
      cleanedName === 'Naathi' ||
      cleanedName === 'Naharis'
    ) {
      cleanedName = 'Targaryen';
    } else if (cleanedName === 'Lanister' || cleanedName === 'Qyburn') {
      cleanedName = 'Lannister';
    } else if (cleanedName === 'Lorathi') {
      cleanedName = 'Lorath';
    } else if (cleanedName === 'Sand' || cleanedName === 'Viper') {
      cleanedName = 'Martell';
    }

    return cleanedName;
  };

  const reducer = function reduceTheCharactersArray(
    houseNameCounter,
    { family },
  ) {
    const cleanedName = cleanName(family);

    const currentCount = houseNameCounter[cleanedName] ?? 0;
    return {
      ...houseNameCounter,
      [cleanedName]: currentCount + 1,
    };
  };

  const createChart = function createChartDataFromSessionStorage() {
    const characters = [...storedCharacters];
    const nameCount = characters.reduce(reducer, {});
    const data = {
      labels: Object.keys(nameCount),
      datasets: [
        {
          label: 'Members of House',
          data: Object.values(nameCount),
          borderWidth: 1,
        },
      ],
    };

    return data;
  };

  const chartData = createChart();
  const chartOptions = {
    responsive: true,
    plugins: {
      subtitle: {
        display: true,
        text: 'Number of Characters in Each House',
      },
    },
  };

  return (
    <div className="donut-chart">
      <Doughnut data={chartData} options={chartOptions}></Doughnut>
    </div>
  );
}

export default HouseChart;
