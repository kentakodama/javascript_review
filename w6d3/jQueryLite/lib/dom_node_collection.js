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
  
  //here we have to add an eventKey to the properties of the element manually 
  on(eventName, callback) {
    this.each((node) => {
      node.addEventListener(eventName, callback);
      const eventKey = `jqliteEvents-${eventName}`;
      if (typeof node[eventKey] === "undefined") {
        node[eventKey] = [];
      }
      node[eventKey].push(callback);
    });
  }
  
  
  off(eventName) {
    this.each((node) => {
      const eventKey = `jqliteEvents-${eventName}`;
      if (node[eventKey]) {
        node[eventKey].forEach((callback) => {
          node.removeEventListener(eventName, callback);
        });
      }
      node[eventKey] = [];
    });
  }

    
}




module.exports = DomNodeCollection;





