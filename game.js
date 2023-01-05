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

  const squares = document.getElementsByClassName("grid");
  for (let x = 0; x < squares.length; x++) {
    squares[x].addEventListener("mouseover", changeBackground);
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

function changeSize() {
  let size = prompt("Input the size of the grid from 1 to 100");
  if (size > 100) {
    size = 100;
  }
  const rows = document.querySelectorAll(".row");
  //const grid = document.getElementsByClassName("grid");
  rows.forEach((row) => {
    row.remove();
  });
  createGrid(size);
}

createGrid(16);

//const squares = document.getElementsByClassName("grid");
//for (let x = 0; x < squares.length; x++) {
//squares[x].addEventListener("mouseover", changeBackground);
//}

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearBackground);

const sizeButton = document.querySelector(".size-button");
sizeButton.addEventListener("click", changeSize);
