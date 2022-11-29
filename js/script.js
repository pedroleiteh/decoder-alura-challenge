let aside = document.getElementById("aside-paragraph")
let button = document.createElement("button")
let buttonString = document.createTextNode("Copiar")

function changeAsideStyle() {
  document.getElementById("girl-image").style.display = "none";
  document.getElementById("aside-title").style.display = "none";
  
  aside.classList.add("encrypted-text");
  button.appendChild(buttonString)
  button.classList.add("decrypt")
  button.classList.add("copy-button")
  aside.appendChild(button)
}

let text = document.querySelector("textarea").value

function encrypt(text) {
  
}
