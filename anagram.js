function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    str1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Check if the lengths of the strings are equal
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create frequency counters for each string
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
  
    // Populate frequency counters for str1
    for (let char of str1) {
      frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
  
    // Populate frequency counters for str2
    for (let char of str2) {
      frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }
  
    // Check if the frequency counters are equal
    for (let key in frequencyCounter1) {
      if (frequencyCounter1[key] !== frequencyCounter2[key]) {
        return false;
      }
    }
  
    return true;
  }

  //testing the results:
  const string1 = "abcd";
const string2 = "dabc";

console.log(areAnagrams(string1, string2));
// Output: true

const string3 = "hello";
const string4 = "world";

console.log(areAnagrams(string3, string4));
// Output: false

  