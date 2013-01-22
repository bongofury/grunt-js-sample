/*! Grunt jQuery Test - v0.1.0 - 2013-01-22
* https://github.com/bongofury/grunt-jquery-test
* Copyright (c) 2013 bongofury; Licensed MIT */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };

}(jQuery));
