/* eslint-disable no-alert */
/* eslint-disable no-return-assign */
/* eslint-disable radix */
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
    return alert('Please enter a value less than 36');
  }

  iterateFibonacci(fibonacciInput.value);
  recurseFibonacci(fibonacciInput.value);
  fibonacciInput.value = '';
});

fibonacciInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (fibonacciInput.value > 35) {
      fibonacciIterationPara.textContent = '';
      fibonacciRecursionPara.textContent = '';
      return alert('Please enter a value less than 36');
    }

    iterateFibonacci(fibonacciInput.value);
    recurseFibonacci(fibonacciInput.value);
    fibonacciInput.value = '';
  }
});

// Merge Functions

const mergeInput = document.getElementById('merge-input');
const mergeBtn = document.getElementById('merge-btn');
const mergePara = document.getElementById('merge-para');

const merge = (left, right) => {
  const resultArr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      resultArr.push(left.shift());
    } else {
      resultArr.push(right.shift());
    }
  }

  return mergePara.textContent = [...resultArr, ...left, ...right];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
};

mergeInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const parsedArr = [...mergeInput.value.split(',')].map((el) => Number(el));
    mergeSort(parsedArr);
  }
});

mergeBtn.addEventListener('click', () => {
  const parsedArr = [...mergeInput.value.split(',')].map((el) => Number(el));
  mergeSort(parsedArr);
});
