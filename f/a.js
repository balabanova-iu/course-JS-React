// const someString = "This is some strange string";

// function reverse(str) {
//   return str.split("").reverse().join("");
// }
// // console.log(reverse(someString));

// const baseCurrencies = ["USD", "EUR"];
// const additionalCurrencies = ["UAH", "RUB", "CNY"];
// const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

// function availableCurr(arr, missingCurr) {
//   let x = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== missingCurr) {
//       x += `${arr[i]} \n`;
//     }
//   }
//   return `Доступные валюты:\n${x}`;
// }
// console.log(availableCurr(allCurrencies, "CNY"));

// function availableCurr(arr, missingCurr) {
//   let str = "";
//   arr.length === 0
//     ? (str = "Нет доступных валют")
//     : (str = "Доступные валюты:\n");

//   arr.forEach(function (curr, i) {
//     if (curr !== missingCurr) {
//       str += `${curr}\n`;
//     }
//   });
//   return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"));

// const shoppingMallData = {
//   shops: [
//     {
//       width: 10,
//       length: 5,
//     },
//     {
//       width: 15,
//       length: 7,
//     },
//     {
//       width: 20,
//       length: 5,
//     },
//     {
//       width: 8,
//       length: 10,
//     },
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000,
// };

// function isBudgetEnough(data) {
//   let square = 0;
//   let volume = 0;
//   data.shops.forEach(function (shop) {
//     square += shop.width * shop.length;
//   });
//   volume = data.height * square;
//   if (volume * data.moneyPer1m3 < data.budget) {
//     return "Бюджета достаточно";
//   } else {
//     return "Бюджета недостаточно";
//   }
// }

// console.log(isBudgetEnough(shoppingMallData));

// const students = [
//   "Peter",
//   "Andrew",
//   "Ann",
//   "Mark",
//   "Josh",
//   "Sandra",
//   "Cris",
//   "Bernard",
//   "Takesi",
//   "Sam",
// ];

// function sortStudentsByGroups(arr) {
//   arr.sort();
//   let firstGroups = [];
//   let secondGroups = [];
//   let thirdGroups = [];
//   let otherGroups = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i < 3) {
//       firstGroups.push(arr[i]);
//     }
//     if (i >= 3 && i <= 5) {
//       secondGroups.push(arr[i]);
//     }
//     if (i >= 6 && i <= 8) {
//       thirdGroups.push(arr[i]);
//     }
//     if (i >= 9) {
//       otherGroups.push(arr[i]);
//     }
//   }
//   let newArr = [];
//   newArr.push(
//     firstGroups,
//     secondGroups,
//     thirdGroups,
//     `Оставшиеся студенты: ${otherGroups.length ? otherGroups.join(", ") : "-"}`
//   );
//   return newArr;
// }
// console.log(sortStudentsByGroups(students));

// const restorantData = {
//   menu: [
//     {
//       name: "Salad Caesar",
//       price: "14$",
//     },
//     {
//       name: "Pizza Diavola",
//       price: "9$",
//     },
//     {
//       name: "Beefsteak",
//       price: "17$",
//     },
//     {
//       name: "Napoleon",
//       price: "7$",
//     },
//   ],
//   waitors: [
//     { name: "Alice", age: 22 },
//     { name: "John", age: 24 },
//   ],
//   averageLunchPrice: "20$",
//   openNow: true,
// };

// function isOpen(prop) {
//   let answer = "";
//   prop ? (answer = "Открыто") : (answer = "Закрыто");

//   return anwser;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//   if (
//     +fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) <
//     +average.slice(0, -1)
//   ) {
//     return "Цена ниже средней";
//   } else {
//     return "Цена выше средней";
//   }
// }

// console.log(
//   isAverageLunchPriceTrue(
//     restorantData.menu[0],
//     restorantData.menu[1],
//     restorantData.averageLunchPrice
//   )
// );

// function transferWaitors(data) {
//   const copy = Object.assign({}, data);

//   copy.waitors = [{ name: "Mike", age: 32 }];
//   return copy;
// }

// transferWaitors(restorantData);

// function factorial(n) {
//   if (!Number.isInteger(n)) {
//     return "Совсем не то";
//   } else if (n <= 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(4));

function amountOfPages(summary) {
  let result = "";
  let n = 0;
  for (let i = 1; i <= summary; i++) {
    result += i;
    if (result.length === summary) {
      n = i;
      break;
    }
  }
  return n;
}
console.log(amountOfPages(25));
