// Function to initialize Local Storage
// Parameters:
//   - item: The key for the item in Local Storage.
//   - value: The default value to set in Local Storage if the item is not already present.
//   - setState: A function to set the state in a React component.
//   - handler: A callback function to handle the value (optional).
export function initLS(item, value, setState, handler) {
  // Check if the item exists in Local Storage
  let prevItem = localStorage.getItem(item);

  // If the item exists, retrieve its value and update state and call the handler if provided
  if (prevItem !== null) {
    if (setState) setState(prevItem);
    if (handler) handler(prevItem);
  } else {
    // If the item doesn't exist, set the default value in Local Storage and call the handler
    localStorage.setItem(item, value);
    if (handler) handler(value);
  }
}

// Function to set value in Local Storage
// Parameters:
//   - item: The key for the item in Local Storage.
//   - value: The value to set in Local Storage.
//   - setState: A function to set the state in a React component.
//   - handler: A callback function to handle the value (optional).
export function setLS(item, value, setState, handler) {
  // Call the handler with the value if provided
  if (handler) handler(value);

  // Set the state with the value if the setState function is provided
  if (setState) setState(value);

  // Set the specified item with the given value in Local Storage
  localStorage.setItem(item, value);
}
