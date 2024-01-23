const fs = require('fs');
const { typeText } = require('./typescript.js');
const readline = require("readline");

const ask = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main(){
    await typeText(" ",10);
    await typeText("=================Charging=================",20);
    await typeText(" ",10);

    await typeText("It looks like you were transferred into a medieval village as a small, young, and poor boy.",55);
    await typeText("Oh your information sheet even give information about your missing father and your almost dead mother !",55);
    await typeText("Here take a look :",55);

    await ReadFile('../assets/histoire_1_2.txt');
    await typeText("Try to go onto the next page :",55);

    Page();

}

function Page(){
    ask.question("", async (number) => {
        if (number <0 || number >3 || number == null) {
            await typeText("Please provide a valid name. Not too short or too long",55);
            Page();
        } else {
            await typeText("What a wonderful name. I'm sure " + number + " will be easy to carve on a grave !",55);
            ask.close();
            await typeText("Let us begin ! You will now be transferred into another dimension. Your mission is to come back in this one safe and in one piece ! Good Luck",55);
        }
    });
}

async function ReadFile(filePath){
    fs.readFile(filePath, 'utf8', async (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        // Display the contents in the console
        await typeText(data, 1);
        //console.log(data);
    });
}

main().then(r => {});
