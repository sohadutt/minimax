const grid = {
  x1: 0, y1: 0, z1: 0,
  x2: 0, y2: 0, z2: 0,
  x3: 0, y3: 0, z3: 0
};

let currentPlayer = 1;
const gridEl = document.getElementById("grid");
const statusEl = document.getElementById("status");

function symbol(val) {
  return val === 1 ? "X" : val === -1 ? "O" : "";
}

function render() {
  gridEl.innerHTML = "";
  for (let key in grid) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.key = key;
    cell.textContent = symbol(grid[key]);
    cell.onclick = () => makeMove(key);
    gridEl.appendChild(cell);
  }

  const result = checkWinner();
  if (result) {
    statusEl.textContent = result === "tie" ? "It's a tie!" : `Winner: ${result}`;
  } else {
    statusEl.textContent = `Current Player: ${currentPlayer === 1 ? "X" : "O"}`;
  }
}

function makeMove(key) {
  if (grid[key] !== 0 || checkWinner()) return;
  grid[key] = currentPlayer;
  currentPlayer *= -1;
  render();
}

function checkWinner() {
  const lines = [
    ["x1", "y1", "z1"],
    ["x2", "y2", "z2"],
    ["x3", "y3", "z3"],

    ["x1", "x2", "x3"],
    ["y1", "y2", "y3"],
    ["z1", "z2", "z3"],

    ["x1", "y2", "z3"],
    ["z1", "y2", "x3"]
  ];

  for (let line of lines) {
    const sum = grid[line[0]] + grid[line[1]] + grid[line[2]];
    if (sum === 3) return "X";
    if (sum === -3) return "O";
  }

  if (Object.values(grid).every(val => val !== 0)) return "tie";

  return null;
}

function resetGame() {
  for (let key in grid) grid[key] = 0;
  currentPlayer = 1;
  render();
}

document.getElementById("reset").onclick = resetGame;
render(); 