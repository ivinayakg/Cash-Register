var btn = document.querySelector(".btn");
var btn1 = document.querySelector(".btn1");
var input = document.querySelector("#input-txt");
var input2 = document.querySelector("#input2-txt");
var output = document.getElementsByClassName("output");
var validate = document.querySelector(".validate");

var notes = [2000, 500, 100, 20, 10, 5, 1];

validate.style.opacity = "0%";

const changeHandler = () => {
  var value = input.value;
  if (value === 0 || value === "") {
    input2.disabled = true;
  } else {
    input2.disabled = false;
  }
};

const changeHandler1 = () => {
  var bill = parseInt(input.value);
  var cash = parseInt(input2.value);
  console.log(cash > bill);
  console.log(cash);
  if (cash < bill) {
    validate.style.opacity = "100%";
  } else {
    validate.style.opacity = "0%";
  }
  return 0;
};

const valueReset = () => {
  input.value = 0;
  input2.value = 0;
  for (var i = 0; i < 7; i++) {
    output[i].innerText = 0;
  }
};

const onClickHandler = () => {
  var bill = input.value;
  var cash = input2.value;
  var balance = cash - bill;

  //   console.log(bill, cash, balance);

  notes.map((note, index) => {
    var t = true;
    while (t) {
      if (note <= balance) {
        balance -= note;
        output[index].innerText = parseInt(output[index].innerText) + 1;
      } else {
        t = false;
      }
    }
  });

  //   setTimeout(valueReset, 3000);
};

btn.addEventListener("click", onClickHandler);
btn1.addEventListener("click", valueReset);
input.addEventListener("change", changeHandler);
input2.addEventListener("change", changeHandler1);
