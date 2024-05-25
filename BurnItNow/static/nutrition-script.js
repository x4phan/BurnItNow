function toggleNavPanel() {
    console.log('Toggle function called');
    var navPanel = document.getElementById('navPanel');
    var menuIcon = document.querySelector('.menu-icon');
    console.log(navPanel); // Check if navPanel is correctly selected
    console.log(menuIcon); // Check if menuIcon is correctly selected

    navPanel.classList.toggle('open');
    menuIcon.classList.toggle('open');
}
function searchFood() {
    // Get the search query entered by the user
    var searchQuery = document.getElementById("search-bar").value.toLowerCase();

    // Get all food items
    var foodItems = document.getElementsByClassName("food-item");

    // Loop through each food item
    for (var i = 0; i < foodItems.length; i++) {
        var foodItem = foodItems[i];
        var foodName = foodItem.getElementsByTagName("h3")[0].innerText.toLowerCase();
        var foodDescription = foodItem.getElementsByTagName("p")[0].innerText.toLowerCase();
        
        // Check if the search query matches the food name or description
        if (foodName.includes(searchQuery) || foodDescription.includes(searchQuery)) {
            // Show the food item if it matches the search query
            foodItem.style.display = "block";
        } else {
            // Hide the food item if it does not match the search query
            foodItem.style.display = "none";
        }
    }
}
function toggleZoom(event) {
    var currentItem = event.currentTarget;

    // Check if the clicked item already has the 'zoom' class
    var isZoomed = currentItem.classList.contains('zoom');

    // Remove 'zoom' class from all food items
    var foodItems = document.querySelectorAll('.food-item');
    foodItems.forEach(function(item) {
        item.classList.remove('zoom');
    });

    // If the clicked item was not zoomed, zoom it; otherwise, remove zoom
    if (!isZoomed) {
        currentItem.classList.add('zoom');
    }
}

// Add click event listeners to all food items
var foodItems = document.querySelectorAll('.food-item');
foodItems.forEach(function(item) {
    item.addEventListener('click', toggleZoom);
});


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
            setTimeout(showFunFact, 15000); // Show new fact after 10 seconds
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
    setTimeout(showFunFact, 10000); // Initial delay before the first slide in
});

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);




