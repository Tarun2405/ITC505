// Image Rollover Effect
const rolloverImage = document.getElementById('rollover-image');
rolloverImage.addEventListener('mouseover', () => {
    rolloverImage.src = 's7.jpg'; // Replace with an alternate image path
});
rolloverImage.addEventListener('mouseout', () => {
    rolloverImage.src = 's3.jpg'; // Revert to the original image path
});

// Button Color Change
const colorButton = document.getElementById('color-button');
colorButton.addEventListener('click', () => {
    colorButton.style.backgroundColor = colorButton.style.backgroundColor === 'blue' ? 'orange' : 'blue';
});

// Text Input Alert and Control Flow
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") {
        alert("Please enter some text before submitting.");
    } else {
        alert(`You entered: ${userInput}`);
    }
});
