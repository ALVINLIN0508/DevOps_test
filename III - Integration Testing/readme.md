# Hex to RGB Converter – Integration Testing Project

This project demonstrates a simple JavaScript module for converting hexadecimal color values into RGB format, a REST API built with Express, and a complete automated test suite using Mocha, Chai, and Supertest.  
It is implemented as part of the Integration Testing assignment at LAB University of Applied Sciences.

---

##  Installation & Setup

Follow these steps to set up the project locally.

### 1. Initialize npm

```bash
npm init -y
```

### 2. Install Express

```bash
npm install express
```

### 3. Install testing libraries

```bash
npm install mocha chai supertest --save-dev
```

---

##  Project Structure

```text
project-root/
│
├── src/
│   ├── hexToRgb.js        # Library: hex → RGB conversion
│   └── server.js          # Express REST API
│
├── test/
│   ├── hexToRgb.test.js   # Unit tests
│   └── server.test.js     # Integration tests
│
├── package.json
└── .gitignore
```

---

##  Running the Server

Start the Express server:

```bash
npm run dev
```

Server runs at:

```text
http://localhost:3000
```

---

##  API Endpoint

### GET `/hex-to-rgb?hex=<value>`

Example:

```text
http://localhost:3000/hex-to-rgb?hex=%23FF0000
```

Response:

```json
{
  "hex": "#FF0000",
  "rgb": {
    "r": 255,
    "g": 0,
    "b": 0
  }
}
```

Error responses:

```json
{
  "error": "Missing hex parameter"
}
```

```json
{
  "error": "Invalid hex value"
}
```

---

##  Running Tests

Run all unit and integration tests:

```bash
npm test
```

### ✔ Unit tests (`hexToRgb.js`)

- Valid hex conversion
- Hex without `#`
- Invalid length
- Invalid characters

### ✔ Integration tests (`server.js`)

- Valid API response
- Missing parameter
- Invalid hex input

---

##  Testing with Postman

### Successful request

```text
GET /hex-to-rgb?hex=%23FF0000
```

### Error request

```text
GET /hex-to-rgb?hex=ZZZZZZ
```

### Optional Postman test script

```javascript
pm.test("Status is 200", function () {
  pm.response.to.have.status(200);
});
```

---

##  Repository Requirements

Make sure the GitHub repository:

- Is **public**
- Contains `src/` and `test/`
- Contains `package.json`
- Contains `.gitignore`
- Does **not** contain `node_modules/`
- Does **not** contain `.env`, `.DS_Store`, or other environment files
- Contains the documentation PDF

---

##  References

- Express — https://expressjs.com
- Mocha — https://mochajs.org
- Chai — https://www.chaijs.com
- Supertest — https://github.com/visionmedia/supertest
- JSDoc — https://jsdoc.app

---

##  Author

**Tong Lin (Alvin)**  
LAB University of Applied Sciences  
Integration Testing – 2026
