const fs = require('fs');
const { typeText } = require('./typescript.js');

async function main(){
    await typeText(" ",10);
    await typeText("=================Charging=================",20);
    await typeText(" ",10);

    await typeText("It looks like you were transferred into a medieval village as a small, young, and poor boy.",55);
    await typeText("Oh your information sheet even give information about your missing father and your almost dead mother !",55);
    await typeText("Here take a look :",55);

    const filePath = '../assets/histoire_1_2.txt';
    ReadFile(filePath);
}

function ReadFile(filePath){

// Replace 'path/to/your/file.txt' with the actual path to your text file

// Read the contents of the file
    fs.readFile(filePath, 'utf8', async (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        // Display the contents in the console
        await typeText(data, 10);
    });
}

main().then(r => {});
