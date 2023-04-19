let sectionTop = $(".hello").offset().top;
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop > sectionTop - 100) {
    $(".navbar").addClass("bg-black");
  } else {
    $(".navbar").removeClass("bg-black");
  }
});

$(".setting-icon").click(function () {
  let right = $(".setting").css("right");
  if (right == "0px") {
    let widthinner = $(".inner").outerWidth();
    $(".setting").animate({ right: `-${widthinner}px` }, 500);
  } else {
    let widthinner = $(".inner").outerWidth();
    $(".setting").animate({ right: `0px` }, 500);
  }
});

let widthinner = $(".inner").outerWidth();
$(".setting").css({ right: `-${widthinner}px` });
$(".boxx").click(function () {
  let color = $(this).css("background-color");
  $(":root").css("--main-color", color);
  $(":root").css("--text-color", color);
  $(":root").css("--progress-bar", color);
  $(":root").css("--nav-color", color);
});

$(".imagebosx img").click(function () {
  let backgound = $(this).attr("src");

  $(".ss").attr("src", backgound);
});

$(".nav-link").click(function () {
  $(this).addClass("active");
  $(".nav-link").not(this).removeClass("active");
});

new WOW().init();
new PureCounter();
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items:2,
    rtl: true,
    loop: true,
    margin: 10,
    touchDrag:true,
    autoplay:true,
    autoplayTimeout:1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
    }
  });
});


$(document).ready(function(){
  $(".landing").fadeOut(2000)
})
