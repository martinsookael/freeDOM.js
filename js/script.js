/*jslint indent: 2*/
/*global window, console, $ */

'use strict';

$.foo.value = "Hello World";

$.bar.refill("Hello World");

$.foo.onkeyup = function () {
  $.bar.refill(this.value);
};

$.checkHidden.onclick = function () {
  var isHidden = $.foo.hasClass("hidden");
  console.log(isHidden);
  $.hiddenStatus.refill(String(isHidden));
};

$.addHidden.onclick = function () {
  $.foo.addClass("hidden");
};

$.removeHidden.onclick = function () {
  $.foo.removeClass("hidden");
};
