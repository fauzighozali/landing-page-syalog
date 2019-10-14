$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 200) { 
        $('.navbar').addClass('solid');
        $('.navbar').removeClass('bg-transparent');
    } else {
        $('.navbar').removeClass('solid');
        $('.navbar').addClass('bg-transparent');
    }
  });
});