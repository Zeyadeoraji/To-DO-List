const inputBoxEL = document.getElementById("inputBox");
const btnEL = document.getElementById("btn");
const listContainer = document.querySelector(".list-container");
addTask();
function addTask() {
  btnEL.addEventListener("click", (e) => {
    console.log("clicked");
    if (inputBoxEL.value === "") {
      console.log(inputBoxEL.value);
      alert("Write Someting first");
    } else {
      const task = document.createElement("li");
      task.innerHTML = inputBoxEL.value;
      listContainer.appendChild(task);
      const spanEl = document.createElement("span");
      spanEl.innerHTML = "\u00d7";
      task.appendChild(spanEl);
    }
    inputBoxEL.value = "";
    saveData();
  });
}
listContainer.addEventListener("click", (e) => {
  console.log(listContainer.tagName);
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function ShowData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
ShowData();
