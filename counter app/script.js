let count = 0;
const countEl = document.getElementById("count-el");
const button = document.getElementById("increment-button");
const saveEl = document.getElementById("save");

const buttonReset = document.getElementById("reset-button");

button.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});

buttonReset.addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;
});

function save() {
  if (saveEl.textContent === "Previous Entries:") {
    saveEl.textContent += ` ${count}`;
  } else {
    saveEl.textContent += ` - ${count}`;
  }
}

function clearString() {
  saveEl.textContent = "Previous Entries:";
}
