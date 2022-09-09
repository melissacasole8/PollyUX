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
    } else {
      $(nav).attr("aria-expanded", true).removeClass("closed");
    }
  });
});

// input on focus/filled add class to label

$(document).ready(function () {
  var formControl = $("input");

  $(formControl).focus(function () {
    if ($(this).val() == 0) {
      $(this).find("span").addClass("focus");
    } else {
      $(this).removeClass("focus");
    }
  });
});
