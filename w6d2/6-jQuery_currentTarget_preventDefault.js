
//currentTarget 
// a method that identifies which specific element is triggering the event.
// Useful because: if same event handler is on all list items, we need to know
// which specific item triggered it so we can do something with it.

<ul>
  <li>Racecars</li>
  <li>Lasers</li>
  <li>Aeroplanes</li>
</ul>

<script>
  var $listItems = $("li");
  $listItems.on("mouseover", event => {
    const currentTarget = event.currentTarget;
    const $currentTarget = $(currentTarget);
    alert($currentTarget.text());
  })
</script>
