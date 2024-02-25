window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the new padding based on the scroll position
    var horPadding = Math.max(5, 15 - currentScroll / 24);
    var vertPadding = Math.max(50, 150 - currentScroll / 2.5);

    // Check if the screen width is less than or equal to 845px
    if (window.innerWidth <= 845) {
        vertPadding = Math.max(25, 75 - currentScroll / 5); // Smaller vertical padding for smaller screens
   
        // Add a class to the header when the page is scrolled
        if (currentScroll > 80) { // Adjust the value as needed
            header.classList.add('shadow');
        } else {
            header.classList.remove('shadow');
        }
    }

    header.style.padding = `${vertPadding}px ${horPadding}%`;

    // Show/hide the back-to-top button
    var backToTopButton = document.getElementById('back-to-top');
    if (currentScroll > 1000) { // Adjust the value as needed
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
