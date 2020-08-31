# Week 3 Audit

The purposes of this repo is to review your understanding of context, scope, and array prototype methods.

- clone the repo down
- `cd` into the directory for this project.
- Run `npm install` to install dependencies.
- All work should be completed in the `index.js` file.

When you have finished the exercises and want to double check your solutions, you can merge the testing branch into your main.  

- Run `git merge option-1-testing` followed by `npm test` to run the testing suite.

---

*For each context exercise*

We want to know what the value of `this` is when a certain piece of code is executed. This might be a standalone function or a method on an object. 

Your result should be a string in one of the following formats:

```js
'global window object'  
'nameOfObject'  
'instance of nameOfClassInstance'  
```

Your answer should be assigned to the `result` variable.

--- 

*For each scope exercise* 

We what to know the order of the logs and their values. In the event that the value of a variable would be `undefined` or the code would throw an error, write your answer like so:

```js
const result = [  
 { ‘A’: ‘reference error’ },  
 { ‘B’: undefined },  
 { ‘C’: ‘bar’ }. 
 …etc  
]. 
```

Your answer should be assigned to the `result` variable.

--- 

*For each prototype exercise*

You will want to assign your solution to the variable result.  An example of what your solution might look like can be found below: 


```js
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
```
---

*For the Bonus Exercise* 

If you have time, please read through the directions in `index.js` to complete the bonus exercise

