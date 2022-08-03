window.onload = function () {
  const buttonAdd = document.querySelector(".button_add"),
    fieldTitle = document.querySelector(".field_title"),
    fieldDescription = document.querySelector(".field_description"),
    sectionRight = document.querySelector(".section_right"),
    items = [],
    a = [];

  function getInputValues() {
    let values = {
      title: fieldTitle.value,
      description: fieldDescription.value,
    };
    return values;
  }

  function resetInputValues() {
    fieldTitle.value = "";
    fieldDescription.value = "";
  }

  function makeListItem(number, title) {
    const template = `
<div class="list_item">
  <div class="list_item_title">
    <span>#${number}</span>
    <span>${title}</span>
  </div>
  <button onclick="deleteButton(${number})" class="button_delete">X</button>
</div>`;

    return template;
  }

  function makeList() {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
      let template = makeListItem(i + 1, items[i].title);
      arr.push(template);
    }
    const str = arr.join("");
    return str;
  }

  function displayList(template) {
    sectionRight.innerHTML = template;
  }

  buttonAdd.addEventListener("click", (event) => {
    const values = getInputValues();
    resetInputValues();
    items.push(values);
    const tmp = makeList(items);
    displayList(tmp);
  });

  function deleteButton(id) {
    items.splice(id - 1, 1);
    const tmp = makeList(items);
    displayList(tmp);
  }
  window.deleteButton = deleteButton;

  // event.target.dataset.id
};
