// const button = document.getElementById("but");
// const modal = document.getElementsById("mod");
// const close = document.getElementById("close");
const modal = document.getElementsByClassName("modal");
const mod1 = document.getElementById("mod1");
const mod2 = document.getElementById("mod2");
const mod3 = document.getElementById("mod3");
// button.addEventListener("click", function () {
//   modal.classList.add("on");
// });
// close.addEventListener("click", function () {
//   modal.classList.remove("on");
// });

function modalOpen1() {
  mod1.classList.add("on");
}
function modalOpen2() {
  mod2.classList.add("on");
}
function modalOpen3() {
  mod3.classList.add("on");
}

function modalClose1() {
  mod1.classList.remove("on");
}
function modalClose2() {
  mod2.classList.remove("on");
}
function modalClose3() {
  mod3.classList.remove("on");
}
