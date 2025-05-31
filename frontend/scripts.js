// Get the <h1> element from index.html and show its text in an alert
document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1");
  if (h1) {
    alert(h1.textContent);
  }
});
