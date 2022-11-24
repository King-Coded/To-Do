let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut() {
        li.classList.toogle("done");
    }

    li.addEventListener("click", crossOut);

    function deleteListItem() {
        li.classList.add("delete");
    }

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
}

function inputLength() {
    return input.value.length;
}

function addEventAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addEventAfterKeypress() {
    if (inputLength() > 0) {
        createListElement();
    }
}

enterButton.addEventListener("click", addEventAfterClick);
input.addEventListener("keypress", addEventAfterKeypress);