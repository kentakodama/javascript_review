
const DomNodeCollection = require("./dom_node_collection");

window.$l = (selector) => {
  
  if(typeof selector === 'string') {
    let nodeList = document.querySelectorAll(selector)
    //return nodeList.slice() doesnt work
    let htmlElements = Array.prototype.slice.call(nodeList)
    return DomNodeCollection(htmlElements)
    //above works
  } else if (selector instanceof HTMLElement) {
    return DomNodeCollection([selector])
  }
  
}
