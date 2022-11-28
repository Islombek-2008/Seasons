let bodyEl = document.querySelector("body");
let boxEl = document.getElementById("box");
let box1El = document.getElementById("box1");
let box2El = document.getElementById("box2");
let box3El = document.getElementById("box3");

boxEl.addEventListener("click", function () {
	bodyEl.style.background = "url('./img/bahor.jpg') no-repeat";
	bodyEl.style.backgroundSize = "cover";
});
box1El.addEventListener("click", function () {
	bodyEl.style.background = "url('./img/yoz.jfif') no-repeat";
	bodyEl.style.backgroundSize = "cover";
});
box2El.addEventListener("click", function () {
	bodyEl.style.background = "url('./img/kuz.jpg') no-repeat";
	bodyEl.style.backgroundSize = "cover";
});
box3El.addEventListener("click", function () {
	bodyEl.style.background = "url('./img/qish.jpg') no-repeat";
	bodyEl.style.backgroundSize = "cover";
});
