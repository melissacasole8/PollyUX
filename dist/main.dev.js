"use strict";

// import "/main.css";
// import "/components/nav/nav.js";
// keeping this for future reference
// import javascriptLogo from "./javascript.svg";
// import { setupCounter } from "./counter.js";
// document.querySelector("#app").innerHTML = `
//     <h1>Hello Vite!</h1>
// `;
// setupCounter(document.querySelector("#counter"));
// nav functionality
$(document).ready(function () {
  var anchor = $("nav .anchor");
  $(anchor).click(function () {
    var nav = $("nav");

    if ($(nav).attr("aria-expanded") == "true") {
      $(nav).attr("aria-expanded", false).addClass("closed");
      $(".polly-container").removeClass("nav-open");
    } else {
      $(nav).attr("aria-expanded", true).removeClass("closed");
      $(".polly-container").addClass("nav-open");
    }
  }); // input on focus/filled add class to label

  var inputGroup = $(".input-group");
  inputGroup.each(function () {
    var field = $(this);
    var input = field.find("input");
    var label = field.find("label");

    function checkInput() {
      var valueLength = input.val().length;

      if (valueLength > 0) {
        label.addClass("freeze");
      } else {
        label.removeClass("freeze");
      }
    }

    input.change(function () {
      checkInput();
    });
  });
}); //search animation

$(".search").click(function () {
  $(this).toggleClass("search-closed");
}); // pil slider

$(".pill-switch button").click(function () {
  $(this).closest(".cont").removeClass("left right center");

  if ($(this).hasClass("left")) {
    $(this).closest(".cont").addClass("left");
  } else if ($(this).hasClass("center")) {
    $(this).closest(".cont").addClass("center");
  } else {
    $(this).closest(".cont").addClass("right");
  }
}); // button group toggling

$(".btn-group > .btn").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});