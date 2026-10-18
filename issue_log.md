
# Issue Log — Receipt Program

## Issue 1: Invalid Array Entry

- **Location:** receipt.ts — ITEMS array
- **Issue:** An empty object entry is missing its contents.
- **Explanation:** The incomplete array entry causes a syntax error and prevents the program from compiling.
- **Suggested fix:** Remove the empty entry or provide a valid item object.
- **Status:** Open

## Issue 2: Invalid Object Syntax in addItem()

- **Location:** receipt.ts — addItem()
- **Issue:** The newItem object uses equals signs instead of colons.
- **Explanation:** Object properties must use colons in TypeScript. The current syntax prevents compilation.
- **Suggested fix:** Use { name: name, price: price } or { name, price }.
- **Status:** Open

## Issue 3: Incorrect Item Deletion

- **Location:** receipt.ts — deleteItem()
- **Issue:** The function searches for the string "name" instead of finding an item by its name.
- **Explanation:** The function does not correctly locate the requested item. It also uses pop(), which removes the last item regardless of the requested name.
- **Suggested fix:** Find the item's index by comparing each item's name with the supplied name, then remove that item using splice().
- **Status:** Open

## Issue 4: Incorrect Total Calculation

- **Location:** receipt.ts — total()
- **Issue:** The loop uses an invalid iteration expression, and the total variable is not initialized.
- **Explanation:** The function cannot correctly iterate through all items and calculate their prices.
- **Suggested fix:** Initialize a subtotal variable to zero and loop through every item in ITEMS, adding each price.
- **Status:** Open

## Issue 5: Tax Calculation Is Incorrect

- **Location:** receipt.ts — tax()
- **Issue:** The tax rate is added directly to the subtotal.
- **Explanation:** A tax rate such as 0.10 represents 10%, so it must be multiplied by the subtotal to calculate the tax amount.
- **Suggested fix:** Calculate tax as total() * taxRate, then add the tax amount to the subtotal only when calculating the final total.
- **Status:** Open

## Issue 6: Incorrect Receipt Item Output

- **Location:** receipt.ts — printReceipt()
- **Issue:** The loop uses item objects as array indexes, and the output string uses incorrect interpolation syntax.
- **Explanation:** The receipt will not correctly display each item's name and price.
- **Suggested fix:** Iterate through each item object and use a template literal such as `${item.name}: $${item.price.toFixed(2)}`.
- **Status:** Open

## Issue 7: Incorrect Subtotal and Total Output

- **Location:** receipt.ts — printReceipt()
- **Issue:** The function prints the function reference instead of calling total(), and the tax and total output strings are malformed.
- **Explanation:** The printed receipt will not display the correct subtotal, tax amount, or final total.
- **Suggested fix:** Call total(), calculate the tax amount, calculate the final total, and print each value using correctly formatted template literals.
- **Status:** Open

## Issue 8: No Input Validation

- **Location:** receipt.ts — addItem()
- **Issue:** The function accepts invalid prices, such as negative numbers.
- **Explanation:** Negative prices can produce incorrect grocery subtotals and totals.
- **Suggested fix:** Validate that the item name is not empty and the price is a finite, non-negative number before adding the item.
- **Status:** Open

## Issue 9: No Tests for Correct Behavior

- **Location:** receipt.test.ts
- **Issue:** The original program has not yet been verified against all required behaviors.
- **Explanation:** Without suitable tests, defects in adding items, deleting items, calculating totals, and printing receipts may go unnoticed.
- **Suggested fix:** Create Jest tests for valid inputs, invalid inputs, edge cases, tax calculations, and receipt output.
- **Status:** Open

## Issue 10: Invalid Object Property Syntax

- **Location:** `src/receipt.ts`, line 17
- **Issue:** Parsing error — a colon was expected.
- **Explanation:** The `newItem` object uses equals signs instead of colons to assign its properties. This causes a syntax error and prevents ESLint from parsing the file.
- **Suggested fix:** Replace the equals signs with colons: `{ name: name, price: price }`.
- **Status:** Open



# Root Cause, Error, Defect, and Failure

## Root Cause
- **Example:** Incorrect understanding of how JavaScript objects, loops, and array methods work.
- **Explanation:** These misunderstandings led to several coding mistakes in the receipt program.

## Error
- **Example:** Writing `{ "name" = name, "price" = price }` in addItem().
- **Explanation:** The programmer made a mistake while writing the object declaration.

## Defect
- **Example:** Using ITEMS.pop() in deleteItem().
- **Explanation:** The code removes the last item instead of the item matching the requested name.

## Failure
- **Example:** Attempting to run the original program when its syntax errors prevent compilation.
- **Explanation:** The program fails to execute as intended.
