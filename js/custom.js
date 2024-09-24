$(window).scroll(function () {
        if ($(window).scrollTop() > 76) {
          $("header").addClass("fixed");
        } else {
          $("header").removeClass("fixed");
        }
      });
$(document).ready(function() {
  $(".portfolio-cards").slick({
      dots: false,
      arrows: false,
      infinite: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 4000,
      cssEase: "linear",
      pauseOnHover: true,
  });
  

  $(".portfolio-cards").on("mouseenter", function () {
    $(this).slick("slickSetOption", "autoplay", false, true); 
    $(this).slick("slickSetOption", "speed", 0, true); 
  });
  
  $(".portfolio-cards").on("mouseleave", function () {
    $(this).slick("slickSetOption", "autoplay", true, true); 
    $(this).slick("slickSetOption", "speed", 4000, true); 
    $(this).slick("slickPlay"); 
  });


  $("#ticker").webTicker({
    height: "180px",
    duplicate: true,
    rssfrequency: 0,
    startEmpty: false,
    hoverpause: true,
    transition: "ease",
  });
})

window.addEventListener("resize", function() {
  "use strict"; window.location.reload(); 
});
document.addEventListener("DOMContentLoaded", function()
{
/////// Prevent closing from click inside dropdown
document.querySelectorAll('.dropdown-menu').forEach(function(element)
{
       element.addEventListener('click', function(e)
       {
               e.stopPropagation();
       });
})
// make it as accordion for smaller screens
if (window.innerWidth < 992)
{
       // close all inner dropdowns when parent is closed
       document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown)
       {
               everydropdown.addEventListener('hidden.bs.dropdown', function()
               {
                       // after dropdown is hidden, then find all submenus
                       this.querySelectorAll('.submenu')
                               .forEach(function(everysubmenu)
                               {
                                       // hide every submenu as well
                                       everysubmenu
                                               .style
                                               .display =
                                               'none';
                               });
               })
       });
       document.querySelectorAll('.dropdown-menu a').forEach(function(element)
       {
               element.addEventListener('click', function(e)
               {
                       let nextEl = this.nextElementSibling;
                       if (nextEl && nextEl.classList
                               .contains('submenu'))
                       {
                               // prevent opening link if link needs to open dropdown
                               e.preventDefault();
                               console.log(nextEl);
                               if (nextEl.style.display ==
                                       'block')
                               {
                                       nextEl.style.display =
                                               'none';
                               }
                               else
                               {
                                       nextEl.style.display =
                                               'block';
                               }
                       }
               });
       })
}
// end if innerWidth
});
// DOMContentLoaded  end



































