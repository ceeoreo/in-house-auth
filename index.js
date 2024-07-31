const submitButton = document.getElementById('submit-button');
const headerMessage = document.getElementById('header-message');
const email = document.getElementById('email');

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  let loggedPage = document.createElement('a');
  loggedPage.textContent = "Navigate to Home";
  loggedPage.href="/loggedin.html";
  headerMessage.innerHTML = "You Successfully Signed Up!";
  headerMessage.appendChild(loggedPage);
})