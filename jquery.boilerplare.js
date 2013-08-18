/* ===================================================
 * jquery.boilerplate.js 1.0.0
 * jQuery Plugin description.
 * 
 *==========================================================================================
 * The MIT License (MIT)
 * 
 * 
 * =========================================================================================
 * Requires: jQuery.js
 * =========================================================================================
 */
(function( $ ){

  $.fn.boilerplate = function(options) {

   // Set default values
    var defaults = $.extend({
            option1: 'value1',
            option2: 'value2',
            option3: 'value3',
        }, options ); 

    //to allow chaining
    return this;
  }

})( jQuery );

