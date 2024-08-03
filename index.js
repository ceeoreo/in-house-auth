const form = document.getElementById('form');
const headerMessage = document.getElementById('header-message');
const email = form.elements.user_email.value;
const password = form.elements.user_password.value;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let loggedPage = document.createElement('a');
  loggedPage.textContent = "Navigate to Home";
  loggedPage.href="/loggedin.html";
  headerMessage.innerHTML = "You Successfully Signed Up!";
  headerMessage.appendChild(loggedPage);
})