const { expect } = require('chai');
const { hexToRgb } = require('../src/hexToRgb');

// Unit tests for the hexToRgb conversion function
describe('hexToRgb', () => {

  // Should correctly convert a valid hex value
  it('converts valid hex to RGB', () => {
    const rgb = hexToRgb('#FF0000');
    expect(rgb).to.deep.equal({ r: 255, g: 0, b: 0 });
  });

  // Should accept hex values without the leading #
  it('accepts hex without #', () => {
    const rgb = hexToRgb('00FF00');
    expect(rgb).to.deep.equal({ r: 0, g: 255, b: 0 });
  });

  // Should throw an error when hex length is invalid
  it('throws on invalid length', () => {
    expect(() => hexToRgb('#FFF')).to.throw();
  });

  // Should throw an error when hex contains invalid characters
  it('throws on invalid characters', () => {
    expect(() => hexToRgb('#GGGGGG')).to.throw();
  });
});
