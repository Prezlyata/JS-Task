/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  let arrOfnum = [];
  let numbers = [];

  arr.forEach(num => {
  	arrOfnum.push(parseFloat(num)); 
  })
  
  arrOfnum.forEach(num => {
  	if(isNaN(num) === false && isFinite(num) !== false) {
    	numbers.push(num)
    }
  })
  
  return numbers.reduce((a,b) => { return a + b });
};

export default sumElements;
