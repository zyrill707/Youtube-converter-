const text = "Site Is Down!!!"; 
const typingSpeed = 100;
const reverseSpeed = 50;
const pauseTime = 1000;

let charIndex = 0;
let reverseIndex = text.length - 1;
let isReversing = false;
const typingElement = document.getElementById("typing-text");

function type() {
  if (!isReversing) {
    if (charIndex < text.length) {
      typingElement.innerHTML += text.charAt(charIndex);
      charIndex++;
      typingElement.classList.add("hazardous");
      setTimeout(() => {
        typingElement.classList.remove("hazardous");
      }, typingSpeed);
      setTimeout(type, typingSpeed);
    } else {
      isReversing = true;
      setTimeout(reverse, pauseTime);
    }
  }
}

function reverse() {
  if (reverseIndex >= 0) {
    typingElement.innerHTML = text.substring(0, reverseIndex);
    reverseIndex--;
    typingElement.classList.add("hazardous");
    setTimeout(() => {
      typingElement.classList.remove("hazardous");
    }, reverseSpeed);
    setTimeout(reverse, reverseSpeed);
  } else {
    isReversing = false;
    charIndex = 0;
    reverseIndex = text.length - 1;
    setTimeout(type, typingSpeed);
  }
}

type();

const paragraphElement = document.getElementById("glow-paragraph");


paragraphElement.classList.add("radiation-color");