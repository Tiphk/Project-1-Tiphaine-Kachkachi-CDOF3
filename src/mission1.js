const fs = require('fs');
const { typeText } = require('./typescript/typescript.js');
const { typeBold } = require('./typescript/typescript_bold.js');
const { typeColor } = require('./typescript/typescript_color.js');
const readline = require("readline");

const ask = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main(){

    await typeColor("Hey ! You, over there !",55, '\x1b[36m');
    await typeColor("The kid with the flowers ! I'm talking to you.",55, '\x1b[36m');

    await typeBold("\nAnswer him ? (y/n)",55);
    await ChoiceYN();
}

async function ChoiceYN() {
    ask.question("", async (answer) => {
        let response = 0;
        if(answer.toLowerCase()==="y"){
            await typeText("You : Yes ?", 55);
            response = 1;
        }
        else if(answer.toLowerCase()==="n"){
            await typeText("You : Don't talk to me.", 55);
            response = 2;
        }
        else {
            await typeText("You : ...", 55);
            response = 0;
        }
        await Result1(response);
    });
}

async function Result1(response) {
    switch (response) {
        case 1:
            await typeColor("\nWait up ! I have a job to offer you ! I pay good money !", 55, '\x1b[36m');
            break;
        case 2:
            await typeColor("\nI have money to give ! You are poor right ? Of course you're poor look at you...", 55, '\x1b[36m');
            break;
        default:
            await typeColor("\nErr.. What did you say ? ",55, '\x1b[36m');
            await typeColor("Okay whatever I have a job to offer you, and you will get paid !",55, '\x1b[36m');
            break;
    }
    await typeColor("Listen up, I'm a traveler from far away and I heard about the rumor of the old Tower.",55, '\x1b[36m');
    await typeColor("Many Princes tried to save the Princess, but it's been ages ! She's dead and every so-called monsters in it are too ",55, '\x1b[36m');
    await typeColor("And Princes are maaad rich... They probably had gold on their clothes and many gems on their swords...",55, '\x1b[36m');
    await typeColor("So... here my plan. I need you to wait for me outside the tower and make sure nobody goes in. I'll pay you once I'm done.",55, '\x1b[36m');
    await typeColor("Are you in ? ",55, '\x1b[36m');
}


main().then(r => {});
