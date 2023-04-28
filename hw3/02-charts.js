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
let myChars = [];

const doAsync = async function doAsyncThings() {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const cleanName = function validateAndCleanLastName(lastName) {
  let cleanedName = '';

  if (lastName === '' || lastName === 'None') cleanedName = 'Unknown';
  else if (lastName === 'Targaryan') cleanedName = 'Targaryen';
  else cleanedName = lastName;

  return cleanedName;
};

// const isLastBlank = function checkLastNameForBlankOrTypo(lastName) {
//   if (lastName === '' || lastName === 'None') return true;
//   return false;
// };

const reducer = function reduceTheCharactersArray(
  lastNameCounter,
  { lastName },
) {
  // let currentCount;
  // if (isLastBlank(lastName)) currentCount = lastNameCounter.Unknown;
  const cleanedName = cleanName(lastName);

  const currentCount = lastNameCounter[cleanedName] ?? 0;
  return {
    ...lastNameCounter,
    [cleanedName]: currentCount + 1,
    // isLastBlank(lastName)
    // isLastBlank(lastName) ? {([lastName]: currentCount + 1) : ([lastName]: currentCount + 1)},
  };
};

doAsync()
  .then((data) => {
    console.log(data.map((character) => character.lastName));
    console.log(data[0]);
    myChars = [...data];
    console.log(myChars);
    console.log(myChars[0]);

    // let nameCount = {};
    const nameCount = data.reduce(reducer, { Unknown: 0 });
    console.log(nameCount);
    return myChars;
    // myChars = [...data];
    // return myChars;
  })
  // .then((data) => data.map((character) => myChars.push(character)))
  // .then(console.log(myChars[0]))
  .catch((error) => console.log(error));

const renderChart = () => {
  const donutChart = document.querySelector('.donut-chart');

  const myChart = new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: ['label', 'label', 'label', 'label'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [1, 12, 33, 5],
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

renderChart();
