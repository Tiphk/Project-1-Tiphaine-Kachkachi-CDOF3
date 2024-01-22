const { spawn } = require('child_process');
const readline = require('readline');

const player_name = readline.createInterface({
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

function Name(){
    var whatsName = "First, please provide your name :"
    typeText(whatsName)
    player_name.question("", (name) => {
        console.log(`Hello, ${name}!`);
        player_name.close();

        //TutoOftheGame();
    });
}


async function main(){
    var intro = "Welcome new player. Are you ready to test your surviving skills ?" ;
    var intro1 = "Whatever the answer we sure hope so " ;
    await typeText(intro);
    await typeText(intro1);
    Name();

}

function TutoOftheGame(){

    // Launch the second script
    const secondScript = spawn('node', ['tuto.js']);
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
