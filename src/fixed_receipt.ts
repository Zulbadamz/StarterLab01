
interface GroceryItem {
  name: string;
  price: number;
}

const ITEMS: GroceryItem[] = [
  { name: "paper towels", price: 21.99 },
  { name: "sandwich", price: 8.75 },
  { name: "eggs", price: 6.75 },
  { name: "avocado oil", price: 10.0 },
];

export function addItem(name: string, price: number): GroceryItem[] {
  if (!name.trim()) {
    throw new Error("Item name cannot be empty.");
  }

  if (!Number.isFinite(price) || price < 0) {
    throw new Error("Price must be a finite, non-negative number.");
  }

  ITEMS.push({ name, price });
  return ITEMS;
}

export function deleteItem(name: string): GroceryItem[] {
  const idx = ITEMS.findIndex((item) => item.name === name);

  if (idx !== -1) {
    ITEMS.splice(idx, 1);
  }

  return ITEMS;
}

export function total(): number {
  return Number(
    ITEMS.reduce((sum, item) => sum + item.price, 0).toFixed(2)
  );
}

export function tax(taxRate: number): number {
  if (!Number.isFinite(taxRate) || taxRate < 0) {
    throw new Error("Tax rate must be a finite, non-negative number.");
  }

  return Number((total() * taxRate).toFixed(2));
}

export function printReceipt(taxRate: number): void {
  const subtotal = total();
  const taxAmount = tax(taxRate);
  const grandTotal = Number((subtotal + taxAmount).toFixed(2));

  console.log("****************************");

  for (const item of ITEMS) {
    console.log(`${item.name}: $${item.price.toFixed(2)}`);
  }

  console.log("****************************");
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`Tax: $${taxAmount.toFixed(2)}`);
  console.log(`Total: $${grandTotal.toFixed(2)}`);
}
