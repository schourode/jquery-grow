/*!
* jQuery.grow() plugin
* Copyright 2011, jsr@malamute.dk
* Dual licensed under the MIT or GPL Version 2 licenses.
*/

/*global jQuery*/

(function ($) {
    'use strict';

    $.fn.grow = function (scaleFactor, options) {
        $(this).each(function () {
            var item = $(this);

	    if (!item.data('grow_original_width')) {

		item.data('grow_original_width',item.width());
		item.data('grow_original_height',item.height());
		item.data('grow_original_position',item.position());

                item.css({
                    'width': item.width(),
                    'height': item.height(),
                    'max-width': 'none',
                    'max-height': 'none',
                    'position': 'absolute',
                    'top': item.position().top,
                    'left': item.position().left
                });
            };

            var baseWidth = item.data('grow_original_width'),
                baseHeight = item.data('grow_original_height'),
                basePosition = item.data('grow_original_position'),
                scaledWidth = baseWidth * scaleFactor,
                scaledHeight = baseHeight * scaleFactor,
                scaledTop = basePosition.top + (baseHeight - scaledHeight) / 2,
                scaledLeft = basePosition.left + (baseWidth - scaledWidth) / 2,
                zIndex = Math.ceil(scaleFactor * 1000);

            item.css('z-index', zIndex).animate({
                'width': scaledWidth,
                'height': scaledHeight,
                'top': scaledTop,
                'left': scaledLeft
            }, $.extend({ queue: false }, options));
        });

        return this;
    };
})(jQuery);