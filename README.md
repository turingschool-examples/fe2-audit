# Week 3 Audit

 Fork this repo (do not clone), then clone your forked copy to your machine. 

 `cd` into the directory for this project

 Run `npm install` to install dependencies

 All work should be completed in the `index.js` file

You will have one hour to complete these exercises.  

Once you have completed your work, push it up to GitHub and DM the link of your GitHub repo to your instructor.

---

*For each context exercise*

We want to know what the value of this is when a certain piece of code is executed. This might be a standalone function or a method on an object. 

Your result should be a string in one of the following formats:

```js
'global window object'  
'nameOfObject'  
'instance of nameOfClassInstance'  
````

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

For the prototype exercises, you will want to assign your solution to the variable result.  

An example of what your solution might look like can be found below: 


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
-- 

*For Bonus Exercise* 

If you have time, please read through the directions in `index.js` to complete the bonus exercise

