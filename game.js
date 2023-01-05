const gridcontainer = document.querySelector(".grid-container");

function createGrid(amount) {
  let i = 1;
  let j = 1;
  while (j <= amount) {
    const div = document.createElement("div");
    div.classList.add("row");
    while (i <= amount) {
      const divchild = document.createElement("div");
      divchild.classList.add("grid");
      div.appendChild(divchild);
      i++;
    }
    i = 1;
    gridcontainer.appendChild(div);
    j++;
  }
}

function changeBackground(e) {
  this.classList.add("painted");
  e.stopPropagation();
}

function clearBackground() {
  const squares = document.getElementsByClassName("grid");
  for (let x = 0; x < squares.length; x++) {
    squares[x].classList.remove("painted");
  }
}

createGrid(20);

const squares = document.getElementsByClassName("grid");
for (let x = 0; x < squares.length; x++) {
  squares[x].addEventListener("mouseover", changeBackground);
}

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearBackground);
