let lastactive= null; 
function clickedBtn(clicked_id){
    if(lastactive != null){lastactive.classList.remove('active');}
    console.log(clicked_id);
    let activeBtn = document.getElementById(clicked_id);
    console.log(activeBtn);
        lastactive= activeBtn;
activeBtn.classList.add('active');
console.log(typeof lastactive +"  "+typeof activeBtn);
}

// contact page pop-up box
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("form-submit-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function(e) {
  modal.style.display = "block";
  e.preventdefault();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}