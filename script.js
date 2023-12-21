document.addEventListener('scroll', function () {
    var scrolledHeight = window.scrollY;

    // Grab element and apply function to get parallax effect. Ensure that initial offset
    // is set correctly otherwise the image may be in the wrong place

    // Caffeine Tracker
    var caffeineTrackerVideo = document.querySelector('.caffeine-tracker-video');
    applyParallaxEffect(caffeineTrackerVideo, 900, scrolledHeight);

    // Quicken Interface Feature
    var quickenUserInterfaceVideo = document.querySelector('.quicken-interface-feature-video');
    applyParallaxEffect(quickenUserInterfaceVideo, 1300, scrolledHeight);

    // Food Truck Form
    var foodTruckFormVideo = document.querySelector('.food-truck-form-video');
    applyParallaxEffect(foodTruckFormVideo, 1750, scrolledHeight);

    // Software Developer
    var softwareDeveloperInternImage = document.querySelector('.software-developer-accompanying-image');
    applyParallaxEffect(softwareDeveloperInternImage, 2600, scrolledHeight);

    // Digital AV Associate
    var digitalAVAssociateImage = document.querySelector('.av-associate-accompanying-image');
    applyParallaxEffect(digitalAVAssociateImage, 3100, scrolledHeight);

    // St. Edward's University
    var stEdwardsUniversityImage = document.querySelector('.st-edwards-university-accompanying-image');
    applyParallaxEffect(stEdwardsUniversityImage, 3800, scrolledHeight);
});

// Function to automate the parallax process
function applyParallaxEffect(parallaxElement, initialOffset, scrolledHeight) {
    var factor = 0.5; // Factor for parallax effect

    if (parallaxElement) {
        // Adjust the offset based on the scroll, reversing the direction
        var offset = initialOffset - scrolledHeight * factor;

        // Apply the transform
        parallaxElement.style.transform = 'translateY(' + offset + 'px)';
    }
}
