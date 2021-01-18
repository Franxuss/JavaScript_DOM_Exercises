let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	var fullList = document.querySelector("#myList");
	var newLi = document.createElement("li");
	fullList.appendChild(newLi);
	newLi.innerHTML = "Fourth Element";
});
