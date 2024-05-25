document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var formData = new FormData(this);

    // Disable the form while processing
    this.classList.add('processing');

    // Send POST request to Flask endpoint
    fetch('/predict', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Display prediction result with animation
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = '<strong>Calories Burnt:</strong> ' + data.calories_burnt.toFixed(2) + ' calories';
        
        // Show the result
        resultElement.style.display = 'block';

        // Apply animation
        resultElement.style.opacity = '0';
        resultElement.style.transform = 'scale(0.5)';

        // Apply fade-in and scale-up animation
        setTimeout(function() {
            resultElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            resultElement.style.opacity = '1';
            resultElement.style.transform = 'scale(1)';
        }, 100);
    


        // Calculate feedback based on predicted calories
        let feedback;
        if (data.calories_burnt > 200) {
            feedback = "Wow! That's a lot of calories.";
        } else if (data.calories_burnt > 100) {
            feedback = "Great! You're making progress!";
        } else {
            feedback = "Keep it up! You're doing good!";
        }

        // Display the feedback message
        const feedbackElement = document.getElementById('feedback-message');
        feedbackElement.textContent = feedback;
        feedbackElement.style.display = 'block'; // Show the feedback message
        
        

        // Re-enable the form
        document.getElementById('prediction-form').classList.remove('processing');
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
});
// Get form element
const predictionForm = document.getElementById('prediction-form');

// Get summary elements
const summaryGender = document.getElementById('summary-gender');
const summaryAge = document.getElementById('summary-age');
const summaryHeight = document.getElementById('summary-height');
const summaryWeight = document.getElementById('summary-weight');
const summaryDuration = document.getElementById('summary-duration');
const summaryHeartRate = document.getElementById('summary-heart-rate');
const summaryBodyTemp = document.getElementById('summary-body-temp');

// Add event listener to form submission
predictionForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form values
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const duration = document.getElementById('duration').value;
    const heartRate = document.getElementById('heart_rate').value;
    const bodyTemp = document.getElementById('body_temp').value;
    
    // Update summary elements with form values
    summaryGender.textContent = gender;
    summaryAge.textContent = age;
    summaryHeight.textContent = height;
    summaryWeight.textContent = weight;
    summaryDuration.textContent = duration;
    summaryHeartRate.textContent = heartRate;
    summaryBodyTemp.textContent = bodyTemp;
});
// Get form element and all input fields

const inputFields = predictionForm.querySelectorAll('input, select');

// Get progress bar element
const progressBar = document.getElementById('progress');

// Calculate total number of fields in the form
const totalFields = inputFields.length;

// Add event listener to form input fields
inputFields.forEach(function(field) {
    field.addEventListener('input', updateProgressBar);
});

// Function to update the progress bar
function updateProgressBar() {
    // Calculate the number of filled fields
    const filledFields = Array.from(inputFields).filter(field => field.value !== '').length;
    
    // Calculate percentage completion
    const completionPercentage = (filledFields / totalFields) * 100;
    
    // Update the progress bar width
    progressBar.style.width = completionPercentage + '%';
}
// Get the input summary element
const summary = document.getElementById('summary');

// Add event listener to the form for submission
predictionForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Show the input summary
    summary.style.display = 'block';
    
    // Add code to populate the summary with form inputs here
});
// Add event listener to the form for submission
predictionForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Show the input summary with smooth animation
    summary.style.display = 'block';
    setTimeout(() => {
        summary.style.opacity = '1';
    }, 50); // Delay the animation slightly to ensure smoothness
});

document.getElementById("prediction-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Clear the input fields except those within the summary section
const inputs = document.querySelectorAll("#prediction-form input, #prediction-form select");
inputs.forEach(input => {
    if (!input.closest("#summary")) {
        input.value = "";
        updateProgressBar();
    }
});

});

function toggleNavPanel() {
    console.log('Toggle function called');
    var navPanel = document.getElementById('navPanel');
    var menuIcon = document.querySelector('.menu-icon');
    console.log(navPanel); // Check if navPanel is correctly selected
    console.log(menuIcon); // Check if menuIcon is correctly selected

    navPanel.classList.toggle('open');
    menuIcon.classList.toggle('open');
}

// Function to check if the input value is negative and display a subtle error message
function checkNegativeInput(event) {
    const errorSpan = document.getElementById(event.target.id + '-error');
    if (event.target.value < 0) {
        event.target.value = ''; // Clear the input
        errorSpan.textContent = 'Input cannot be negative'; // Display error message
        errorSpan.style.color = 'red'; // Optional: change text color to red for visibility
    } else {
        errorSpan.textContent = ''; // Clear the error message if input is valid
    }
}

