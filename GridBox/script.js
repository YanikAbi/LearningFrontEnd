const container = document.querySelector("#grid-container");

const squareSize = 16;
const gridSize = squareSize * squareSize;

for (let i = 0; i < gridSize; i++) {
  const square = document.createElement("div");
  square.classList.add("grid-square");
  container.appendChild(square);

  square.addEventListener("mouseover", () => {
    square.classList.add("active");
  });
}
