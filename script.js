// Get elements
let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let noButtonsContainer = document.getElementById('no-buttons-container');

// Handle "Yes" button click
yesButton.addEventListener('click', function() {
    // Make the Yes button glow
    yesButton.classList.add('yes-glow');
    // Change the background color for celebration effect
    document.body.style.background = 'linear-gradient(to right, #ff7e5f, #feb47b)';
    // Make the text colorful
    document.getElementById('question').style.color = 'yellow';
});

// Handle "No" button click
noButton.addEventListener('click', function() {
    // Remove the clicked "No" button
    noButton.style.display = "none";

    // Create new "No" buttons in different locations
    for (let i = 0; i < 2; i++) {  // Controls how many new "No" buttons appear each time
        let newNoButton = document.createElement('button');
        newNoButton.classList.add('no-button');
        newNoButton.textContent = 'No';

        // Random positioning (ensures no buttons cover the "Yes" or the question)
        let randomX = Math.random() * 70 + 10; // Keeps it within safe horizontal range
        let randomY = Math.random() * 50 + 20; // Keeps it from overlapping the question

        newNoButton.style.position = 'absolute';
        newNoButton.style.left = `${randomX}%`;
        newNoButton.style.top = `${randomY}vh`;

        // Add click functionality for new "No" buttons
        newNoButton.addEventListener('click', function() {
            newNoButton.style.display = "none";  // Remove clicked "No" button
            // Repeat the process: add 2 more "No" buttons
            let moreNoButtons = document.querySelectorAll('.no-button');
            if (moreNoButtons.length < 20) {  // Limits total number to avoid screen clutter
                for (let j = 0; j < 2; j++) {
                    let extraNo = document.createElement('button');
                    extraNo.classList.add('no-button');
                    extraNo.textContent = 'No';
                    
                    let extraX = Math.random() * 70 + 10;
                    let extraY = Math.random() * 50 + 20;

                    extraNo.style.position = 'absolute';
                    extraNo.style.left = `${extraX}%`;
                    extraNo.style.top = `${extraY}vh`;

                    // Add new click event
                    extraNo.addEventListener('click', function() {
                        extraNo.style.display = "none"; // Remove it when clicked
                    });

                    noButtonsContainer.appendChild(extraNo);
                }
            }
        });

        // Append new buttons to container
        noButtonsContainer.appendChild(newNoButton);
    }
});
