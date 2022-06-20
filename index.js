const personName = ["Jason", "Uzair", "Fatima", "Ricardo", "Dill", "Doe"];

function showItems(Names) {
  document.querySelector("#Output").innerHTML = "";
  Names.forEach((Name) => {
    document.querySelector("#Output").innerHTML += `
      <li>${Name}</li>
    `;
  });
}

showItems(personName);

function addToArray() {
  let enteredName = document.querySelector("#AddInput").value;
  if (enteredName != "") {
    personName.push(enteredName);
    showItems(personName);
  } else {
    showItems(personName);
    alert("Please enter a valid input");
  }
}

function searchArray() {
  const text = document.querySelector("#SearchInput").value;
  if (text != "") {
    const theirName = personName.find((name) => name.includes(text));
    document.querySelector("#Output").innerHTML = `<li>${
      theirName ? theirName : "No matches"
    }</li>`;
  } else {
    showItems(personName);
    alert("Please enter a valid input");
  }
}
