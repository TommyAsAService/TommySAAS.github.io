var banner_height=$("#banner_section").height();
document.getElementById("welcome").style.paddingTop=banner_height+"px";


var mywindow = $(window);
var mypos = mywindow.scrollTop();
$(function() {
  mywindow.scroll(function() {
    if(mywindow.scrollTop() > mypos)
    {
        $('#banner_section').fadeOut();  
    }
    else
    { 
      $("#banner_section").addClass("banner-opacity");
        $('#banner_section').fadeIn();
        
        if(mypos<100){
        $("#banner_section").removeClass("banner-opacity");
      }
    }
    mypos = mywindow.scrollTop();
  });
});

var mywindow = $(window);
var mypos=mywindow.scrollTop() ;
var welcome_height=$("#welcome").height();
var aboutme_height=$("#about").height();

$(function() {
  mywindow.scroll(function() {
    if((mywindow.scrollTop() >= welcome_height +banner_height) &&(mywindow.scrollTop()<=(welcome_height+ aboutme_height+banner_height)))
    {
      $("#menu-about").addClass("color_menu_element");
    }else{
       $("#menu-about").removeClass("color_menu_element");
    }
  });
  mypos=mywindow.scrollTop() ;
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var open = false;
$(function() {
  $(".border-menu").click(function(){
    open = !open;

    if(open){
      $(".menu-nav").removeClass("nav-hide");
      $(".menu-nav").addClass("nav-action");
    }
    else{
      $(".menu-nav").removeClass("nav-action");
      $(".menu-nav").addClass("nav-hide");
      
    }
  });
});








