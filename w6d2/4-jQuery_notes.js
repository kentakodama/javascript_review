
//implicit iteration 
<style>
  li.green {
    background-color: green;
  }
</style>

<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.js"></script>

<ul>
  <li>Racecars</li>
  <li>Lasers</li>
  <li>Aeroplanes</li>
</ul>

<script>
  const $listItems = $("li");
  //above is a jQuery object
  window.setTimeout( () => {
    //addClass is like a jQuery object method and maps a new class onto every element
    // more convenient; uses **implicit iteration**
    $listItems.addClass("green");
  }, 1000);
</script>



//adding elements and removing elements 

<div>
  <ul></ul>
</div>

<script>
  const coolThings = [
    "racecars",
    "lasers",
    "aeroplanes"
  ];

  let i = 0;
  window.setInterval( () => {
    
    // removing all child elements of ul
    const $ul = $("ul");
    if ($ul.children().length == 10) {
      $ul.children().remove();
    }
    
    //appending
    const li = document.createElement("li");
    li.textContent = coolThings[i];
    // jQuery#append is just like HTMLElement#appendChild
    $ul.append(li);

    i = (i + 1) % 3;
  }, 1000);
</script>