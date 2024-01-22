const { spawn } = require('child_process');
const readline = require('readline');

const ask = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function typeText(text) {

    return new Promise(resolve => {
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                process.stdout.write(text[i]);

                if (i === text.length - 1) {
                    console.log(); // Print a new line after the last character is displayed
                    resolve(); // Resolve the promise when typing is completed
                }
            }, 55 * i); // Wait 55 milliseconds for each character (adjust the delay as needed)
        }
    });

}

let player_name = ""

function Name(){
    ask.question("", async (name) => {
        if (name.trim() === "") {
            await typeText("Please provide a valid name.");
            Name();
        } else {
            await typeText("What a wonderful name. I'm sure " + name + " will be easy to carve on a grave!");
            ask.close();
            await typeText("Let us begin! You will now be transferred into another dimension. Your mission is to come back in this one safe and in one piece ! Good Luck");

            player_name = name ;

            TutoOftheGame();
        }
    });
}



async function main(){
    await typeText("Welcome new player. Are you ready to test your surviving skills ?");
    await typeText("Whatever the answer we sure hope so ");
    await typeText("First, please provide your name :");
    Name();
}

function TutoOftheGame(){

    // Launch the second script
    const secondScript = spawn('node', ['test.js']);
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

main();
