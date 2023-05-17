function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = formattedStr.split('').reverse().join('');
    
    // Check if the reversed string is equal to the original formatted string
    return formattedStr === reversedStr;
  }
  
  // Test the function
  console.log(isPalindrome('dad'));     // Output: true
  console.log(isPalindrome('madam'));   // Output: true
  console.log(isPalindrome('hello'));   // Output: false
  console.log(isPalindrome('Racecar')); // Output: true
  console.log(isPalindrome('12321'));   // Output: true
  