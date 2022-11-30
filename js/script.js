let asideParagraph = document.getElementById("aside-paragraph")
let button = document.createElement("button")
let buttonString = document.createTextNode("Copiar")
let aside = document.querySelector('aside')

function changeAsideStyle() {
  document.getElementById("girl-image").style.display = "none"
  document.getElementById("aside-title").style.display = "none"
  
  asideParagraph.classList.add("encrypted-text");
  button.appendChild(buttonString)
  button.classList.add("decrypt")
  button.classList.add("copy-button")
  aside.appendChild(button)
  aside.classList.add("aside-flex")
  
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

  return encryptedText;
}

function decryptText(text) {
  
  for(let i = 0; i < text.length; i++) {
    text = text.replace("ai", "a")
    text = text.replace("enter", "e")
    text = text.replace("imes", "i")
    text = text.replace("ober", "o")
    text = text.replace("ufat", "u")
  }

  return text;
}

function encryptButton() {
  let text = document.querySelector("textarea").value
  changeAsideStyle()
  let encryptedText = encryptText(text)
  asideParagraph.innerHTML = encryptedText
  button.addEventListener('button', updateClipboard(encryptedText))
}

function decryptButton() {
  let text = document.querySelector("textarea").value
  changeAsideStyle()
  let decryptedText = decryptText(text)
  asideParagraph.innerHTML = decryptedText
  button.addEventListener('button', updateClipboard(decryptedText))
}

/* copy button */
function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip)
}

