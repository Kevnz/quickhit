const getItemsFromStorage = () => {
  const items = localStorage.getItem("items");

  if (items === null) return [];
  return JSON.parse(items);
};

const listItems = () => {
  const form = document.querySelector("form");
  form.innerHTML = "";
  const items = getItemsFromStorage();
  items.forEach(item => {
    form.appendChild(addItem(item));
  });
};

const saveItemToStorage = item => {
  let itemsFromStorage = localStorage.getItem("items");

  if (itemsFromStorage === null) {
    itemsFromStorage = "[]";
  }
  const items = JSON.parse(itemsFromStorage);

  items.push(item);

  localStorage.setItem("items", JSON.stringify(items));
  return items;
};

const updateItemInStorage = item => {
  let itemsFromStorage = localStorage.getItem("items");

  if (itemsFromStorage === null) {
    itemsFromStorage = "[]";
  }
  const items = JSON.parse(itemsFromStorage);

  const todos = items.reduce((acc, cur, i) => {
    acc[cur.id] = cur;
    return acc;
  }, {});

  todos[item.id] = item;
  const itemsToSave = Object.keys(todos).map(td => {
    return todos[td];
  });
  localStorage.setItem("items", JSON.stringify(itemsToSave));
  //listItems();
};

const addItem = item => {
  const template = document.querySelector("#todo-template");
  const clone = document.importNode(template.content, true);
  const container = clone.querySelector("div");
  const label = clone.querySelector("label");
  const check = clone.querySelector("input");
  label.innerHTML = item.text;
  label.setAttribute("for", item.id);
  item.isDone ? check.setAttribute("checked", "checked") : null;
  check.setAttribute("name", item.id);
  check.setAttribute("id", item.id);

  check.addEventListener("change", e => {
    if (check.checked) {
      item.isDone = true;
      updateItemInStorage(item);
    }
  });

  if (item.isDone) {
    container.classList.add("hidden");
  }
  return clone;
};

const setup = () => {
  listItems();
  const input = document.getElementById("task");
  input.addEventListener("keypress", e => {
    if (event.keyCode !== 13) return;
    const text = input.value.trim();
    if (text.length === 0 || text === "") return;
    saveItemToStorage({
      id: Date.now(),
      text,
      isDone: false
    });
    input.value = "";
    listItems();
  });
  const toggle = document.querySelector("#toggle1");

  toggle.addEventListener("change", e => {
    const f = document.querySelector("form");
    if (toggle.checked) {
      f.classList.add("hide");
    } else {
      f.classList.remove("hide");
    }
  });
};
document.addEventListener("DOMContentLoaded", setup);
