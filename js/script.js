let asideParagraph = document.getElementById("aside-paragraph")
let button = document.createElement("button")
let buttonString = document.createTextNode("Copiar")

function changeAsideStyle() {
  document.getElementById("girl-image").style.display = "none"
  document.getElementById("aside-title").style.display = "none"
  
  asideParagraph.classList.add("encrypted-text");
  button.appendChild(buttonString)
  button.classList.add("decrypt")
  button.classList.add("copy-button")
  aside.appendChild(button)
}

function encryptText(text) {
  let encryptedText = ""
  for(let i = 0; i < text.length; i++) {
    if(text[i] == "a") {
      encryptedText = encryptedText + "ai"
    } else if(text[i] == "e") {
      encryptedText = encryptedText + "enter"
    } else if(text[i] == "i"){
      encryptedText = encryptedText + "imes"
    } else if(text[i] == "o"){
      encryptedText = encryptedText + "ober"
    } else if(text[i] == "u"){
      encryptedText = encryptedText + "ufat"
    } else {
      encryptedText = encryptedText + text[i]
    }
  }

  return encryptedText
}

function encryptButton() {
  let text = document.querySelector("textarea").value
  changeAsideStyle()
  let encryptedText = encryptText(text)
  asideParagraph.innerHTML = encryptedText
}