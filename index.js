const submitButton = document.getElementById('submit-button');
const form = document.getElementById('form');
const headerMessage = document.getElementById('header-message');
const email = document.getElementById('email');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let loggedPage = document.createElement('a');
  loggedPage.textContent = "Navigate to Home";
  loggedPage.href="/loggedin.html";
  headerMessage.innerHTML = "You Successfully Signed Up!";
  headerMessage.appendChild(loggedPage);
})