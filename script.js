const container = document.querySelector("#container");

const btn = document.querySelector("#btn");
btn.addEventListener("click", butn);

let baseside = 16;

function createGrid(num) {
  for (i = 1; i <= num; i++) {
    let row = document.createElement("div");
    row.classList.add("grid-row");
    container.appendChild(row);

    for (x = 1; x <= num; x++) {
      let square = document.createElement("div");
      square.classList.add("grid-square");
      row.appendChild(square);
    }
  }
}

document.getElementById("container").addEventListener("mouseover", (e) => {
  if (e.target.className === "grid-square") {
    e.target.style.backgroundColor = "#65b98c";
  }
});

createGrid(baseside);
function parsePrompt() {
  let userInput = prompt(
    "Enter the amount of squares desired on each side of the new gird "
  );

  if (isNaN(userInput) || userInput > 100) {
    alert("Please enter a number Below 100!");
    return parsePrompt();
  } else {
    return userInput;
  }
}
function clearGrid() {
  let y = 0;
  createGrid(y);
}
function butn() {
  let askForSize = parsePrompt();
  container.innerHTML = "";
  createGrid(askForSize);
}
function clearGrid() {
  const gridDiv = document.querySelectorAll(".gridDiv");

  for (const div of gridDiv) {
    div.remove();
  }
}
