
const DomNodeCollection = require("./dom_node_collection");

window.$l = (selector) => {
  
  if(typeof selector === 'string') {
    let nodeList = document.querySelectorAll(selector)
    //return nodeList.slice() doesnt work
    return Array.prototype.slice.call(nodeList)
    //above works
  }
  
}
