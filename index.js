/**
 * @param ver1
 * @param ver2
 * @return {number}
 */
function versionCompare(ver1, ver2) {
  const ver1Nums = ver1.split('.').map(Number);
  const ver2Nums = ver2.split('.').map(Number);

  // 3 loops since semver has 3 groups of numbers for major, minor, patch
  for (let i = 0; i < 3; i ++) {
    if (ver1Nums[i] > ver2Nums[i]) return 1;
    if (ver1Nums[i] < ver2Nums[i]) return -1;
  }

  return 0;
}

module.exports = versionCompare;
