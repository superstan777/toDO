const input = document.getElementById("userInput")
const button = document.getElementById("add")
const ul = document.querySelector("ul")
let li = document.getElementsByTagName("li")

function inputLength() {
    return input.value.length;
}

const addElement = () => {

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
    input.value = ""

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("-"));
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete")
    }
}

button.onclick = () => {
    if (inputLength() > 0) {
        addElement();
    }
}

const addListAfterKeypress = (event) => {
    if (inputLength() > 0 && event.which === 13) {
        addElement();
    }
}

input.addEventListener("keypress", addListAfterKeypress);