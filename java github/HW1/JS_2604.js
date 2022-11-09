// task 6+++++++++++++++++++++++++++++++++++++++++++++++++++++

let addBoreder = Array.from(listOfLinks.getElementsByTagName("a"));
for (let i of addBoreder) {
  if (i.getAttribute("href").startsWith("http")) {
    i.style.borderBottom = "1px dashed #324757";
  }
}

// task 7+++++++++++++++++++++++++++++++++++++++++++++++++++++

let books = Array.from(list.getElementsByTagName("li"));

function clear() {
  books.map((x) => (x.style.backgroundColor = ""));
}
function shiftSelect(e) {
  let field = books.filter((x) => x.style.backgroundColor != "");
  let lastElem = books.indexOf(field[field.length - 1]);
  let targetElem = books.indexOf(e.target);

  if (lastElem < targetElem) {
    for (elem = lastElem; elem <= targetElem; elem++) {
      books[elem].style.backgroundColor = "#324757";
    }
  } else {
    for (elem = lastElem; elem >= targetElem; elem--) {
      books[elem].style.backgroundColor = "#324757";
    }
  }
}

for (let book of books) {
  book.addEventListener("click", (e) => {
    if (e.ctrlKey) e.target.style.backgroundColor = "#324757";
    else if (e.shiftKey) shiftSelect(e);
    else {
      clear();
      e.target.style.backgroundColor = "#324757";
    }
  });
}
document.addEventListener("click", (e) => {
  if (e.target.localName != "li" && e.target.id != "list") clear();
});

["keyup", "keydown"].forEach((event) => {
  window.addEventListener(event, (e) => {
    document.onselectstart = () => !(e.key == "Shift" && e.shiftKey);
  });
});

// task 8+++++++++++++++++++++++++++++++++++++++++++++++++++++

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && (e.code == "KeyS" || e.code == "KeyE")) {
    e.preventDefault();
    if (e.code == "KeyE") {
      if (!editText.style.display) {
        editText.style.display = "block";
        saveText.style.display = "none";
        editText.value = saveText.textContent;
      }
    } else {
      if (editText.style.display) {
        editText.style.display = "none";
        saveText.style.display = "block";
        saveText.textContent = editText.value;
      }
    }
  }
});

// task 9+++++++++++++++++++++++++++++++++++++++++++++++++++++

let tittles = Array.from(tab.getElementsByTagName("th"));
let sortedTr = Array.from(tab.getElementsByTagName("tr")).slice(1);
let numbers = /^\d+$/;
for (let index in tittles) {
  tittles[index].addEventListener("click", () => {
    sortedTr.sort((rowA, rowB) => {
      if (
        numbers.test(rowA.cells[index].textContent) &&
        numbers.test(rowB.cells[index].textContent)
      ) {
        return rowA.cells[index].textContent - rowB.cells[index].textContent;
      }
      return rowA.cells[index].textContent.localeCompare(
        rowB.cells[index].textContent
      );
    });
    for (let i = 0; i < sortedTr.length; i++) tab.appendChild(sortedTr[i]);
  });
}
