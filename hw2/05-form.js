// Add your code here
const registrationForm = document.querySelector('.registration-form');

const logForm = function captureAndLogRegistrationForm(event) {
  const {
    fullName, email, registrationStatus, coursesTaken, anythingElse,
  } = event.target;
  let coursesNamesTaken = [...coursesTaken];
  coursesNamesTaken = coursesNamesTaken
    .filter((lang) => lang.checked === true)
    .map((lang) => lang.labels[0].textContent);
  coursesNamesTaken = coursesNamesTaken.join(', ');

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
