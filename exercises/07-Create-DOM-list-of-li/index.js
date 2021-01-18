let beginning = "<ul>";
let liststring = "<li>" + "First Item" + "</li>" + "<li>" + "Second Item" + "</li>" + "<li>" + "Third Item" + "</li>";
let ending = "</ul>";

// do not modify after this line
document.querySelector("#myDiv").innerHTML = beginning + liststring + ending;
let i = 10;
for (i = 0; i < 5; i++) {
	console.log(i);
}
