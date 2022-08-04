window.onload = function () {
  const items = document.querySelectorAll(".item"),
    input = document.querySelector(".input"),
    result = document.querySelector(".result");
  let command = "";
  let results = [];

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const value = item.innerHTML;
      if (value == "C") {
        command = "";
      } else if (value == "=") {
        let tmp = command;
        command = eval(command);
        results.push(`${tmp} = ${command}`);
      } else {
        command += value;
      }
      setInputValue(command);
      const tmp = makeList(results);
      displayList(tmp);
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
      let tmp = command;
      command = eval(command);
      results.push(`${tmp} = ${command}`);
      setInputValue(command);
      makeListResuls(results);
    }
  });

  function makeListResuls(str) {
    const template = `<li>${str}</li>`;
    return template;
  }

  // function makeList() {
  //   // let arr = [];
  //   // for (let i = 0; i < results.length; i++) {
  //   //   let template = makeListResuls(results[i]);
  //   //   arr.push(template);
  //   // }
  //   // const str = arr.join("");
  //   let template = `<ul>${str}</ul>`;
  //   return template;
  // }

  function makeList() {
    let template = `<ul>${results
      .map((item) => {
        return `<li>${item}</li>`;
      })
      .join("")}</ul>`;
    return template;
  }

  function displayList(template) {
    result.innerHTML = template;
  }
};
