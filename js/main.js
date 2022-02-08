let guessedWordCategory, guessedWordRandomPicked; 
let listRandomWords = [];
let attempts = 0;

const ListWords = [
    word1 = {
        nome: "cookie",
        categoria: "sweet - food"
    },
    word2 = {
        nome: "marshmellow",
        categoria: "sweet - food"
    },
    word3 = {
        nome: "cake",
        categoria: "sweet - food"
    }
]

function isChosenKey(key) {
    document.getElementById("key-" + key).disabled = true;
    if (attempts > 0) {
        changeKeyStyle("key-" + key);
        compareKeys(key);
        printKey();
    }

}

function  changeKeyStyle(key) {
    document.getElementById(key).style.background = "#C71585";
    document.getElementById(key).style.color = "#ffffff";
}


// Reload
let btnReset = document.querySelector("#btnReset")
btnReset.addEventListener("click", function () {
    location.reload();
});