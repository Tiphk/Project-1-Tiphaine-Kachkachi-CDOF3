
console.log('Executing second script');


const towerHeight = 5; // Specify the height of the tower

// Loop through each row of the tower
for (let row = 1; row <= towerHeight; row++) {
    const numSpaces = towerHeight - row; // Calculate the number of spaces in each row
    const numDashes = row * 2 - 1; // Calculate the number of dashes in each row

    // Generate the row string with spaces and dashes
    const rowStr = ' '.repeat(numSpaces) + '-'.repeat(numDashes);

    console.log(rowStr); // Print the row in the console
}

