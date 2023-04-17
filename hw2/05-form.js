// Add your code here
const registrationForm = document.querySelector('.registration-form');

const logForm = function captureAndLogRegistrationForm(event) {
  const { fullName, email, registrationStatus, coursesTaken, anythingElse } =
    event.target;
  // const { target } = event;
  // const name = target[0].value;
  // const email = target[1].value;
  // const registrationStatus = target[2].value;
  //  let coursesNamesTaken = [target[4], target[5], target[6]];
  // let coursesNamesTaken = [coursesTaken[0], coursesTaken[1], coursesTaken[2]];
  let coursesNamesTaken = [...coursesTaken];
  coursesNamesTaken = coursesNamesTaken
    .filter((lang) => lang.checked === true)
    .map((lang) => lang.labels[0].textContent);
  coursesNamesTaken = coursesNamesTaken.join(', ');
  // const anythingElse = target[7].value;

  console.log(`
  ${fullName.value !== '' ? `Full name: ${fullName.value}` : ''}
  ${email.value !== '' ? `Email: ${email.value}` : ''}
  ${
    registrationStatus.value !== ''
      ? `Registration status: ${registrationStatus.value}`
      : ''
  }
  ${coursesNamesTaken.length > 0 ? `Courses taken: ${coursesNamesTaken}` : ''}
  ${
    anythingElse.value !== ''
      ? `Additional Comments: ${anythingElse.value}`
      : ''
  }
  `);

  event.preventDefault();
  console.log(event.target);
};

registrationForm.addEventListener('submit', logForm);
