// Your code goes here

// `JavaScript is so cool. It lets me add text to my page programmatically.`


document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});

let sl = document.getElementById("text");
sl.textContent = "This is really cool!"


console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
