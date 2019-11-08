                                        <!-- EVENT LISTENER -->

An event listener is a procedure or function in a computer program that waits for an event to occur. Examples of an event are the user clicking or moving the mouse, pressing a key on the keyboard, disk I/O, network activity, or an internal timer or interrupt. The listener is programmed to react to an input or signal by calling the event's handler.

If we already have a button in the html file, we could write in js -->
var button_0 = document.getElementById('button').addEventListener('click',do_something);
Therefore, when the button 'hears' the click on it, it will perform the do_something part of the parameters

<!-- Show detailed features of a click action  -->

function func(event){
console.log(event);
}
Note that the 'event' parameter basically represents the LISTENER
This will return many features of the click. Each time is different.

// event.target --> return the LISTENER. In our case, it is the button.
// event.clientX --> return the X position from the BROWSER
// event.offsetX --> return the X position from the element

<!-- Some other types of events -->

dblclick
mousedown
mouseup
mouseenter
mouseleave
mouseover --> also includes inner HTML
mouseout --> also includes inner HTML
mousemove --> return something whenever the cursor is moving
keydown --> return keyboard input
keyup
keypress
input
change
cut
paste
focus
blur

<!-- Two important usage of mousemove -->

You could find them in the dom.js file
