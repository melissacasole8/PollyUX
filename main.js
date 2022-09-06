// import "/main.css";
// import "/components/nav/nav.js";

// keeping this for future reference

// import javascriptLogo from "./javascript.svg";
// import { setupCounter } from "./counter.js";

// document.querySelector("#app").innerHTML = `
//     <h1>Hello Vite!</h1>
// `;

// setupCounter(document.querySelector("#counter"));

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
