import { expect } from "chai";
import { add, subtract, multiply, divide } from "../src/mylib.js";

describe("mylib arithmetic functions", () => {

  before(() => {
    console.log(">>> Test suite starting");
  });

  after(() => {
    console.log(">>> Test suite finished");
  });

  describe("add()", () => {
    it("should add two numbers correctly", () => {
      expect(add(2, 3)).to.equal(5);
    });
  });

  describe("subtract()", () => {
    it("should subtract two numbers correctly", () => {
      expect(subtract(5, 2)).to.equal(3);
    });
  });

  describe("multiply()", () => {
    it("should multiply two numbers correctly", () => {
      expect(multiply(4, 3)).to.equal(12);
    });
  });

  describe("divide()", () => {
    it("should divide two numbers correctly", () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it("should throw an error when divisor is zero", () => {
      expect(() => divide(10, 0)).to.throw("ZeroDivisionError");
    });
  });

});
