const { spawn } = require('child_process');
const readline = require('readline');
const {typeText} = require("./src/typescript/typescript");

function TutoOftheGame() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const secondScript = spawn('node', ['./src/intro.js'], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    rl.on('line', (input) => {
        // console.log(`[Script 1] Sending input to Script 2: ${input}`);
        secondScript.stdin.write(input + '\n');
    });

    secondScript.stdout.on('data', (data) => {
        process.stdout.write(data.toString());
    });

    secondScript.on('close', (code) => {
        //console.log(`[Script 1] Second script exited with code ${code}`);
        rl.close();
    });

    rl.on('SIGINT', () => {
        secondScript.kill('SIGINT');
        process.exit();
    });
}

async function main(){

    /*

    await typeText(" ",10);
    await typeText("=================Charging=================",20);
    await typeText(" ",10);

     */

    await YesNo_No_Answer();
    await Name();

    /*

    await typeText("Let us begin ! You will now be transferred into another dimension. Your mission is to come back in this one safe (and in one piece) ! Good Luck.", 55);

    await typeText(" ",10);
    await typeText("=================Charging=================",20);
    await typeText(" ",10);

     */

    TutoOftheGame();
}
function YesNo_No_Answer() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const responses = {}; // To store user responses
    const askQuestion = (question) => {
        return new Promise((resolve) => {
            rl.question(question, (answer) => {
                responses[question] = answer;
                resolve();
            });
        });
    };

    return new Promise(async (resolve) => {
        await typeText("Welcome new player. Are you ready to test your surviving skills ?",55);
        await askQuestion("");
        await typeText("Whatever the answer we sure hope so.",55);

        // Optionally, you can process or use the collected responses
        //console.log("Collected responses:", responses);

        rl.close();
        resolve(responses);
    });
}

function Name() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const responses = {}; // To store user responses
    const askQuestion = (question) => {
        return new Promise((resolve) => {
            rl.question(question, (answer) => {
                const trimmedAnswer = answer.trim();
               // const finalAnswer = trimmedAnswer.length > 0 && trimmedAnswer.length <= 50 ? trimmedAnswer : defaultValue;
                resolve(trimmedAnswer);
            });
        });
    };

    return new Promise(async (resolve) => {
        await typeText("First, please provide your name :", 55);

        const nameResponse = await askQuestion("");
        const response = { name: nameResponse };

        //console.log("Collected responses:", response.name);

        if(response.name.length >= 30 ) //invalid name
        {
            await typeText("Mm what ? This name is way too long, I'll just call you Thing.", 55);
        }
        else if (response.name <= 0){
            await typeText("Nothing is not a name. Wait... Okay I guess I'll call you Nothing then.", 55);
        }
        else {
            await typeText("What a wonderful name. I'm sure " + response.name + " will be easy to carve on a grave !", 55);
        }

        rl.close();
        resolve(responses);
    });
}

main().then(r => {});

