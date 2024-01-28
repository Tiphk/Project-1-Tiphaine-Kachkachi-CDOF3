const readline = require('readline');
const { typeText } = require('./typescript/typescript.js');

async function Page() {
    const ask = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        await typeText("here", 55);

        const number = await askQuestion("Enter a number: ");
        console.log(`[Script 2] Received input from Script 1: ${number}`);

        if (number === "1" || number === "2") {
            await typeText("This is the first page, you already read it. Change page : ", 55);
            // Additional logic...
        } else if (number === "3" || number === "4") {
            await typeText("Enter anything to start the story", 55);
            // Additional logic...
        } else {
            await typeText("Please provide a valid page number (1 to 4)", 55);
            // Additional logic...
        }
    } catch (error) {
        console.error("[Script 2] Error in Page:", error);
    } finally {
        ask.close();
    }

}

function askQuestion(promptText) {
    return new Promise((resolve, reject) => {
        const ask = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        ask.question(promptText, (answer) => {
            ask.close();
            resolve(answer);
        });
    });
}

/*
async function typeText(text, delay) {
   // console.log(`[Script 2] Outputting text: ${text}`);
    await new Promise(resolve => setTimeout(resolve, delay));
}

 */

await Page();