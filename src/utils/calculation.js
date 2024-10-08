export const calculateEquation = (valueX, equation) => {
  const modifiedEquation = equation.replace(/(\d)(x)/g, "$1*$2");
  const replacedEquation = modifiedEquation.replace(/x/g, valueX);
  const splittedEquation = replacedEquation.split(/([+\-*/^])/).filter(Boolean);

  let acc = parseFloat(splittedEquation[0]);

  if (isNaN(acc)) return "";

  for (let i = 1; i < splittedEquation.length; i += 2) {
    const operator = splittedEquation[i];
    const nextValue = parseFloat(splittedEquation[i + 1]);

    if (isNaN(nextValue)) return "Invalid number";

    switch (operator) {
      case "+":
        acc += nextValue;
        break;
      case "-":
        acc -= nextValue;
        break;
      case "*":
        acc *= nextValue;
        break;
      case "/":
        if (nextValue === 0) return "Cannot divide by zero";
        acc /= nextValue;
        break;
      case "^":
        acc = Math.pow(acc, nextValue);
        break;
      default:
        return "Invalid operator";
    }
  }

  return acc;
};

export const determineChainOrder = (data) => {
  let chain = [];
  let inputFunction = 1;

  while (chain.length < data.length) {
    const currentFunction = data.find(({ id }) => id === inputFunction);

    chain.push(currentFunction.id);
    inputFunction = +currentFunction.output;

    if (chain.includes(inputFunction)) {
      console.error("Invalid chain: circular reference detected");
      break;
    }
  }

  return chain;
};
