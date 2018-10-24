const { expect } = require("chai");
require("./index.js")

// - Disregard duplicates

// ['pop','crackle'].isSubsetOf(['snap','crackle','pop']); //true  
// [null].isSubsetOf([1, null]) // true
// [[1], [2, [3, 4]]].isSubsetOf([[2, [3, 4]], [1]]); // true
// [[1], [2, [3, 4]]].isSubsetOf([[1], [2], [3, 4]])); // false

// const objectSub = [{ "key1": 1 }, { "key2": { "key3": 3, "key4": 4 }}];
// objectSub.isSubsetOf([{ "key1": 1 }, { "key2": { "key3": 3, "key4": 4 }}, {"key5": 5}]); // true
// objectSub.isSubsetOf([{ "key1": 1 }, { "key2": 2 }, { "key3": 3, "key4": 4 }]); // false

describe("isSubsetOf", () => {
  it("should exist", () => {
    expect(Array.prototype.isSubsetOf).to.exist;
  });

  it("should be a function", () => {
    expect(Array.prototype.isSubsetOf).to.be.a("function");
  });

  it("should exist in any array", () => {
    let pancakes = ["blueberry", "strawberry", "radberry"]
    expect(pancakes.isSubsetOf).to.exist;
    expect(pancakes.isSubsetOf).to.be.a("function")
  });

  it("should return false when given a non-array", () => {
    let emptyInside = [];

    expect(emptyInside.isSubsetOf()).to.be.false;
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
      expect(result.noInput).to.be.a("boolean");
    });

    it("should return true if context array is actually a subset", () => {
      expect(result.pancakesAndMuffins).to.be.true;
    });

    it("should return false if context array is not a subset", () => {
      expect(result.noMuffins).to.be.false;
    });
  })

  context("when invoked with an array of arrays", () => {
    let pancakes;
    let muffins;
    let pancakesAndMuffins;
    let result = {};

    before("Setup", () => {
      pancakes = [
        ["maple syrup", "butter", "strawberry", "pancake"],
        ["maple syrup", "strawberry", "whipped cream", "pancake"],
        ["pancake", "pancake", "pancake"],
        "plain pancakes"
      ];
      muffins = [
        "banana muffin",
        ["blueberry muffin", "radberry muffin"],
        ["mini muffin1", "mini muffin2", "mini muffin3", ["rainbow sprinkes", "chocolate sprinkles"]]
      ];
      pancakesAndMuffins = [...pancakes, ...muffins];
    })

    before("Exercise", () => {
      result.noInput = pancakes.isSubsetOf();
      result.pancakesAndMuffins = pancakes.isSubsetOf(pancakesAndMuffins);
      result.noMuffins = pancakes.isSubsetOf(muffins);
    })

    it("should return a boolean", () => {
      expect(result.noInput).to.be.a("boolean");
    });

    it("should return true if context array is actually a subset", () => {
      expect(result.pancakesAndMuffins).to.be.true;
    });

    it("should return false if context array is not a subset", () => {
      expect(result.noMuffins).to.be.false;
    });
  })

  context("when invoked with an array of objects", () => {
    let pancakes;
    let muffins;
    let pancakesAndMuffins;
    let result = {};
    let muffinArray;

    before("Setup", () => {
      pancakes = [
        { sauce: "maple syrup", sauce2: "butter", fruitTopping: "strawberry", pancakes: "pancake" },
        { sauce: "maple syrup", sauce2: "butter", fruitTopping: "strawberry", pancakes: ["pancake", "pancake", "pancake"] },
        ["maple syrup", "strawberry", "whipped cream", "pancake"],
        ["pancake", "pancake", "pancake"],
        "plain pancakes"
      ];

      muffins = [
        { flavor: "banana", type: "muffin" },
        ["blueberry muffin", "radberry muffin"],
        { flavor: "variety", type: "boxset", muffins: ["mini muffin1", "mini muffin2", "mini muffin3", ["rainbow sprinkes", "chocolate sprinkles"]]}
      ]
      pancakesAndMuffins = [...pancakes, ...muffins];
      muffinArray = ["mini muffin1", "mini muffin2", "mini muffin3", ["rainbow sprinkes", "chocolate sprinkles"]];
    })

    before("Exercise", () => {
      result.noInput = pancakes.isSubsetOf();
      result.pancakesAndMuffins = pancakes.isSubsetOf(pancakesAndMuffins);
      result.noMuffins = pancakes.isSubsetOf(muffins);
      result.muffinArray = pancakes.isSubsetOf(muffinArray);
    })

    it("should return a boolean", () => {
      expect(result.noInput).to.be.a("boolean");
    });

    it("should return true if context array is actually a subset", () => {
      expect(result.pancakesAndMuffins).to.be.true;
    });

    it("should return false if context array is not a subset", () => {
      expect(result.noMuffins).to.be.false;
    });

    it("should return true when the input array contains object and arrays as elements in the context array", ()=> {
      expect(result.muffinArray).to.be.false;
    });
  })

});
