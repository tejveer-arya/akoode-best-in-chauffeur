document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header');
  function checkScroll() {
    if (window.scrollY > 0) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  }
  checkScroll();
  window.addEventListener('scroll', checkScroll);
});
$(document).ready(function() {
  $(".portfolio-cards").slick({
      // slidesToShow: 4,
      // slidesToScroll: 1,
      dots: false,
      arrows: false,
      infinite: true,
      // centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 4000,
      cssEase: "linear",
      // waitForAnimate: false,
      // pauseOnFocus: false,
      pauseOnHover: true,
  });
  

  $(".portfolio-cards").on("mouseenter", function() {
    $(this).slick("slickSetOption", "autoplay", false, true); 
  });


  $(".portfolio-cards").on("mouseleave", function() {
    $(this).slick("slickSetOption", "autoplay", true, true); 
    $(this).slick("slickPlay"); 
  });


  $("#ticker").webTicker({
    height: "100px",
    duplicate: true,
    rssfrequency: 0,
    startEmpty: false,
    hoverpause: true,
    transition: "ease",
  });
})



































