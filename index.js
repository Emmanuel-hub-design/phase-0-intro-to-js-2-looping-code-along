//code your solutions in this file

function writeCards(names, occasion) {
  // Create a new empty array to hold the messages
  const messages = ["Charlie", "Samip", "Ali",];

  // Iterate through the input array
  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    // Build the 'thank you' message using string interpolation
    const message = `Thank you, ${name}, for the wonderful ${occasion} gift!`;debugger;

    // Add the message to the new array
    messages.push(message);
  }

  // Return the new array
  return messages;
  writeCards(["Charlie", "Samip", "Ali"], "Birthday");
}

// Example usage:
const cards = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(cards);

function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

// Example usage:
countDown(10);

