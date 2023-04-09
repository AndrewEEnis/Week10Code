let id = 0;

document.getElementById("add").addEventListener("click", () => {
  let table = document.getElementById("list");
  let row = table.insertRow(1);
  row.setAttribute("id", `item-${id}`);
  row.insertCell(0).innerHTML = document.getElementById("first-name").value;
  row.insertCell(1).innerHTML = document.getElementById("last-name").value;
  row.insertCell(2).innerHTML = document.getElementById("drummer-group").value;
  row.insertCell(3).innerHTML = document.getElementById("drum-brand").value;
  row.insertCell(4).innerHTML = document.getElementById("cymbal-brand").value;
  row.insertCell(5).innerHTML = document.getElementById("stick-brand").value;
  let actions = row.insertCell(6);
  actions.appendChild(createDeleteButton(id++));
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("drummer-group").value = "";
  document.getElementById("drum-brand").value = "";
  document.getElementById("cymbal-brand").value = "";
  document.getElementById("stick-brand").value = "";
});

function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-warning";
  btn.id = id;
  btn.innerHTML = "Delete";
  btn.onclick = () => {
    console.log(`Deleting row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}