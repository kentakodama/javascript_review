There are a couple low-level ways to get HTMLElements:

document.getElementById(selector)
//Returns a single Element matching the id.

document.getElementsByClassName(selector)
//Returns an Array-like object of type NodeList that contains all Elements matching the class name.

document.querySelectorAll(selector)
//Returns a NodeList of Elements matching the CSS selector.

//this will create an li, grab existing dom elenent, and append the li to the element
<ul id="cats">
</ul>

<script>
  window.setTimeout( () => {
    const li = document.createElement("li");
    const ul = document.getElementById("cats");
    li.textContent = "This is injected by JavaScript";
    ul.appendChild(li);
  }, 1000);
</script>

//other ways of manipulating DOM 
// 1) change class names(to change css attributes)
// 2) remove elements from the DOM 
<style>
  .red { background-color: red }
  .green { background-color: green }
</style>

<ul id="cats">
  <li class="green">Markov</li>
  <li class="red">Markov</li>
</ul>

<p>ALL PARAGRAPHS MUST DIE</p>

<label>
  Name
  <input type="text" name="cat[name]" id="cat_name">
</label>

<script>
  window.setTimeout( () => {
    const reds = document.getElementsByClassName("red");
    const greens = document.getElementsByClassName("green");

    // swap the `HTMLElement#className` property
    for (let i = 0; i < reds.length; i++) {
      reds[i].className = "green";
    }
    for (let i = 0; i < greens.length; i++) {
      greens[i].className = "red";
    }

    // disable the input
    document.getElementById("cat_name").disabled = true;

    // Remove a paragraph from the document.
    const paragraph = document.querySelector("p");
    paragraph.parentElement.removeChild(paragraph);
  }, 1000);
</script>