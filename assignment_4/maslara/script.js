var numRow = 4;
var numCol = 4;
var rowPosition;
var colPosition;
var up;
var down;
var left;
var right;

// creating the table
function init() {
  rowPosition = 1;
  colPosition = 0;
  createTable(numRow, numCol);
  buttons();
  selectedCell();
}

function createTable(numRow, numCol) {
  var table = document.createElement("table");
  var header = table.createTHead();
  var headerRow = header.insertRow(0);

  table.border = "1";

  for (let i = 0; i < numCol; i++) {
    var cell = headerRow.insertCell(i);
    cell.textContent = "Header " + (i + 1);
  }

  for (let i = 0; i < numRow; i++) {
    var row = table.insertRow();
    for (let j = 0; j < numCol; j++) {
      var cell = row.insertCell(j);
      cell.textContent = "(" + (i + 1) + ", " + (j + 1) + ")";
    }
  }

  document.body.appendChild(table);
}

var buttons = function() {
  up = document.createElement("button");
  up.textContent = "Up";

  down = document.createElement("button");
  down.textContent = "Down";

  left = document.createElement("button");
  left.textContent = "Left";

  right = document.createElement("button");
  right.textContent = "Right";

  mark = document.createElement("button");
  mark.textContent = "Mark Cell";

  document.body.appendChild(up);
  document.body.appendChild(down);
  document.body.appendChild(left);
  document.body.appendChild(right);
  document.body.appendChild(mark);
};

function selectedCell() {
  var table = document.querySelector("table");
  var selected = table.rows[rowPosition].cells[colPosition];
  selected.style.border = "3px solid black";
}

init();

function clearCell() {
  var table = document.querySelector("table");
  var selected = table.rows[rowPosition].cells[colPosition];
  selected.style.border = "";
}

function markCell() {
  var table = document.querySelector("table");
  var selected = table.rows[rowPosition].cells[colPosition];
  selected.style.backgroundColor = "yellow";
}

up.addEventListener("click", function() {
  if (rowPosition != 1) {
    clearCell();
    rowPosition -= 1;
  }
  selectedCell();
});

down.addEventListener("click", function() {
  if (rowPosition != numRow) {
    clearCell();
    rowPosition += 1;
  }
  selectedCell();
});

left.addEventListener("click", function() {
  if (colPosition != 0) {
    clearCell();
    colPosition -= 1;
  }
  selectedCell();
});

right.addEventListener("click", function() {
  if (colPosition != numCol - 1) {
    clearCell();
    colPosition += 1;
  }
  selectedCell();
});

mark.addEventListener("click", function() {
  markCell();
});
