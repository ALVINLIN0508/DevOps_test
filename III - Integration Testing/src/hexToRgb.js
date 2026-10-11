/**
 * Convert a hex color string (#RRGGBB) to an RGB object.
 *
 * @param {string} hex - Hex color string, e.g. "#FF0000" or "FF0000".
 * @returns {{r: number, g: number, b: number}} RGB object.
 * @throws {Error} If the hex format is invalid.
 */
function hexToRgb(hex) {
  if (typeof hex !== 'string') {
    throw new Error('Hex value must be a string');
  }

  // Remove leading '#' if present
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }
  // Validate hex format
  if (hex.length !== 6) {
    throw new Error('Hex value must be 6 characters');
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  if ([r, g, b].some((v) => Number.isNaN(v))) {
    throw new Error('Invalid hex value');
  }

  return { r, g, b };
}
module.exports = { hexToRgb };
