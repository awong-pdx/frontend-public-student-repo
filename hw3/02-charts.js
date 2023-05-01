const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const getCharacterData = async function getCharacterDataFromURL() {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const cleanName = function validateAndCleanLastName(houseName) {
  const regex = /House./;
  let cleanedName = houseName.replace(regex, '');

  if (
    cleanedName === ''
    || cleanedName === 'None'
    || cleanedName === 'Unkown'
  ) {
    cleanedName = 'Unknown';
  } else if (
    cleanedName === 'Targaryan'
    || cleanedName === 'Worm'
    || cleanedName === 'Naathi'
    || cleanedName === 'Naharis'
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

const renderChart = (
  keyLabels = ['label1', 'label2', 'label3', 'label4'],
  valueData = [1, 12, 33, 5],
) => {
  const donutChart = document.querySelector('.donut-chart');

  const myChart = new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: keyLabels,
      datasets: [
        {
          label: 'Members of House',
          data: valueData,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

getCharacterData()
  .then((data) => {
    const nameCount = data.reduce(reducer, {});
    renderChart(Object.keys(nameCount), Object.values(nameCount));
  })
  .catch((error) => console.log(error));
