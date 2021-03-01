// ---------------------------------------- Scroll To Top ---------------------------------------- //
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var scrollToTopButton = document.getElementById("scrolltotop");
window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

// ---------------------------------------- Navigation Bar ---------------------------------------- //
$(document).ready(function () {
    // Toggle menu on click
    $("#menu-toggler").click(function () {
        toggleBodyClass("menu-active");
    });

    $(".anchor-link").click(function () {
        toggleBodyClass("menu-active");
    });

    function toggleBodyClass(className) {
        document.body.classList.toggle(className);
    }

});