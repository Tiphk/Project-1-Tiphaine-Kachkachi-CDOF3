const { spawn } = require('child_process');
const readline = require('readline');

const { typeText } = require('./src/typescript.js');

const ask = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let player_name = ""

function Name(){
    ask.question("", async (name) => {
        if (name.trim() === "" || name.length >= 100) {
            await typeText("Please provide a valid name. Not too short or too long",55);
            Name();
        } else {
            await typeText("What a wonderful name. I'm sure " + name + " will be easy to carve on a grave !",55);
            ask.close();
            await typeText("Let us begin! You will now be transferred into another dimension. Your mission is to come back in this one safe and in one piece ! Good Luck",55);

            player_name = name ;

            TutoOftheGame();
        }
    });
}

async function main(){
    await typeText(" ",10);
    await typeText("=================Charging=================",20);
    await typeText(" ",10);

    await typeText("Welcome new player. Are you ready to test your surviving skills ?",55);
    await typeText("Whatever the answer we sure hope so ",55);
    await typeText("First, please provide your name :",55);
    Name();
}

function TutoOftheGame(){

    // Launch the second script
    const secondScript = spawn('node', ['./src/intro.js']);
// Handle the output of the second script
    secondScript.stdout.on('data', (data) => {
        console.log(`${data}`);
    });

// Handle any errors that occur in the second script
    secondScript.on('error', (err) => {
        console.error(`Error occurred in second script: ${err}`);
    });

// Handle the completion of the second script
    secondScript.on('close', (code) => {
        console.log(`Second script exited with code ${code}`);
    });

}

main().then(r => {});
