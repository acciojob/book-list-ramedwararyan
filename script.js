//your JS code here. If required.
document.getElementById("submit").addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  if (title === "" || author === "" || isbn === "") {
    alert("Please fill all fields!");
    return;
  }

  const list = document.getElementById("book-list");

  // create a new row
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

  list.appendChild(row);

  // clear input fields
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
});

// Event delegation for delete button
document.getElementById("book-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove(); // remove the row
  }
});
