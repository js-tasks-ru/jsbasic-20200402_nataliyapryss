function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
   
  button.addEventListener('click', hidden1);
  
  function hidden1() {
     text.hidden = !text.hidden;
   }
 }
 
 toggleText();