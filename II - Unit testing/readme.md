# Unit Testing Project

This project contains a small JavaScript library called **mylib**.

The library provides four basic arithmetic functions:

- `add(a, b)`
- `subtract(a, b)`
- `multiply(a, b)`
- `divide(a, b)` with ZeroDivisionError handling

A main program demonstrates the functions, and a separate unit test suite was created using **Mocha** and **Chai**.

---

## Project Setup

Follow these steps to create and run the project.

### 1. Initialize the Node.js Project

Create a new project folder and run:

```bash
npm init -y
```

This generates a default `package.json` file.

### 2. Install Development Dependencies

Install Mocha and Chai:

```bash
npm install --save-dev mocha chai
```

### 3. Enable ES Modules

Add the following field to `package.json`:

```json
"type": "module"
```

This allows the project to use `import` and `export` syntax.

The test script should also be included in `package.json`:

```json
"scripts": {
  "test": "mocha"
}
```

### 4. Create the Project Structure

```text
src/
  mylib.js
  main.js
test/
  mylib.test.js
package.json
package-lock.json
.gitignore
```

### 5. Add `.gitignore`

Create a `.gitignore` file with the following content:

```gitignore
node_modules/
.env
.DS_Store
```

This prevents unnecessary or environment-related files from being committed to the repository.

---

## Project Structure

```text
src/
  mylib.js        # Arithmetic library
  main.js         # Demonstration program

test/
  mylib.test.js   # Unit tests using Mocha and Chai

package.json
package-lock.json
.gitignore
```

---

## Arithmetic Functions

The `mylib.js` module contains four arithmetic functions.

```javascript
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("ZeroDivisionError: divisor cannot be zero");
  }

  return a / b;
}
```

The `divide()` function throws an error when the divisor is zero.

---

## Running the Program

Run the main program with:

```bash
node src/main.js
```

Example output:

```text
Add: 5
Subtract: 3
Multiply: 12
Divide: 5
Error: ZeroDivisionError: divisor cannot be zero
```

---

## Running the Unit Tests

Run the Mocha unit tests with:

```bash
npm test
```

The test suite checks:

- Addition
- Subtraction
- Multiplication
- Division
- Division by zero

Example test result:

```text
mylib arithmetic functions
>>> Test suite starting

  add()
    ✔ should add two numbers correctly

  subtract()
    ✔ should subtract two numbers correctly

  multiply()
    ✔ should multiply two numbers correctly

  divide()
    ✔ should divide two numbers correctly
    ✔ should throw an error when divisor is zero

>>> Test suite finished

5 passing
```

The tests can be executed separately without running `src/main.js`.

---

## Technologies Used

- JavaScript
- Node.js
- ES Modules
- Mocha
- Chai

---

## Maintainer

Tong Lin