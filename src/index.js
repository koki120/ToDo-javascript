import "./styles.css";

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  if (inputText === "") return;
  document.getElementById("add-text").value = "";
  createIncompletelist(inputText);
};

const createIncompletelist = (todoText) => {
  const incompletetLi = document.createElement("li");

  const incompleteDiv = document.createElement("div");
  incompleteDiv.className = "list-row";

  const incompleteP = document.createElement("p");
  incompleteP.innerText = todoText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "complete";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteArea(completeButton.parentNode.parentNode);

    const completeLi = document.createElement("li");

    const completeDiv = document.createElement("div");
    completeDiv.className = "list-row";

    const completeP = document.createElement("p");
    completeP.innerText = todoText;

    const backButton = document.createElement("button");
    backButton.innerText = "back";
    backButton.addEventListener("click", () => {
      document
        .getElementById("complete-text")
        .removeChild(backButton.parentNode.parentNode);
      createIncompletelist(todoText);
    });

    completeLi.appendChild(completeDiv);
    completeDiv.appendChild(completeP);
    completeDiv.appendChild(backButton);
    document.getElementById("complete-text").appendChild(completeLi);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteArea(deleteButton.parentNode.parentNode);
  });

  incompletetLi.appendChild(incompleteDiv);
  incompleteDiv.appendChild(incompleteP);
  incompleteDiv.appendChild(completeButton);
  incompleteDiv.appendChild(deleteButton);
  document.getElementById("incomplete-text").appendChild(incompletetLi);
};

const deleteFromIncompleteArea = (deleteTarget) => {
  document.getElementById("incomplete-text").removeChild(deleteTarget);
};
