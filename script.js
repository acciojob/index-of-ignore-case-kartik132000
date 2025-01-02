function indexOfIgnoreCase(s1, s2) {
  // write your code here
	function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();

  // Find the index of the substring in the main string
  return lowerS1.indexOf(lowerS2);
}

// Example usage:
const s1 = "Hello World";
const s2 = "world";
alert(indexOfIgnoreCase(s1, s2)); // Output: 6

}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
