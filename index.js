let textAreaContent = document.querySelector("textarea");
let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");
let saveTextFileButton = document.getElementById("save-text-file");

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
            textAreaWords[i] = textAreaWords[i].charAt(0).toUpperCase() + textAreaWords[i].slice(1).toLowerCase();
        }
        textAreaContent.value = textAreaWords.join(" ");
    } else {
        textAreaContent.value = textAreaContent.value.charAt(0).toUpperCase() + textAreaContent.value.slice(1).toLowerCase();
    }
});

sentenceCaseButton.addEventListener("click", function() {
    if(textAreaContent.value.includes(". ")) {
        let textAreaWords = textAreaContent.value.split(". ");
        for (let i = 0; i < textAreaWords.length; i++) {
            textAreaWords[i] = textAreaWords[i].charAt(0).toUpperCase() + textAreaWords[i].slice(1).toLowerCase();
        }
        textAreaContent.value = textAreaWords.join(". ");
    }
});

saveTextFileButton.addEventListener("click", function(fleName,text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', fleName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    // Start file download.
    download("hello.txt","This is the content of my file :)");
});