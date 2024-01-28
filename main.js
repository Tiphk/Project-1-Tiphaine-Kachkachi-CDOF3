const { spawn } = require('child_process');
const readline = require('readline');

const { typeText } = require('./src/typescript/typescript.js');


let player_name = ""

function YesNo_No_Answer(){
    const ask = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    ask.question("", async (response) => {
        if(response === "code secret"){
            await typeText("Whatever the answer we sure hope so.",55);
            await typeText("First, please provide your name :", 55);
            ask.close();
            Name();
        }
        else {
            await typeText("Whatever the answer we sure hope so.",55);
            await typeText("First, please provide your name :", 55);
            ask.close();
            Name();
        }
    });
}

function Name() {
    const ask = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    ask.question("", async (name) => {
        if (name.trim() === "" || name.length >= 100) {
            await typeText("Please provide a valid name. Not too short or too long", 55);
            ask.close();
            Name();
        } else
        {
            /*
            await typeText("What a wonderful name. I'm sure " + name + " will be easy to carve on a grave !", 55);
            await typeText("Let us begin ! You will now be transferred into another dimension. Your mission is to come back in this one safe (and in one piece) ! Good Luck.", 55);
            */
            ask.close();
            await typeText("hum ok",55);
            player_name = name;
            TutoOftheGame();
        }
    });
}

async function main(){
    /*
    await typeText(" ",10);
    await typeText("=================Charging=================",20);
    await typeText(" ",10);

     */
    await typeText("Welcome new player. Are you ready to test your surviving skills ?",55);

    YesNo_No_Answer();
}

function TutoOftheGame(){

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const secondScript = spawn('node', ['./src/intro.js'], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    rl.on('line', (input) => {
        console.log(`[Script 1] Sending input to Script 2: ${input}`);
        secondScript.stdin.write(input + '\n');
    });

    secondScript.stdout.on('data', (data) => {
        console.log(`[Script 1] Received output from Script 2: ${data.toString()}`);
        process.stdout.write(data.toString());
    });

    secondScript.on('close', (code) => {
        console.log(`[Script 1] Second script exited with code ${code}`);
        rl.close();
    });

    rl.on('SIGINT', () => {
        secondScript.kill('SIGINT');
        process.exit();
    });
}

main().then(r => {});
