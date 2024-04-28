


//------------------------- Header text size ------------------------------

// Store original top position of the text elements
var originalTopPositions = {};

window.onload = function() {
    var headerTextElements = document.getElementsByClassName('header-text');
    for (var i = 0; i < headerTextElements.length; i++) {
        originalTopPositions[i] = parseInt(window.getComputedStyle(headerTextElements[i]).top);
    }
};

// Function to adjust font size and top position based on screen width
function adjustFontSizeAndPosition() {
    var screenWidth = window.innerWidth; // Get the screen width
    var fontSize = screenWidth / 50; // You can adjust this ratio as per your preference

    // Check if the calculated font size is less than 20
    if (fontSize < 20) {
        var fontSizeDiff = 20 - fontSize; // Calculate the difference in font size from 20
        fontSize = 20; // Set font size to 20

        // Get all elements with class 'header-text'
        var headerTextElements = document.getElementsByClassName('header-text');

        // Loop through each element and apply font size and adjust top position
        for (var i = 0; i < headerTextElements.length; i++) {
            headerTextElements[i].style.fontSize = fontSize + 'px';

            // Calculate new top position using original top position
            var newTop = 15;
            headerTextElements[i].style.top = newTop + 'px';
        }
    } else {
        // Reset font size and top position if screen size increases
        var headerTextElements = document.getElementsByClassName('header-text');

        // Loop through each element and reset font size and top position
        for (var i = 0; i < headerTextElements.length; i++) {
            headerTextElements[i].style.fontSize = ''; // Reset font size to default
            headerTextElements[i].style.top = ''; // Reset top position
        }
    }
}

// Call the function initially
adjustFontSizeAndPosition();

// Call the function whenever the page is loaded
window.addEventListener('load', adjustFontSizeAndPosition);

// Call the function whenever the window is resized
window.addEventListener('resize', adjustFontSizeAndPosition);







//------------------------- Home pics photo size ------------------------------


// Function to adjust image sizes based on screen width
function adjustImageSizes() {
    var screenWidth = window.innerWidth; // Get the screen width
    var images = document.getElementsByClassName('home-photo'); // Get all images by their class
    var text = document.getElementById('textnshop');

    // Loop through each image
    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        
        // Check if the screen width is less than 300
        if (screenWidth < 800) {
            // Calculate the new width as 80% of the screen width
            var newWidth = screenWidth * 0.8;
            // Set the image width to the calculated new width
            image.style.width = newWidth + 'px';
        } 
        else {
            // If the screen width is not less than 300, use the original width of the image
            image.style.width = '1000px'; // Reset width to auto (original size)
        }
        if (screenWidth < 500){
            var newWidth = screenWidth*0.96
            image.style.width = newWidth + 'px';
            var textnshopid = document.getElementById('textnshop');
            textnshopid.style.top = '420px';

        }
        else if (screenWidth < 600){
            var textnshopid = document.getElementById('textnshop');
            textnshopid.style.top = '450px';
        }
        else{
            var textnshopid = document.getElementById('textnshop');
            textnshopid.style.top = '540px'
        }
    }
}

// Call the function initially
adjustImageSizes();

// Call the function whenever the window is resized
window.addEventListener('resize', adjustImageSizes);

window.addEventListener('load', adjustImageSizes);

