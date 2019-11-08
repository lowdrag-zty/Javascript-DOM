<!-- EXAMINE THE DOCUMENT OBJECT -->

// console.dir(document); --> list all the things in the document(your HTML file)

// console.log(document.domain); --> return the domain of the html webpage

<!-- A short discussion about Uniform Resource Locator, domain and Internet Protocal. -->

- URL is composed of a method, a host name, a port and a path. Methods are commonly http, https, ftp...
  Host name is the domain name or IP address. Port is optional. Path is the file path.
  For example, http://techdifferences.com/difference-between-while-and-do-while-loop.html
  As you can see, it contains details to the exact page.

- Domain is the translated human-friendly address of IP address. A domain is composed of several sub-domains:
  top-level --> .com
  intermediate-level --> .google
  low-level --> www

- IP. For example, 166.58.48.34 is an IP address. As you can see, it's very human-infriendly.An IP address is a logical address (numerical label) assigned to every computer connected to a computer network. It basically identifies the location of the computer on the internet and also helps in routing the information.
  Notice that domain name could simply be the IP address UNCHANGED

- DNS. Domain Name System (DNS) converts a domain name into its specific IP address that computer want to communicate. When a user enters your domain name into a web browser, the browser uses your domain name to search and identify the correct IP address and as a result, passes the website associated with that IP address.

// console.log(document.URL); --> We could see at the end of the URL the file path

// console.log(document.title); --> Also: doctype / head / body / forms / images / links

// console.log(document.all); --> Return all elements in the document from the start to the end in the form similar to an array. Notice that it won't include the closing elements.

// console.log(document.all[10]); --> Specify which one of the array you want to return.

// document.all[10].textContent = 'Hello'; --> Change the text content of the header element to 'Hello'

<!-- GETELEMENTBYID -->

// console.log(document.getElementById('header-title')); --> You could also assign the element to a variable first
var headerTitle = document.getElementById('header-title'); => console.log(headerTitle);

Compare textContent with innerText --> textContent doesn't care about styles. For example, if you use display none
for a specific span, the console will still show the hidden part if you use textContent. innerText, however, cares about styles. Therefore, for the same display: none, the hidden part will really be hidden.
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
Note that the above two are used to change the TEXT of the element. If we want to change the text into HTML, that is actually an innerHTML. For example, 'hello' => 'hi', but with innerHTML, we do: 'hello' => '<i>hi</i>'

// header.style.something --> Could be used to change the style of 'header' variable's target.

<!-- GETELEMENTSBYCLASSNAME -->

// var items = document.getElementsByClassName('...'). However, if we want to apply a new property to all items, we have to use FOR LOOP, couldn't just items.style.something

<!-- GETELEMENTSBYTAGNAME -->

// Tags are basically things like div, li, h2...

!!!<!-- QUERYSELECTOR -->!!!
Query Selector helps you find the FIRST element that matches the CSS selector
For example, var header = document.querySelector('#main-header');
Note that we could use: #id | .class | tag | tag[specific information] wrapped with ''
If a class has multiple children and we only want to change the property for the last child, we could write:
var lastItem = document.querySelector('.list-group-item:last-child');
If a specific index of child, use ...:nth-child(n);

<!-- QUERYSELECTORALL -->

Basically the same thing as GETELEMENTBYCLASSNAME | GETELEMENTBYTAGNAME
Notice that you still cannot commit a change to all the selected without using FOR LOOP
