// Get the form element
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting
  const myUser = document.getElementById("username").value;
  const myPass = document.getElementById("password").value;
  console.log("Username:", myUser);
  console.log("Password:", myPass);
  if (myUser === "admin" && myPass === "12345") {
    // Add your logic here for successful login
    alert("Login successful!");
    window.location.href = "home.html"; // Redirect to home page
  } else {
    alert("Invalid username or password.");
    window.location.href = "index.html"; // Redirect to login page
  }
});
