const check = document.querySelector("#convert-btn") as HTMLButtonElement;
const form = document.querySelector("#form") as HTMLFormElement;
const input = document.querySelector("#number") as HTMLInputElement;
const result = document.querySelector("#output") as HTMLDivElement;

const handleCheck = (e: Event) => {
  e.preventDefault();
  result.innerText = "";
  const checkNum = input.value;
  const numReversedArray = checkNum.split("").reverse();

  if (!checkNum) {
    result.innerText = "Please enter a valid number";
    return;
  } else if (Number.parseInt(checkNum, 10) < 0) {
    result.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (Number.parseInt(checkNum, 10) > 3999) {
    result.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  const romanNumerals = [
    ["I", "V", "X"],
    ["X", "L", "C"],
    ["C", "D", "M"],
    ["M"],
  ];

  numReversedArray.forEach((num, index) => {
    const [ones, fives, tens] = romanNumerals[index];

    if (num === "0") {
      return;
    } else if (num === "1") {
      result.insertAdjacentHTML("afterbegin", `${ones}`);
    } else if (num === "2") {
      result.insertAdjacentHTML("afterbegin", `${ones + ones}`);
    } else if (num === "3") {
      result.insertAdjacentHTML("afterbegin", `${ones + ones + ones}`);
    } else if (num === "4") {
      result.insertAdjacentHTML("afterbegin", `${ones + fives}`);
    } else if (num === "5") {
      result.insertAdjacentHTML("afterbegin", `${fives}`);
    } else if (num === "6") {
      result.insertAdjacentHTML("afterbegin", `${fives + ones}`);
    } else if (num === "7") {
      result.insertAdjacentHTML("afterbegin", `${fives + ones + ones}`);
    } else if (num === "8") {
      result.insertAdjacentHTML("afterbegin", `${fives + ones + ones + ones}`);
    } else if (num === "9") {
      result.insertAdjacentHTML("afterbegin", `${ones + tens}`);
    } else {
      alert("Please input a number");
      return;
    }
  });
};

form?.addEventListener("submit", handleCheck);
check?.addEventListener("click", handleCheck);
