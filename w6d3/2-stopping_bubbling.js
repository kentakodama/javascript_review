
//problem: if the inner div is clicked, all event listeners on parent elements are also triggered
//solution: use stopPropagation to stop the bubbling upwards

<div class="outer">
  <div class="middle">
    <div class="inner">
      I am in the inner-most div!
    </div>
  </div>
</div>

<script>
  const outerDiv = document.querySelector('.outer');
  outerDiv.addEventListener('click', function (e) {
    alert('outer');
  });

  const middleDiv = document.querySelector('.middle');
  middleDiv.addEventListener('click', function (e) {
    alert('middle');
    e.stopPropagation();
  });

  const innerDiv = document.querySelector('.inner');
  innerDiv.addEventListener('click', function (e) {
    alert('inner');
    e.stopPropagation();
  });
</script>