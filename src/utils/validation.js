export const validateInput = (value, message) => {
  const validPattern = /^[0-9+\-*/^x\s]*$/;
  if (!validPattern.test(value)) {
    message(
      "Please enter a valid operation (numbers, +, -, *, /, ^, and x are allowed)."
    );
  } else {
    message("");
  }
};
