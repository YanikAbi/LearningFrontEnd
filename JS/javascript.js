let string = prompt("enter a string?", "");

/**
 *
 * @param {String} enteredString
 */
function capitalized(enteredString) {
  return enteredString.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalized(string));
