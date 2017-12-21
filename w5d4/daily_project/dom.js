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