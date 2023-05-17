function reverseWords(str) {
    // Check if the input is a string
    if (typeof str !== 'string') {
      return "It must be a string.";
    }
  
    // Split the string into an array of words
    const words = str.split(' ');
  
    // Reverse each word in the array
    const reversedWords = words.map(word => reverseString(word));
  
    // Join the reversed words back into a string
    const reversedString = reversedWords.join(' ');
  
    return reversedString;
  }
  
  // Helper function to reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseWords("abc")); // Output: "cba"
  console.log(reverseWords("JavaScript Exercises")); // Output: "tpircSavaJ sesicrexE"
  console.log(reverseWords(1234)); // Output: "It must be a string."
    