/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return price+ - If type is not "regular", "latte", "cappuccino", or "mocha", return price+ - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  const sizePrices = {
    small: 3.0,
    medium: 4.0,
    large: 5.0
  };

  const typePrices = {
    regular: 0,
    latte: 1.0,
    cappuccino: 1.5,
    mocha: 2.0
  };

  // invalid size/type
  if (!sizePrices[size] || typePrices[type] === undefined) {
    return -1;
  }

  let total = sizePrices[size] + typePrices[type];

  const { whippedCream = false, extraShot = false } = extras;

  if (whippedCream) total += 0.5;
  if (extraShot) total += 0.75;

  return Number(total.toFixed(2));
}
