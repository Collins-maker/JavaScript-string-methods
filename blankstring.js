function isBlank(str) {
    // Remove leading and trailing whitespaces
    str = str.trim();
  
    // Check if the string is empty
    return str === '';
  }

  //checking the functionality:
  console.log(isBlank('')); // Output: true
console.log(isBlank('   ')); // Output: true
console.log(isBlank('Collins')); // Output: false
console.log(isBlank('  Mtumishi  ')); // Output: false

  