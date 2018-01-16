$(document).ready (function() {
  $("#blanks form").submit(function(event) {

  var favoriteColor = $("input#fav-color").val();
  var favoriteMovie = $("input#fav-movie").val();
  var favoriteDessert = $("input#fav-dessert").val();
  var favoriteSport = $("input#fav-sport").val();

  var favoriteThings = [favoriteColor, favoriteMovie, favoriteDessert, favoriteSport];

  var pushNewArray = [];
  pushNewArray.push(favoriteColor);
  pushNewArray.push(favoriteMovie);
  pushNewArray.push(favoriteDessert);

  $(".fav-color").text(pushNewArray[0]);
  $(".fav-movie").text(pushNewArray[1]);
  $(".fav-dessert").text(pushNewArray[2]);

  $(".newArray").show();
  event.preventDefault();
  });
});
