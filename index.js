let textAreaContent = document.querySelector("textarea");
let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");

upperCaseButton.addEventListener("click", function() {
    textAreaContent.value = textAreaContent.value.toUpperCase();
});

lowerCaseButton.addEventListener("click", function() {
    textAreaContent.value = textAreaContent.value.toLowerCase();
});
properCaseButton.addEventListener("click", function() {
    if(textAreaContent.value.includes(" ")) {
        let textAreaWords = textAreaContent.value.split(" ");
        for (let i = 0; i < textAreaWords.length; i++) {
            textAreaWords[i] = textAreaWords[i].charAt(0).toUpperCase() + textAreaWords[i].slice(1);
        }
        textAreaContent.value = textAreaWords.join(" ");
    }
});