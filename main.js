const roundNumber = document.querySelector(".round-number")
const btn = document.querySelector(".btn");


function getNumber() {
let number;
number = Math.floor(Math.random() * 100)
const val = roundNumber.innerHTML = number;
// console.log(val);

}
btn.addEventListener("click", getNumber);

// this is the form input javascript styling
const txt = document.querySelector(".txtDisplay");
const txtInput = document.querySelector(".name");
const btnForm = document.querySelector(".btn-form");

const getUser = function(){
   
    let val = txtInput.value;
    txt.innerHTML = val;
    txtInput.style.focus = "none";
    console.log(val);
    

    
}
btnForm.addEventListener("click", function(e) {
    e.preventDefault();

    getUser();
  



});
