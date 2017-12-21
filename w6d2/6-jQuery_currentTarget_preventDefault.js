
currentTarget 
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

preventDefault
//We have also discussed previously about the need to preventDefault. 
//This stops the event from triggering any built-in actions. 
//This is most important for form submit events, since if the event is not canceled by your JavaScript code, the browser will perform the default action, which is to make an HTTP request submitting a form.

