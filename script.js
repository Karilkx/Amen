// Set up initial event listeners
let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let noButtonsContainer = document.getElementById('no-buttons-container');

// Handle the "Yes" button click
yesButton.addEventListener('click', function() {
    // Make the Yes button glow
    yesButton.classList.add('yes-glow');
    // Change the background color to something colorful
    document.body.style.backgroundColor = 'linear-gradient(to right, #ff7e5f, #feb47b)';
});

// Handle the "No" button click
noButton.addEventListener('click', function() {
    // Create a new "No" button every time the user clicks
    let newNoButton = document.createElement('button');
    newNoButton.classList.add('no-button');
    newNoButton.textContent = 'No';
    
    // Position the new "No" button randomly
    let randomX = Math.random() * 90; // Random horizontal position
    let randomY = Math.random() * 80; // Random vertical position

    newNoButton.style.position = 'absolute';
    newNoButton.style.left = `calc(${randomX}% - 50px)`;
    newNoButton.style.top = `calc(${randomY}% - 50px)`;

    // Add the new button to the container
    noButtonsContainer.appendChild(newNoButton);
});
