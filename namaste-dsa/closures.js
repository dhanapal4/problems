//1
function closure(){

    let a=5;
    return function(b){
        return a+b
    }
}

const closureFn = closure()


console.log(closureFn(1))

//2

function generateSeq(){
    let seqNo=1; // private var

    return function(){
        seqNo++;
        return seqNo
    }
}

const getNextSeq = generateSeq()
console.log(getNextSeq())
console.log(getNextSeq())
console.log(getNextSeq())

### What is a Closure?

A **closure** is a function that retains access to its outer scope (the lexical environment) even after the outer function has finished executing. In simpler terms, a closure allows a function to "remember" the variables from the scope in which it was created.

### Example in Your Code:
```javascript
function closure() {
    let a = 5; // Variable in the outer scope
    return function(b) { // Inner function
        return a + b; // Accesses `a` from the outer scope
    }
}

const closureFn = closure(); // `closure` is executed, and the inner function is returned
console.log(closureFn(1)); // Logs: 6 (inner function remembers `a = 5`)
```

Here, the inner function `function(b)` forms a closure because it "remembers" the variable `a` from the outer function `closure`, even though `closure` has already finished executing.

### Why Use Closures?

1. **Data Encapsulation**:
   - Closures allow you to create private variables that cannot be accessed directly from outside the function.
   - Example:
     ```javascript
     function counter() {
         let count = 0;
         return function() {
             count++;
             return count;
         }
     }

     const increment = counter();
     console.log(increment()); // 1
     console.log(increment()); // 2
     ```

2. **Preserving State**:
   - Closures are useful for preserving state between function calls, as shown in the counter example above.

3. **Higher-Order Functions**:
   - Closures are commonly used in higher-order functions, such as event handlers, callbacks, or functional programming.

4. **Avoid Global Variables**:
   - Closures help avoid polluting the global scope by keeping variables within the function's scope.

### Key Characteristics:
- Closures are created every time a function is defined inside another function.
- They allow inner functions to access variables from their outer function's scope, even after the outer function has returned.

### Practical Use Cases:
- **Event Listeners**:
  ```javascript
  function attachEvent(element) {
      let count = 0;
      element.addEventListener('click', function() {
          count++;
          console.log(`Clicked ${count} times`);
      });
  }
  ```

- **Currying**:
  ```javascript
  function multiply(a) {
      return function(b) {
          return a * b;
      }
  }

  const double = multiply(2);
  console.log(double(5)); // 10
  ```

Closures are a powerful feature in JavaScript that enable flexible and modular code design.