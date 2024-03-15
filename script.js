const userInputNum = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
// Function to check telephone number validity

const phoneNumValidator = () => {
  const regex =
    /^1?(\s*[-.]?\s*)?(\(\d{3}\)|\d{3})(\s*[-.]?\s*)?\d{3}(\s*[-.]?\s*)?\d{4}$/;

  return regex.test(userInputNum.value);
};

// Event listener for the check button

checkBtn.addEventListener("click", () => {
  const userInputValue = userInputNum.value.trim();
  console.log(userInputNum.value, "userInputValue", "here");

  if (!userInputValue) {
    return alert("Please provide a phone number");
  } else if (phoneNumValidator(userInputValue) === true) {
    return (result.innerText = `Valid US number: ${userInputNum.value}`);
  } else {
    return (result.innerText = `Invalid US number: ${userInputNum.value}`);
  }
});

// event listener for the clear button
clearBtn.addEventListener("click", () => {
  userInputNum.value = "";
  result.innerText = "";
});
