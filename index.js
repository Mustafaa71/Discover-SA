document.getElementById("signInForm").style.display = "none";

document.getElementById("signUpForm").style.display = "none";

document.getElementById("subscribeForm").style.display = "none";

function openForm() {
  document.getElementById("signInForm").style.display = "block";
}

function closeForm() {
  document.getElementById("signInForm").style.display = "none";
  document.getElementById("signUpForm").style.display = "none";
}

function openTheReg() {
  document.getElementById("signUpForm").style.display = "block";
}

function openTheSub() {
  document.getElementById("subscribeForm").style.display = "block";
}

function closeTheSub() {
  document.getElementById("subscribeForm").style.display = "none";
}

function subGreetingForm() {
  alert("Hello, Thank you for subscribtion");
}

function conGreeting() {
  alert("Hello, your message on our concern thank you.");
}
