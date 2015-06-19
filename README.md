FreeDOM.js
===================

This is really just a homework idea by @saldre to me and @ethelvoites.  

##API  

freeDOM API with it's jQuery counterpart:

$.foo  ===  $("#foo")  

$.foo.refill(bar) === if (bar) { $("#foo").empty().append(bar) }  

$.foo.hasClass("hidden") === $("#foo").hasClass("hidden")  

$.foo.addClass("hidden")  ===  $("#foo").addClass("hidden")  

$.foo.removeClass("hidden") === $("#foo").removeClass("hidden")  

##Notes
1. I think Object.prototype.refill is not the correct way of doing this.  
2. Class names could be better; it's pretty difficult to actually figure out function names that would already not be in use by js or jQuery.
3. The "two-way data-binding" was just something I discovered on the way and wanted to try out.  
