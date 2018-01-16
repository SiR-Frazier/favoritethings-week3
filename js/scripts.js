$(document).ready (function() {
  $("#favorite-things").submit(function(event) {
  var favoriteThings = ['favoriteColor', 'favoriteMovie', 'favoriteDessert', 'favoriteSport'];
  var favoriteColor = $("input#fav-color").val();
  var favoriteMovie = $("input#fav-movie").val();
  var favoriteDessert = $("input#fav-dessert").val();
  var favoriteSport = $("input#fav-sport").val();

    $(".fav-color").text(favoriteColor);
    $(".fav-movie").text(favoriteMovie);
    $(".fav-dessert").text(favoriteDessert);
    $(".fav-sport").text(favoriteSport);
    
    event.preventDefault();
  });
});
