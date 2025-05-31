document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    console.log('Document is ready!');
});

// Example: Add a click event listener to a button with id "myButton"
const myButton = document.getElementById('myButton');
if (myButton) {
    myButton.addEventListener('click', function() {
        alert('Button clicked!');
    });
}