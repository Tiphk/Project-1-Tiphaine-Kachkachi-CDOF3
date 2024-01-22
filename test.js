const fs = require('fs');

// Replace 'path/to/your/file.txt' with the actual path to your text file
const filePath = './assets/decors1.txt';

// Read the contents of the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Display the contents in the console
    console.log(data);
});