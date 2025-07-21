var index = 0;
var imgSources = [
  "images/Backend.svg",
  "images/frontend.svg",
  "Images/database.svg",
  "Images/problem-solving.svg",
  "Images/github.svg",
];
var captions = [
  "Backend",
  "Frontend",
  "Database",
  "Problem solving",
  "Git&Github",
];
var img = document.getElementById("slider-img");
var caption = document.getElementById("slider-caption");

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

function moveSlider(value) {
  index += value;
  index %= imgSources.length;
  if (index < 0) index = imgSources.length - 1;
  img.setAttribute("src", imgSources[index]);
  caption.innerHTML = captions[index];
}
// function moveLeft() {
//   if (start - 1 >= 0) {
//     imgContainer[end--].style.display = "none";
//     imgContainer[--start].style.display = "block";
//   }
// }

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