// Get all the input elements that need validation
const ageInput = document.getElementById('age');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const durationInput = document.getElementById('duration');
const heartRateInput = document.getElementById('heart_rate');
const bodyTempInput = document.getElementById('body_temp');

// Add event listeners for 'input' event to each field
ageInput.addEventListener('input', checkNegativeInput);
heightInput.addEventListener('input', checkNegativeInput);
weightInput.addEventListener('input', checkNegativeInput);
durationInput.addEventListener('input', checkNegativeInput);
heartRateInput.addEventListener('input', checkNegativeInput);
bodyTempInput.addEventListener('input', checkNegativeInput);

document.addEventListener("DOMContentLoaded", function () {
    const funFacts = [
        "Bananas are berries, but strawberries aren't.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
        "Avocados are fruit, and they are classified as a single-seeded berry.",
        "Apples float in water because they are 25% air.",
        "Carrots were originally purple, not orange.",
        "Did you know that weightlifting can help you burn calories even after your workout?",
        "Swimming is one of the most effective exercises for burning calories because it engages multiple muscle groups.",
        "High-intensity interval training (HIIT) is a great way to burn calories in a short amount of time.",
        "Did you know that laughing can burn calories too? It's a great way to sneak in some extra calorie burning throughout the day!",
        "Running or jogging is a popular and effective way to burn calories and improve cardiovascular health.",
        "Laughing for 10 to 15 minutes can burn up to 40 calories.",
        "Chewing gum burns about 11 calories per hour.",
        "Fidgeting while sitting or standing can burn up to 350 calories per day.",
        "Drinking ice-cold water can burn calories as your body works to warm it up to body temperature.",
        "Sleeping can burn calories too! On average, you can burn around 50-100 calories per hour while sleeping, depending on factors like weight and metabolism.",
        "Standing burns more calories than sitting. Standing burns around 50 more calories per hour than sitting.",
        "Eating spicy food can temporarily speed up your metabolism, helping you burn more calories.",
        "Cold weather can increase calorie burn, as your body works harder to maintain its core temperature.",
        "Drinking green tea has been linked to a slight increase in metabolism, helping you burn more calories throughout the day.",
        "Cleaning your house vigorously for an hour can burn around 200-300 calories.",
        "Chewing and digesting celery can burn more calories than the actual celery contains, making it a 'negative calorie' food.",
        "Brushing your teeth can burn around 10 calories per session.",
        "Eating protein-rich foods can increase your metabolism and help you burn more calories during digestion.",
        "Doing household chores like vacuuming or gardening can burn as many calories as going for a brisk walk.",
        "Laughing raises your heart rate and burns calories, so watching a funny movie can be a fun way to burn calories.",
        "Doing a high-intensity workout like HIIT (High-Intensity Interval Training) can continue to burn calories even after you've finished exercising, thanks to the 'afterburn effect.'",
        "Standing up and pacing while talking on the phone can help burn extra calories.",
        "Playing a musical instrument, especially one that requires physical exertion like drums or guitar, can burn calories.",
        "Chilling in a cold room can cause your body to burn more calories to maintain its temperature.",
        "Dancing is not only fun but also a great way to burn calories. Depending on the intensity, you can burn anywhere from 200 to 600 calories per hour dancing."

    ];

    const popup = document.getElementById("fun-fact-popup");
    const funFactText = document.getElementById("fun-fact-text");
    const hideButton = document.getElementById("hide-fun-fact");
    const moreButton = document.getElementById("more-fun-facts");
    let isHidden = false;

    function getRandomFact() {
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        return funFacts[randomIndex];
    }

    function showFunFact() {
        if (!isHidden) {
            funFactText.textContent = getRandomFact();
            popup.style.right = "20px"; // Slide in
            setTimeout(hideFunFact, 10000); // Hide after 10 seconds
        }
    }

    function hideFunFact() {
        popup.style.right = "-500px"; // Slide out
        if (!isHidden) {
            setTimeout(showFunFact, 10000); // Show new fact after 10 seconds
        }
    }

    hideButton.addEventListener("click", function () {
        isHidden = true;
        popup.style.right = "-500px"; // Immediately hide
    });

    moreButton.addEventListener("click", function () {
        isHidden = true;
        window.location.href = "#fun-facts-section"; // Redirect to the bottom section
    });

    // Start the cycle
    setTimeout(showFunFact, 5000); // Initial delay before the first slide in
});

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);



function dragElement(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    element.onmousedown = function(e) {
        e.preventDefault();
        // Get the initial mouse cursor position
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    };

    function elementDrag(e) {
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the element's new position
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
        element.style.position = "absolute";
    }

    function closeDragElement() {
        // Stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const summaryElement = document.getElementById('summary');
    dragElement(summaryElement);
});














