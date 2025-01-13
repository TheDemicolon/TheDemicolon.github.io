const dynamicText = document.querySelector("h1 span");
const words = ["Charlie Zhang", "a Game Developer", "章乐易", "a 3D Artist", "a Student", "a Programmer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    if (!isDeleting && charIndex < currentWord.length) {

        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 75);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 300);
    }
}
typeEffect();