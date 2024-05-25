function toggleNavPanel() {
    console.log('Toggle function called');
    var navPanel = document.getElementById('navPanel');
    var menuIcon = document.querySelector('.menu-icon');
    console.log(navPanel); // Check if navPanel is correctly selected
    console.log(menuIcon); // Check if menuIcon is correctly selected

    navPanel.classList.toggle('open');
    menuIcon.classList.toggle('open');
}
/*
const images = document.querySelectorAll('.member-image');

const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

const velocities = [];
const cooldowns = Array.from({ length: images.length }, () => 0); // Initialize cooldowns
const cooldownDuration = 500; // Cooldown duration in milliseconds

images.forEach(image => {
    // Initialize random position
    image.style.left = getRandomNumber(0, image.parentElement.offsetWidth - image.offsetWidth) + 'px';
    image.style.top = getRandomNumber(0, image.parentElement.offsetHeight - image.offsetHeight) + 'px';

    // Initialize random velocity
    const velocity = {
        x: getRandomNumber(-1, 1),
        y: getRandomNumber(-1, 1)
    };
    velocities.push(velocity);
});

setInterval(() => {
    images.forEach((image, index) => {
        const containerWidth = image.parentElement.offsetWidth;
        const containerHeight = image.parentElement.offsetHeight;
        const imageWidth = image.offsetWidth;
        const imageHeight = image.offsetHeight;
        const position = {
            x: parseFloat(image.style.left || 0),
            y: parseFloat(image.style.top || 0)
        };
        
        position.x += velocities[index].x;
        position.y += velocities[index].y;

        if (position.x <= 0 || position.x >= containerWidth - imageWidth) {
            velocities[index].x *= -1;
        }
        if (position.y <= 0 || position.y >= containerHeight - imageHeight) {
            velocities[index].y *= -1;
        }

        // Check for collisions with other images if cooldown is over
        if (cooldowns[index] <= 0) {
            for (let i = 0; i < images.length; i++) {
                if (i !== index) {
                    const otherImage = images[i];
                    const otherPosition = {
                        x: parseFloat(otherImage.style.left || 0),
                        y: parseFloat(otherImage.style.top || 0)
                    };
                    const dx = position.x - otherPosition.x;
                    const dy = position.y - otherPosition.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const minDistance = imageWidth / 2 + otherImage.offsetWidth / 2;
                    
                    if (distance < minDistance) {
                        // Bounce away
                        velocities[index].x *= -1;
                        velocities[index].y *= -1;
                        velocities[i].x *= -1;
                        velocities[i].y *= -1;
                        cooldowns[index] = cooldownDuration; // Set cooldown
                        cooldowns[i] = cooldownDuration; // Set cooldown
                        break; // Only handle collision with one image at a time
                    }
                }
            }
        } else {
            cooldowns[index] -= 30; // Decrease cooldown timer
        }

        image.style.left = position.x + 'px';
        image.style.top = position.y + 'px';
    });
}, 30); // Adjust speed of movement (in milliseconds) 

*/

/*function clearForm() {
    document.getElementById("contact-form").reset();
}*/

// Function to validate the form fields
function validateForm() {
    var topic = document.querySelector('input[name="topic"]:checked');
    var subject = document.getElementById('subject').value;
    var details = document.getElementById('details').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var hcaptchaResponse = document.querySelector('textarea[name="h-captcha-response"]').value;

    if (!topic) {
        alert('Please select a topic.');
        return false;
    }

    if (subject.trim() === '') {
        alert('Please enter a subject.');
        return false;
    }

    if (details.trim() === '') {
        alert('Please enter details.');
        return false;
    }

    if (name.trim() === '') {
        alert('Please enter your name.');
        return false;
    }

    if (email.trim() === '' || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (hcaptchaResponse.trim() === '') {
        alert('Please complete the hCaptcha.');
        return false;
    }

    return true;
}

// Function to validate email format
function validateEmail(email) {
    // Regular expression for basic email validation
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Add event listener to the form on submit
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Validate the form
    if (validateForm()) {
        // If form is valid, submit the form
        this.submit();
    }
});


