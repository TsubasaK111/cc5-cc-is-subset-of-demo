/*

    isSubsetOf should take an input array and return whether the context array
    is a subset of the input array.
    
    - Method work for arrays that contain objects and/or arrays as elements as well
    - Disregard duplicates

    ['pop','crackle'].isSubsetOf(['snap','pop', 'crackle']); //true  
    [null].isSubsetOf([1, null]) // true
    [[1], [2, [3, 4]]].isSubsetOf([[[4, 3], 2], [1]]); // true
    [[1], [2, [3, 4]]].isSubsetOf([[1], [2], [3, 4]])); // false

    const objectSub = [{ "key1": 1 }, { "key2": { "key3": 3, "key4": 4 }}];
    objectSub.isSubsetOf([{ "key1": 1 }, { "key2": { "key3": 3, "key4": 4 }}, {"key5": 5}]); // true
    objectSub.isSubsetOf([{ "key1": 1 }, { "key2": 2 }, { "key3": 3, "key4": 4 }]); // false

    See http://en.wikipedia.org/wiki/Subset for more on the definition of a
    subset.
  */

const { expect } = require('chai');
require('./index.js');

describe("isSubsetOf", () => {
  it("should exist", () => {
    expect(Array.prototype.isSubsetOf).to.exist;
  });

  it("should be a function", () => {
    expect(Array.prototype.isSubsetOf).to.be.a("function");
  });

  it("should exist in any array", () => {
    // Setup
    let pancakes = ["blueberry", "strawberry", "radberry"];

    // Assert
    expect(pancakes.isSubsetOf).to.exist;
    expect(pancakes.isSubsetOf).to.be.a("function")
  });

  context("when invoked with an array of strings", () => {
    let pancakes;
    let muffins;
    let pancakesAndMuffins;
    let result = {};

    before("Setup", () => {
      pancakes = ["strawberry pancakes", "strawberry pancakes", "radberry pancakes"];
      muffins = ["banana muffin", "blueberry muffin"];
      pancakesAndMuffins = [...pancakes, ...muffins];
    });

    before("Exercise", () => {
      result.noInput = pancakes.isSubsetOf();
      result.pancakesAndMuffins = pancakes.isSubsetOf(pancakesAndMuffins);
      result.noMuffins = pancakes.isSubsetOf(muffins);
    })

    it("should return a boolean", () => {
      // Assert
      expect(result.noInput).to.be.a("boolean");
    });

    it("should return false if context array is not a subset", () => {
      expect(result.noMuffins).to.be.false;
    });

    it("should return true if context array is actually a subset", () => {
      expect(result.pancakesAndMuffins).to.be.true;
    });

  });
});