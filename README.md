For each context exercise, we want to know what the value of this is when a certain piece of code is executed. This might be a standalone function or a method on an object. Your result should be a string in one of the following formats:

'global window object'
'nameOfObject'
'instance of nameOfClassInstance'

--- 

For each scope exercise, we what to know the order of the logs and their values. In the event that the value of a variable would be `undefined` or the code would throw an error, write your answer like so:

[
 { ‘A’: ‘reference error’ },
 { ‘B’: undefined },
 { ‘C’: ‘bar’ }
 …etc
]

--- 

For the prototype exercises, you will want to assign your solution to the variable result. An example of what your solution might look like can be found below: 

// ./index.js
const { animals } = require('./datasets/farm');

const farmPrompts = {
  totalFarmAnimals() {
    // Return a single number that represents the
    // total amount of animals on the farm. e.g.
    // 50

    const result = animals.reduce((total, animal) => {
      return total += animal.count;
    }, 0);

    return result;

  }
}

-- 