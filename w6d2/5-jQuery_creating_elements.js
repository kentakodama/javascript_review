


// Note that we are using the same jQuery function a new way. 
//jQuery is weird in that the same function,
// if passed different types of arguments, will do different things. When we pass $ a CSS selector, it searches for elements matching the selector.
// 
// When we pass $ HTML code, somewhere deep down it calls document.createElement for us. 
//It will then build a jQuery object, and the one item of this set will be the newly created, uninserted element. Later, this will be appended by $ul.append($li).
// 

//create li and append to ul 
const $li = $("<li></li>");
// sets the textContent property analogous to vanilla dom manipulating
$li.text(coolThings[i]);

//sets css attributes
$li.attr("style", "background-color: green");
$ul.append($li)
