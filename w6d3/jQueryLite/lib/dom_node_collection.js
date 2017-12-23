class DOMNodeCollection {
  
  //args go here not in the class level, must go in constructor
  constructor(nodes) {
    this.nodes = nodes
  }
  
  html(string) {
    
    if(string === undefined) {
      return this.nodes[0].innerHTML;
    } else {
      this.nodes.forEach((node) => {
        node.innerHTML = DomNodeCollection(string);
      })
    }
  }
  
  empty() {
    this.html('')
  }

  append(child) {
    
    if(child instanceof 'string' || child instanceof HTMLElement) {
      let newNode = DomNodeCollection(child);
      this.nodes.forEach((node) => {
        node.innerHTML += newNode
      })
    } else {
      this.nodes.forEach((node) => {
        node.innerHTML += child
      })
    }
  }
  
  addClass(string) {
    this.nodes.forEach((node) => {
      node.classList.add(string)
    })  
  }
  
  removeClass(string) {
    this.nodes.forEach((node) => {
      node.classList.remove(string)
    })
  }
    
}

module.exports = DomNodeCollection;