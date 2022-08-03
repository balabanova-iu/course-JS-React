window.onload = function () {
  const items = document.querySelectorAll(".item"),
    input = document.querySelector(".input");
  let command = "";

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const value = item.innerHTML;
      if (value == "C") {
        command = "";
      } else if (value == "=") {
        command = eval(command);
      } else {
        command += value;
      }
      setInputValue(command);
    });
  });

  function setInputValue(str) {
    input.value = str;
  }

  input.addEventListener("input", (event) => {
    command = input.value;
  });
  document.addEventListener("keypress", (event) => {
    if (event.code == "Enter") {
      command = eval(command);
      setInputValue(command);
    }
  });
};
