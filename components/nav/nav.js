// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;

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
