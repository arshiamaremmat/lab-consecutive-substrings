function consecutiveSubstrings(string) {
  const substrings = [];
  
  // Outer loop to pick the starting index
  for (let i = 0; i < string.length; i++) {
    // Inner loop to generate substrings from the start index
    for (let j = i + 1; j <= string.length; j++) {
      substrings.push(string.slice(i, j));
    }
  }
  
  return substrings;
}

module.exports = consecutiveSubstrings;
