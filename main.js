const heroBtn = document.querySelector(".Hero_btn");
const inputMain = document.querySelector(".mainInput");
const addBtn = document.querySelector(".addBtn");

heroBtn.addEventListener("click", () => {
  heroBtn.style.display = "none";

  setTimeout(() => {
    inputMain.style.display = "block";
    addBtn.style.display = "block";
    inputMain.focus();
  }, 250);
});

inputMain.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && inputMain.value != "") {
    addBtn.click();
  }
});

const card = document.querySelector(".card");
const tasks = document.querySelector(".tasks");
const main = document.querySelector(".main");

addBtn.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.className = "card";

  const pin = document.createElement("img");
  pin.className = "decorate_nail";
  pin.src = "Images/nail.png";

  const newTask = document.createElement("p");
  newTask.className = "tasks";
  newTask.textContent = inputMain.value.trim();

  const delete_btn = document.createElement('img');
  delete_btn.className = 'delete_btn';
  delete_btn.src = 'Images/delete.png'

  newCard.appendChild(newTask);
  newCard.appendChild(pin);
  newCard.appendChild(delete_btn);

  main.appendChild(newCard);

  delete_btn.addEventListener('click', () => {
    newCard.remove();
});

  newCard.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  inputMain.value = "";
});

// const delete_btn = document.querySelector('.delete_btn');

// delete_btn.addEventListener('click', () => {
//     card.removeChild();
// });
