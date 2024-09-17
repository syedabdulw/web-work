function removeDuplicates(arr) {
  // Create a new Set to store unique elements
  let uniqueElements = new Set();

  // Filter the array to remove duplicates
  return arr.filter(item => {
      if (!uniqueElements.has(item)) {
          uniqueElements.add(item);
          return true;
      }
      return false;
  });
}

function displayResult() {
  const originalArray = ["Karachi", "Lahore", "Karachi", "Islamabad", "Lahore", "Quetta"];
  const uniqueArray = removeDuplicates(originalArray);
  
  // Display the result on the web page
  document.getElementById("result").textContent = `Original Array: [${originalArray.join(', ')}] 
  \nUnique Array: [${uniqueArray.join(', ')}]`;
}
