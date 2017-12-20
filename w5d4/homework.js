
//normal asynch
window.setTimeout(() => alert('HAMMERTIME'), 5000);

//with closure
function hammerTime(time) {
  window.setTimeout(() => alert('HAMMERTIME'), time);  
}

