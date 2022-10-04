"use strict";

// $(".filter-handle").click(function () {
//   var filter = $(".filter");

//   if ($(filter).hasClass("hide")) {
//     $(this).removeClass("hide");
//   } else {
//     $(filter).addClass("hide");
//   }
// });

$(".filter-handle").click(function () {
  var filter = $(".filter");

  $(filter).slideToggle("slow");
});
