document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };
  
  

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });


  
  // adding SF places as list items

  
  // --- your code here!
  let favoriteSubmit = document.querySelector('favorite-submit')
  console.log(favoriteSubmit);
  favoriteSubmit.addEventListener('click', (event) => {
    console.log('hello');
    event.preventDefault();
    //grab element of text input
    let favoriteItem = document.querySelector('.favorite-input')
    console.log(favoriteItem);
    console.log(favoriteItem.value);
    //clear input 
    
    //append it as a child of the outer ul 
    let sfPlaces = document.getElementById("sf-places");
    let li = document.createElement("li")
    li.textContent = favoriteItem.value;
    sfPlaces.appendChild(li)
    
    document.querySelector('.favorite-input').value = ''
  })


  // adding new photos

  // --- your code here!
  
  //get item 
  let button = document.querySelector(".photo-show-button");
  button.addEventListener('click', (event) => {
    event.preventDefault();
    
    let form = document.querySelector(".photo-form-container");
    if(form.classList.contains('hidden')) {
      form.classList.remove('hidden');
    } else {
      form.classList.add('hidden');
    }
    
  })
  //add event listener on click for "photo-show-button" 
  
  //when clicked remove class hidden 

  
  
  favoriteSubmit = document.querySelector('photo-url-submit')
  console.log(favoriteSubmit);
  favoriteSubmit.addEventListener('click', (event) => {
    console.log('hello');
    event.preventDefault();

});
