/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let val1 = init;
  return {
    increment: () => {
      val1 += 1;
      return val1;
    },
    decrement: () => {
      val1 -= 1;
      return val1;
    },
    reset: () => {
      val1 = init;
      return val1;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
