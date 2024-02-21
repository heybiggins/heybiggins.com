window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the new padding based on the scroll position
    var horPadding = Math.max(5, 15 - currentScroll / 24);
    var vertPadding = Math.max(50, 150 - currentScroll / 2.5);
    header.style.padding = `${vertPadding}px ${horPadding}%`;
});
