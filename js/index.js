$('.slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
});


$('.carossels').slick();

function OnClickMenu(){
  document.getElementById("menu-bar").classList.toggle("total");
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav_res").classList.toggle("change");
}
