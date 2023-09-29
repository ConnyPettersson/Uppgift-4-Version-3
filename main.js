console.log("main.js is loaded...");

const input = document.querySelector("#todoInput");
const list = document.querySelector("ul");
const button = document.querySelector("#addTodo");
const info = document.querySelector("small");
const completedInfo = document.querySelector("p");



let completedCount = 0;



button.addEventListener("click", function () {

    const text = input.value;

    if (text.length == 0) {
        info.innerText = "Write something";

        return;
    }
    else {
        info.innerText = "";
    }

    const item = document.createElement("li");
    list.appendChild(item);

    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    item.appendChild(itemLabel);

    itemLabel.addEventListener("click", function () {


        if (item.getAttribute("class") == "completed") {
            item.setAttribute("class", "");



            completedCount--;
        }
        else {
            item.setAttribute("class", "completed");



            completedCount++;
        }

        completedInfo.innerText = `${completedCount} completed`;

    })


})