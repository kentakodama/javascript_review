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
        node.innerHTML = new DomNodeCollection(string);
      })
    }
  }
  
  empty() {
    this.html('')
  }

  append(child) {
    
    if(child instanceof 'string' || child instanceof HTMLElement) {
      let newNode = new DomNodeCollection(child);
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
  
  children() {
    let children = []
    this.nodes.forEach((node) => {
      children += Array.from(node.innerHTML)
    })
    return new DomNodeCollection(children)
  }
  
  parent() {
    let parents = [];
    this.nodes.forEach((node) => {
      parents += node.parentNode
    })
    return new DomNodeCollection(parents)
  }
  
  find(selector) {
    let matches = []
    this.nodes.forEach((node) => {
      matches += node.querySelectorAll(selector);
    })
    
    return new DomNodeCollection(matches)
  }
  
  remove() {
    
    this.nodes.forEach((node) => {
      node.parentNode.removeChild(node)
    })
    
  }
  
  
  on(userEvent, callback) {
    
    this.nodes.forEach((node) => {
      node.addEventListener(userEvent, callback);
    })
    
  }
    
}




module.exports = DomNodeCollection;





