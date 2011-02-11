/*
 * ShareIt - jQuery Plugin
 * Share content on facebook and iwiw
 *
 * Author: Matyas Juhasz
 * Documentation: http://joohi.hu/shareit
 * No license. Use it however you want. Just keep this notice included.
 *
 * Version: 1.0.2 (2010-07-09)
 * Requires: jQuery v1.3+
 *
 */

(function($) {
  $.fn.extend({
    shareIt: function(givenOptions) {
        var self = $(this),
            options = $.extend({
              title: "Share this page",
              facebook_icon: "images/facebook.png",
              iwiw_icon: "images/iwiw.png",
              icons: [],
              iwiw: true,
              facebook: true
            }, givenOptions);

        var shareitbox;

        function showShareBox() {
          $("body").append(
            shareitbox = $('<div id="shareit-box" class="shareit-box"><h2>'+options.title+'</h2></div>')
          );

          shareitbox.css("left", $(self).offset().left+"px");
          shareitbox.css("top", $(self).offset().top+$(self).height()+6+"px");

          if (options.facebook)
            shareitbox.append(facebook_button = '<a href="http://www.facebook.com/sharer.php?u='+document.location+'" target="_blank"><img src="'+options.facebook_icon+'" /></a>');
          if (options.iwiw)
            shareitbox.append(iwiw_button = '<a href="http://iwiw.hu/pages/share/share.jsp?u='+document.location+'" target="_blank"><img src="'+options.iwiw_icon+'" /></a>');
          $(options.icons).each(function() {
            shareitbox.append('<a href="'+this[0]+'" target="_blank"><img src="'+this[1]+'" /></a>');
          });

          $("*").bind("click.shareit", function() {
            $(".shareit-box").remove();
            $("*").unbind("click.shareit");
          });

        }

        function doIt() {
          self.click(function() {
            showShareBox();
            return false;
          });
        }
        doIt();
    }
  });
})(jQuery);