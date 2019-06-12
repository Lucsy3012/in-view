# in-view
A small function that allows the user to style an element to the current visibility state via a CSS custom property.

## How does it work?
With `in-view.js` you can get information about elements that are currently visible to the window. With `.in-view--js` you create a new area that gets watched by the script.
Now you can manipulate the elements within the view.
* The `.in-view` gets added if the area visible at all
* The `--percent` property gets added to the area
* The `--percent` property changes from 0 (not visible, but coming further down) to 100 (not visible, but scrolled past) while scrolling.

## How to use

    <!-- initiate a new view -->
    <div class="in-view--js">
        <div class="in-view--scale-up">
            <!-- gets scaled up by the --percent property -->
        </div>
    </div>
    
    <!-- you can change the rate -->
    <div class="in-view--js" data-multiplier="2">
        <div class="in-view--scale-up"></div>
    </div>
    
## Add your own styles
I've only built-in a few classes that might be useful. You can see how the script and the styles work together by examining the class and write your own ones.
Be sure to use the `--percent` property.

    .in-view--scale-up {
      transform: scale(~'calc(1 + (1 * var(--percent, 100) / 100))')
    }