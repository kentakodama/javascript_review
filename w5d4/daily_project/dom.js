There are a couple low-level ways to get HTMLElements:

document.getElementById(selector)
//Returns a single Element matching the id.

document.getElementsByClassName(selector)
//Returns an Array-like object of type NodeList that contains all Elements matching the class name.

document.querySelectorAll(selector)
//Returns a NodeList of Elements matching the CSS selector.