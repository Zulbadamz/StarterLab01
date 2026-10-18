
import { jest, describe, test, expect, beforeEach } from "@jest/globals";

describe("Receipt program tests", () => {
  let receipt: typeof import("./fixed_receipt");

  beforeEach(() => {
    jest.resetModules();
    receipt = require("./fixed_receipt");
  });

  // Happy-path test
  test("adds an item to the grocery list", () => {
    receipt.addItem("milk", 4.5);
    expect(receipt.total()).toBe(51.99);
  });

  // Unhappy-path test
  test("does not accept a negative item price", () => {
    expect(() => receipt.addItem("bad item", -5)).toThrow();
    expect(receipt.total()).toBe(47.49);
  });

  // Edge-case test
  test("handles an item with a price of zero", () => {
    receipt.addItem("free item", 0);
    expect(receipt.total()).toBe(47.49);
  });

  test("deletes an item by name", () => {
    receipt.deleteItem("eggs");
    expect(receipt.total()).toBe(40.74);
  });

  test("calculates tax", () => {
    expect(receipt.tax(0.1)).toBe(4.75);
  });

  test("prints a receipt", () => {
    const consoleSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    receipt.printReceipt(0.1);

    expect(consoleSpy).toHaveBeenCalledWith("Subtotal: $47.49");
    expect(consoleSpy).toHaveBeenCalledWith("Tax: $4.75");
    expect(consoleSpy).toHaveBeenCalledWith("Total: $52.24");

    consoleSpy.mockRestore();
  });
});

