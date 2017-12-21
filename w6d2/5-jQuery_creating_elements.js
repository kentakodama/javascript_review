
//create li and append to ul 
const $li = $("<li></li>");
// sets the textContent property
$li.text(coolThings[i]);
$li.attr("style", "background-color: green");
$ul.append($li)