/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const fibonacciInput = document.getElementById('fibonacci-input');
const fibonacciBtn = document.getElementById('fibonacci-btn');
const fibonacciIterationPara = document.getElementById('fibonacci-iteration-para');
const fibonacciRecursionPara = document.getElementById('fibonacci-recursion-para');

const iterateFibonacci = (val) => {
  const fibArrIteration = [0, 1];

  for (let i = 2; i < val; i++) {
    fibArrIteration.push(fibArrIteration[i - 1] + fibArrIteration[i - 2]);
  }
  fibonacciIterationPara.textContent = `[${fibArrIteration}]`;
};

const recurseFibonacci = (val, fibArray = [0, 1]) => {
  if (val <= 2) {
    // eslint-disable-next-line no-return-assign
    return fibonacciRecursionPara.textContent = `[${fibArray}]`;
  }
  return (recurseFibonacci(val - 1, [
    ...fibArray,
    fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2],
  ]));
};

fibonacciBtn.addEventListener('click', () => {
  if (fibonacciInput.value > 35) {
    fibonacciIterationPara.textContent = '';
    fibonacciRecursionPara.textContent = '';
    // eslint-disable-next-line no-alert
    return alert('Please enter a value less than 36');
  }

  iterateFibonacci(fibonacciInput.value);
  recurseFibonacci(fibonacciInput.value);
  fibonacciInput.value = '';
});

// eslint-disable-next-line consistent-return
fibonacciInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (fibonacciInput.value > 35) {
      fibonacciIterationPara.textContent = '';
      fibonacciRecursionPara.textContent = '';
      // eslint-disable-next-line no-alert
      return alert('Please enter a value less than 36');
    }

    iterateFibonacci(fibonacciInput.value);
    recurseFibonacci(fibonacciInput.value);
    fibonacciInput.value = '';
  }
});
