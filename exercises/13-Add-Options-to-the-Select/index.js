var sel = document.querySelector("#mySelect");

window.onload = function() {
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	for (var i = 0; i < countries.length; i++) {
		var opt = document.createElement("option");
		opt.value = countries[i];
		opt.innerHTML = countries[i];
		sel.appendChild(opt);
	}
};

window.change = function change() {
	alert(sel.value);
};
