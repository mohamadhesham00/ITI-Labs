var start = 0;
var end = 2;
var imgContainer = document.getElementsByClassName("image-container");

var tagName = document.getElementById("tag-name");
var className = document.getElementById("class-name");
var id = document.getElementById("id-input");
var name = document.getElementById("name");
var output = document.getElementById("output");

var modeBtn = document.getElementById("mode-btn");
function submitForm(e) {
  e.preventDefault();

  var tagCount = document.getElementsByTagName(tagName.value).length;
  var classCount = document.getElementsByClassName(className.value).length;
  var idExists = document.getElementById(id.value) == null ? "False" : "True";
  var nameCount = document.getElementsByName(name.value).length;
  output.innerHTML = `Number of ${tagName.value}: ${tagCount} .... class content: ${classCount} .... id : ${idExists} .... name: ${nameCount}`;
}

function moveRight() {
  if (end + 1 < imgContainer.length) {
    imgContainer[start++].style.display = "none";
    imgContainer[++end].style.display = "block";
  }
}
function moveLeft() {
  if (start - 1 >= 0) {
    imgContainer[end--].style.display = "none";
    imgContainer[--start].style.display = "block";
  }
}

function toggleMode() {
  console.log("eeee");
  var isDarkMode = document.body.classList.contains("dark-mode");
  if (isDarkMode) {
    document.body.classList.remove("dark-mode");
    modeBtn.innerHTML = "Light Mode 🌜";
  } else {
    document.body.classList.add("dark-mode");
    modeBtn.innerHTML = "Dark Mode 🌚";
  }
}
