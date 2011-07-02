/*!
* jQuery.grow() plugin
* Copyright 2011, jsr@malamute.dk
* Dual licensed under the MIT or GPL Version 2 licenses.
*/

/*global jQuery*/

(function ($) {
    'use strict';

    $.fn.grow = function (factor, options) {
        $(this).each(function () {
            var item = $(item),
                helper = item.next();

            if (!helper.is('.scale-helper')) {
                var position = item.position();

                item.css({
                    'width': item.width(),
                    'height': item.height()
                });

                helper = item.clone(false)
                    .addClass('scale-helper')
                    .css('visibility', 'hidden')
                    .insertAfter(item);

                item.css({
                    'max-width': 'none',
                    'max-height': 'none',
                    'position': 'absolute',
                    'top': position.top,
                    'left': position.left
                });
            };

            var baseWidth = helper.width(),
                scaledWidth = baseWidth * factor,
                baseHeight = helper.height(),
                scaledHeight = baseHeight * factor,
                basePosition = helper.position(),
                scaledTop = basePosition.top + (baseHeight - scaledHeight) / 2,
                scaledLeft = basePosition.left + (baseWidth - scaledWidth) / 2;

            item.animate({
                'width': scaledWidth,
                'height': scaledHeight,
                'top': scaledTop,
                'left': scaledLeft
            }, $.extend({ queue: false }, options));
        });

        return this;
    };
})(jQuery);