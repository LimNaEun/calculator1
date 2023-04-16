const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display input');
const buttons = calculator.querySelectorAll('button');

let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;

buttons.forEach(button => {
  button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === 'AC') {
      // All Clear 버튼을 누른 경우
      firstOperand = null;
      operator = null;
      secondOperand = null;
      result = null;
      display.value = '';
    } else if (buttonText === '+/-') {
      // 부호를 변경하는 버튼을 누른 경우
      if (display.value.startsWith('-')) {
        display.value = display.value.slice(1);
      } else {
        display.value = '-' + display.value;
      }
    } else if (buttonText === '%') {
      // 퍼센트를 계산하는 버튼을 누른 경우
      const value = parseFloat(display.value) / 100;
      display.value = value.toString();
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      // 연산자 버튼을 누른 경우
      firstOperand = parseFloat(display.value);
      operator = buttonText;
      display.value = '';
    } else if (buttonText === '=') {
      // 등호 버튼을 누른 경우
      secondOperand = parseFloat(display.value);
      switch (operator) {
        case '+':
          result = firstOperand + secondOperand;
          break;
        case '-':
          result = firstOperand - secondOperand;
          break;
        case '*':
          result = firstOperand * secondOperand;
          break;
        case '/':
          result = firstOperand / secondOperand;
          break;
      }
      display.value = result.toString();
    } else {
      // 숫자 버튼을 누른 경우
      display.value += buttonText;
    }
  });
});
