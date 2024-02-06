
const isValidArgsLength = (length: number): boolean => {
  if (length < 3) {
    console.log("please enter more than 2 arguments");
    return false;
    ;
  }
  if (length % 2 === 0) {
    console.log("please enter odd number of arguments");
    return false;
  }
  return true;
};
const isValidInput = (move: string, n: number): boolean => {
  const num = +move;
  return (Number.isInteger(num) || num >= n || num < 0);
};
export { isValidArgsLength, isValidInput };