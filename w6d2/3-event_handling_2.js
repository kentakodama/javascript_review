
//more examples
// there are three separate events listeners

<button id="alert-button">Click Me For An Alert</button>

<input type="text" id="mystring">

<p id="mystring-reversed"></p>

<script>
  //1) simply alerts hello when clicked 
  const buttonEl = document.getElementById("alert-button");
  buttonEl.addEventListener("click", event => {
    alert("HELLO");
  });
  
  //2) reverses string in real time 
  const inputEl = document.getElementById("mystring");
  const pEl = document.getElementById("mystring-reversed");
  inputEl.addEventListener("input", () => {
    const value = inputEl.value;
    pEl.textContent = value.split("").reverse().join("");
  });

  //3) added mouseover event handler to result of second event hadnler
  pEl.addEventListener("mouseover", () => {
    alert("YOU MOUSED OVER ME!");
  });
</script>