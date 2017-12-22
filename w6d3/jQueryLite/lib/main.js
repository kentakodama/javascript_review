
window.$l = (selector) => {
  
  if(typeof selector === 'string') {
    let nodeList = document.querySelectorAll(selector)
    //return nodeList.slice()
    return Array.prototype.slice.call(nodeList)
  }
  
}
