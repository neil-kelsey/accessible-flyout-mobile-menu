// add/remove body classes based on viewport width
var bodyViewportClasses = function() {
    if(document.getElementById("mobileNavToggle"))
    {
        $('#mobileNavToggle').remove();
    }

    // testing the display property on the element
    var nav_display = $('.off-canvas-nav-links').css('display');
    // testing for display:block (changed in css via media queries)
    if (nav_display === 'block') {
        $("body").removeClass("multi-column").addClass("small-screen");
    }
    // testing for display:none (changed in css via media queries)
    if (nav_display === 'none') {
        $("body").removeClass("active-sidebar active-nav small-screen")
            .addClass("multi-column");
    }
}

// function for sidebar display toggle
var showSidebar = function() {
    $('body').removeClass("active-nav").toggleClass("active-sidebar");
    $('.menu-button').removeClass("active-button");
    $('.sidebar-button').toggleClass("active-button");
    $('.sidebar-button').attr('aria-expanded',$('.sidebar-button').attr('aria-expanded') == 'true' ? 'false' : 'true');
    $('.sidebar-button').attr('value',$('.sidebar-button').attr('value') == 'Mobile navigation menu collapsed' ? 'Mobile navigation menu expanded' : 'Mobile navigation menu collapsed');
}
// add/remove classes everytime the window resize event fires
jQuery(window).resize(function(){
    bodyViewportClasses();
});
jQuery(document).ready(function($) {
    var doc = document.getElementById('doc');
    doc.removeAttribute('class', 'no-js');
    doc.setAttribute('class', 'js');
    // Toggle for sidebar
    $('.sidebar-button').click(function(e) {
        e.preventDefault();
        showSidebar();
    });

    // Escape Key to Close
        $(document).keyup(function(e) {
            if (e.keyCode == 27 ) {
               showSidebar();
            }
        });

    bodyViewportClasses();
});
 