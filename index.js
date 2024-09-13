let sliderImgs = ["photos/1.jpg", "photos/2.jpg", "photos/3.jpg"];
let slider = document.querySelector("img");

let count = 0;

function next() {
  count++;
  if (count >= sliderImgs.length) {
    count = 0;
    slider.src = sliderImgs[count];
  } else {
    slider.src = sliderImgs[count];
  }
}

function prev() {
  count--;
  if (count < 0) {
    count = sliderImgs.length - 1;
    slider.src = sliderImgs[count];
  } else {
    slider.src = sliderImgs[count];
  }
}

var fName = prompt("Enter Your First Name: ")
var lName = prompt("Enter Your Last Name: ")
var fullName = fName + " " + lName;
console.log(fullName);
console.log(fullName.length);
var mName = fullName.toUpperCase();
console.log(mName);
console.log(mName.charAt(1));
