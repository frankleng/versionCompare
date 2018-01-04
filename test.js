const { expect } = require('chai');
const versionCompare = require('./index');

describe('versionCompare', () => {
  it('should return 1 when version1 is higher', () => {
    expect(versionCompare('1.0.2', '1.0.0')).to.equal(1);
    expect(versionCompare('1.2', '1.1.2')).to.equal(1);
    expect(versionCompare('1', '0.1.2')).to.equal(1);
  });

  it('should return -1 when version2 is higher', () => {
    expect(versionCompare('2.0.0', '3.0.2')).to.equal(-1);
    expect(versionCompare('1.2', '3.1.2')).to.equal(-1);
    expect(versionCompare('1', '4.1.2')).to.equal(-1);
  });

  it('should return 0 in all other conditions', () => {
    expect(versionCompare('1.0.0.0.0', '1.0')).to.equal(0);
    expect(versionCompare('0.1', '0.1.0.0')).to.equal(0);
    expect(versionCompare('0.2.0', '0.2')).to.equal(0);
  });
});