const numberBtns = document.querySelectorAll('.number');
const signBtns = document.querySelectorAll('.sign');
const expression = document.querySelector('.expression');
const resultInp = document.querySelector('.result');
const resultBtn = document.querySelector('.result-btn');
let result = null;
const signs = ["+", "-", "*", "/"];

for (let btn of numberBtns) {
  btn.addEventListener('click', function () {
    const value = this.textContent;
    expression.value += value;
  });
}

// expression.addEventListener('keyup', function () {
// let str = expression.value.replaceAll(/[a-zA-Z_~`\?><;:'"${}[\]]/g, '');
// expression.value = str.replaceAll(/(\D)\1+/g, "$1");
// });

for (let sign of signBtns) {
  sign.addEventListener('click', function () {
    const value = this.textContent;
    let expVal = expression.value.replaceAll(/(\D)\1+/g, "$1");
    let lastCharStr = expVal[expVal.length - 1];
    if (signs.includes(lastCharStr)) expression.value = expVal.substring(0, expVal.length - 1) + value;
    else expression.value = expVal + value;
  })
}

function showResult() {
  // let expVal = expression.value;
  // if (eval(expVal + ')')) {
  //   expression.value += ')';
  //   resultInp.textContent = Math.round((eval(expression.value)) * 100) / 100;
  // }
  try { resultInp.textContent = Math.round((eval(expression.value)) * 100) / 100; }
  catch { alert('Некорректное выражение'); }
}

function clearAll() {
  resultInp.textContent = 0;
  expression.value = '';
}

function deleteLastSymbol() {
  expression.value = expression.value.substring(0, expression.value.length - 1);
}

function negative() {
  let lastSymbol = expression.value[expression.value.length - 1];
  if (signs.includes(lastSymbol)) expression.value += '(-'
}

    // let str = expVal.replaceAll(/[a-zA-Z_~`\?><;:'"${}[\]]/g, '');