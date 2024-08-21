const inputText = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list");
const likeBtns = document.querySelectorAll(".favorite");

const addItem = () => {
  if (inputText.value.trim() === "") {
    inputText.value = "";
    inputText.focus();
    return;
  }

  //li
  const li = document.createElement("li");

  //like
  const like = document.createElement("span");
  const likeIcon = document.createElement("i");
  like.className = "like";
  likeIcon.className = "material-icons favorite";
  likeIcon.innerHTML = "favorite_border";

  //item
  const item = document.createElement("span");
  item.className = "item";
  item.innerText = inputText.value;

  //manage
  const manage = document.createElement("span");
  manage.className = "manage";
  const checkIcon = document.createElement("i");
  const clearIcon = document.createElement("i");
  checkIcon.className = "material-icons check";
  checkIcon.innerText = "check";
  clearIcon.className = "material-icons clear";
  clearIcon.innerText = "clear";

  //event

  likeIcon.addEventListener("click", (e) => {
    const target = e.target;
    const text =
      target.innerText === "favorite" ? "favorite_border" : "favorite";

    target.innerText = text;
  });

  checkIcon.addEventListener("click", (e) => {
    const target = e.target.parentElement.parentElement;
    target.className = "done";
  });

  clearIcon.addEventListener("click", (e) => {
    const target = e.target.parentElement.parentElement;
    list.removeChild(target);
  });

  list.appendChild(li);
  li.appendChild(like);
  like.appendChild(likeIcon);

  li.appendChild(item);

  li.appendChild(manage);
  manage.appendChild(checkIcon);
  manage.appendChild(clearIcon);

  inputText.value = "";
  inputText.focus();
};

//event
inputText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});

addButton.addEventListener("click", () => {
  addItem();
});
