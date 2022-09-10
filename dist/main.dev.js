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
});