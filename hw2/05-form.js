// Add your code here
const registrationForm = document.querySelector('.registration-form');

const logForm = function captureAndLogRegistrationForm(event) {
  const { target } = event;
  const name = target[0].value;
  const email = target[1].value;
  const registrationStatus = target[2].value;
  // const coursesProgLangs = target[4];
  // const coursesOpSys = target[5];
  // const coursesFullStack = target[6];
  let langsTaken = [target[4], target[5], target[6]];
  langsTaken = langsTaken
    .filter((lang) => lang.checked === true)
    .map((lang) => lang.labels[0].textContent);
  langsTaken = langsTaken.join(', ');
  const anythingElse = target[7].value;
  // console.log(
  //   name,
  //   email,
  //   registrationStatus,
  //   coursesProgLangs.checked,
  //   coursesOpSys.checked,
  //   coursesFullStack.checked,
  //   anythingElse,
  // );

  console.log(`
  Full name: ${name}
  Email: ${email}
  Registration status: ${registrationStatus}
  Courses taken: ${langsTaken}
  Additional Comments: ${anythingElse}
  `);
  // console.log(typeof target.0);
  // console.log(target[0].value);
  // console.log(name, email, registrationStatus, coursesTaken, anythingElse);
  // console.log(target[0].value);
  event.preventDefault();
};

// const formatLog = function formatLogOutp

registrationForm.addEventListener('submit', logForm);
