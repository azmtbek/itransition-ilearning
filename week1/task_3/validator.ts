
const isValidArgs = (args: string[]): boolean => {
  const length = args.length;
  if (length < 3) {
    console.log("Please enter 3 or more parameters!");
    return false;
  }
  if (length % 2 === 0) {
    console.log("Please enter odd number of parameters!");
    return false;
  }
  if (new Set(args).size !== length) {
    console.log("Please enter non duplicate values!");
    return false;
  }
  return true;
};

const isValidInput = (move: string, n: number): boolean => {
  const num = +move;
  return (Number.isInteger(num) && num <= n && num > 0);
};

export { isValidArgs, isValidInput };