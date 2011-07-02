This simple jQuery plugin allows you to grow/scale/stretch any element in-place. In contrast to the [jQuery UI scale effect][1], scaling an element using the `grow()` function will not cause any side effects to the positioning of other items on the page.

[1]: http://docs.jquery.com/UI/Effects/Scale

# Usage
Well, it is painfully simple:

    $('#willy').grow(1.5);

You just enlarged that thing by 50%, but how do you undo that?

    $('#willy').grow(1);

Maybe you have a list of thumbnails and want to raise them on mouseover? 

    $('img').hover(
        function () { $(this).grow(1.2); },
        function () { $(this).grow(1.0); }
    );

Use the second (optional) parameter if you wish to control the duration of the animation:

    $('.explosion').grow(5, 'fast');
    $('.tree').grow(2, 3000);

# License

Dual licensed under the MIT or GPL Version 2 licenses:

 * http://www.opensource.org/licenses/mit
 * http://www.opensource.org/licenses/gpl-2.0
