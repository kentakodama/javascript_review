
//theres a difference between the target and currentTarget on events 
//target refers to what triggered the event 
//currentTarget refers to the element that has the event listener
//(this could be the triggered event or a parent elemnent of an event )
<div class="outer">
  <div class="middle">
    <div class="inner">
      I am in the innermost div!
    </div>
  </div>
</div>

<script>
  const outerDiv = document.querySelector('.outer');
  outerDiv.addEventListener('click', function (e) {
    alert('CLICKED!');
  });
</script>


//if clicked 
outerDiv.addEventListener('click', function (e) {
  console.log(e.target); // the inner div
  console.log(e.currentTarget); // the outer div
});