/*jslint indent: 2*/
/*global window */

var $ = window;

(function () {
  'use strict';

  Object.prototype.refill = function (content) {
    this.innerHTML = "";
    if (content) {
      this.innerHTML = content;
    }
    return this;
  };

  Object.prototype.hasClass = function (classname) {
    var classes = this.className;
    if (classes.indexOf(classname) !== -1) {
      return true;
    }
    return false;
  };

  Object.prototype.addClass = function (classname) {
    if (this.hasClass(classname) === false) {
      var classes = this.className;
      if (classes !== '') {
        classname = ' ' + classname;
      }
      this.className = classes + classname;
    }
    return this;
  };

  Object.prototype.removeClass = function (classname) {
    if (this.hasClass(classname) === true) {
      var classes = this.className,
        findAndRemove = new RegExp("\\s?\\b" + classname + "\\b", "g");
      classes = classes.replace(findAndRemove, '');
      this.className = classes;
    }
    return this;
  };

}());
