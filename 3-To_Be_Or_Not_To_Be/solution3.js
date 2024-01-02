/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  let val1 = val;

  return {
    toBe: (val) => {
      const beVal = val1;
      if (val === beVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (val) => {
      const notVal = val1;
      if (val !== notVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */