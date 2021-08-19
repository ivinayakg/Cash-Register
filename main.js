var btn = document.querySelector(".btn");
var btn1 = document.querySelector(".btn1");
var input = document.querySelector("#input-txt");
var input2 = document.querySelector("#input2-txt");
var output = document.getElementsByClassName("output");

var notes = [2000, 500, 100, 20, 10, 5, 1];

input2.disabled = true;

const changeHandler = () => {
  var value = input.value;
  if (value === 0 || value === "") {
    input2.disabled = true;
  } else {
    input2.disabled = false;
  }
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
