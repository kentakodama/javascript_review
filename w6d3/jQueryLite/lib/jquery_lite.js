/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
    
}




module.exports = DomNodeCollection;







/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


const DomNodeCollection = __webpack_require__(0);

window.$l = (selector) => {
  
  if(typeof selector === 'string') {
    let nodeList = document.querySelectorAll(selector)
    //return nodeList.slice() doesnt work
    let htmlElements = Array.prototype.slice.call(nodeList)
    return DomNodeCollection(htmlElements)
    //above works
  } else if (selector instanceof HTMLElement) {
    return DomNodeCollection([selector])
  } else {
    return selector
  }
  
}


/***/ })
/******/ ]);