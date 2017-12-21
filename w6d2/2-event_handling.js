
//event handling basics
//this will render an input form, and attach an event to it on submit

<ul id="cats"></ul>

<form id="cat-form">
  <label>
    Name
    <input type="text" name="cat[name]" id="cat_name">
  </label>

  <input type="submit" value="Create Cat!">
</form>

<script>
  const catFormEl = document.getElementById("cat-form");
  catFormEl.addEventListener("submit", event => {
    
    //preventDefault prevents the form from actually being 'submitted' in the sense that the page would reload 
    event.preventDefault();

    // Get the name input element FROM THE FORM (type `HTMLInputElement`), get the
    // value, and clear it.
    const catNameInputEl = document.getElementById("cat_name")
    const catName = catNameInputEl.value;
    catNameInputEl.value = "";

    // Get the ul of cats.
    const ul = document.getElementById("cats");
    // create an li element
    const li = document.createElement("li");
    // set the text of the li to be the value of the input field
    li.textContent = catName;

    // insert it as the last item in the ul.
    ul.appendChild(li);
  });
</script>