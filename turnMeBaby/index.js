/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  if(typeof str === 'string') {
    let arrOfword = str.split(' ');
    let reverseArr = arrOfword.reverse();
    let res = [];
    reverseArr.forEach(el => {
      res.push(el.split('').reverse().join(''));
    })
    return res.join(' ');
  } else {
    throw new Error('this is not a string');
  }
};

export default turnMeBaby;
