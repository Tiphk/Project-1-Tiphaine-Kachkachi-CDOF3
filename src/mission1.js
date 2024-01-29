const fs = require('fs');
const { typeText } = require('./typescript/typescript.js');
const { typeBold } = require('./typescript/typescript_bold.js');
const { typeColor } = require('./typescript/typescript_color.js');
const readline = require("readline");

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

let staysilentCOUNT = 0;
let disagreeCOUNT =0 ;
let charabiaCOUNT = 0;


async function main(){

    await typeColor("Hey ! You, over there !",55, '\x1b[36m');
    await typeColor("The kid with the flowers ! I'm talking to you.",55, '\x1b[36m');

    await Start();
}

function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

async function Start() {
    await typeBold("\nAnswer him ?",55);
    await typeBold("1- Yes",55);
    await typeBold("2- No",55);
    await typeBold("3- Tell him to go away",55);
    let response =0;
    try {
        const answer = await askQuestion("");
        //console.log(`[Script 3] Received input from Script 1: ${answer}`);

        if(answer==="1"){
            await typeText("\nYou : Yes ?", 55);
            response = 1;
        }
        else if(answer==="3"){
            await typeText("\nYou : I'm busy.", 55);
            disagreeCOUNT ++;
            response = 3;
        }
        else if(answer ==="2"){
            await typeText("\nYou : ...", 55);
            staysilentCOUNT ++;
            response = 2;
        }
        else {
            await typeText("\nYou : "+ reverseString(answer), 55);
            charabiaCOUNT ++;
            response = 0;
        }
        await Start_result(response);

    } catch (error) {
        console.error("[Script 2] Error in Page:", error);
    } finally {
        //ask.close();
    }
}

async function Start_result(response) {
    console.log("\n");
    switch (response) {
        case 1:
            await typeColor("I have a job to offer you ! I pay good money !", 55, '\x1b[36m');
            break;
        case 2:
            await typeColor("I have money to give ! You are poor right ? Of course you're poor look at you...", 55, '\x1b[36m');
            break;
        case 3:
            await typeColor("Don't be so mean... I have money to give ! You are poor right ? Of course you're poor look at you...", 55, '\x1b[36m');
            break;
        default:
            await typeColor("Err.. What did you say ? ",55, '\x1b[36m');
            await typeColor("Okay whatever I have a job to offer you, and you will get paid !",55, '\x1b[36m');
            break;
    }
    await typeColor("Listen up, I'm a solder from far away and I heard about the rumor of the old Tower.",55, '\x1b[36m');
    await Rumor();

}
async function Rumor(){
    await typeBold("\nChoose :",55);
    await typeBold("1- Ask about the rumor",55);
    await typeBold("2- Stay silent",55);
    await typeBold("3- Criticize the rumor",55);

    let response =0;
    try {
        const answer = await askQuestion("");
        //console.log(`[Script 3] Received input from Script 1: ${answer}`);

        if(answer==="1"){
            await typeText("\nYou : Rumor, what rumor ?", 55);
            response = 1;
        }
        else if(answer==="2"){
            await typeText("\nYou : ...", 55);

            staysilentCOUNT ++;
            if(staysilentCOUNT >= 2){
                response = 4; //avertissement
            }
            else response = 2;
        }
        else if (answer ==="3"){
            await typeText("\nYou : You mean the stupid rumor that got many people killed ? Yeah it's not a rumor. It's real.", 55);

            disagreeCOUNT ++;
            if(disagreeCOUNT >= 2){
                response = 5;//avertissement
            }
            else response = 3;
        }
        else {
            await typeText("\nYou : " + reverseString(answer), 55);

            charabiaCOUNT ++;
            if(charabiaCOUNT >= 2){
                response = 6;//avertissement
            }
            else response = 0;
        }
        await Rumor_result(response);

    } catch (error) {
        console.error("[Script 2] Error in Page:", error);
    } finally {
        //ask.close();
    }
}
async function Rumor_result(response) {
    console.log("\n");
    switch (response) {
        case 1:
            await typeColor("What do you mean 'What rumor ?' you leave here everybody knows that rumor around here.", 55, '\x1b[36m');
            await typeColor("I'm talking about the rumor saying that many Princes tried to save the Princess living in the tower ages ages !",55, '\x1b[36m');
            await typeColor("She's dead now and every so-called monsters in it are too ",55, '\x1b[36m');
            break;
        case  2 :
            await typeColor("... Okay hum... So I was thinking of a way to make money and the rumor states that many princes tries to save the Princess back in the days. ", 55, '\x1b[36m');
            break;
        case 3 :
            await typeColor("Stupid rumor you say ? Haha... I'll act as if you didn't just say that.", 55, '\x1b[36m');
            await typeColor("Anyway that rumor talks about the many Princes that tried to save the Princess and died. ", 55, '\x1b[36m');
            break;
        case  4 :
            await typeColor("Silent again. Huh.", 55, '\x1b[36m');
            await typeColor("... So I was thinking of a way to make money and the rumor states that many princes tries to save the Princess back in the days. ", 55, '\x1b[36m');
            break;
        case  5 :
            await typeColor("Stating I'm wrong again. Alright.", 55, '\x1b[36m');
            await typeColor("Anyway that rumor talks about the many Princes that tried to save the Princess and died.", 55, '\x1b[36m');
            break;
        case  6 :
            await typeColor("Speaking in another language again.", 55, '\x1b[36m');
            await typeColor("Many Princes tried to save the Princess, but it's been ages ! She's dead and every so-called monsters in it are too ",55, '\x1b[36m');
            break;

        default:
            await typeColor("Okay...",55, '\x1b[36m');
            await typeColor("Many Princes tried to save the Princess, but it's been ages ! She's dead and every so-called monsters in it are too ",55, '\x1b[36m');
            break;
    }
    await typeColor("And Princes are mad rich... They probably had gold on their clothes and many gems on their swords... Right ?",55, '\x1b[36m');
    await Gems();
}

async function Gems(){
    await typeBold("\nChoose :",55);
    await typeBold("1- Agree",55);
    await typeBold("2- Disagree",55);
    await typeBold("3- Stay silent",55);

    let response =0;
    try {
        const answer = await askQuestion("");
        //console.log(`[Script 3] Received input from Script 1: ${answer}`);

        if(answer==="1"){
            await typeText("\nYou : Yes of course, status indicates wealth.", 55);
            response = 1;
        }
        else if(answer==="2"){
            await typeText("\nYou : I'm not sure, I don't think they would go on mission that could kill them covered in gold and precious stones...", 55);
            disagreeCOUNT ++;
            if(disagreeCOUNT >=2){ //second time we disagree with the solder
                response = 5;
            }
            else  response = 2;
        }
        else if (answer==="3"){
            await typeText("\nYou : ...", 55);
            staysilentCOUNT ++;
            if(staysilentCOUNT >=2){ //second time we are silent
                response = 6;
            }
            else response = 0;
        }
        else {
            await typeText("\nYou : "+ reverseString(answer), 55);
            charabiaCOUNT++;
            if(charabiaCOUNT >=2){ //second time we are saying sh*t
                response = 4;
            }
            else response = 3;
        }
        await Gems_results(response);

    } catch (error) {
        console.error("[Script 2] Error in Page:", error);
    } finally {
        //ask.close();
    }
}

async function Gems_results(response) {
    console.log("\n");
    switch (response) {
        case 0:
            await typeColor("You don't talk much, do you ?", 55, '\x1b[36m');
            await typeColor("Alright well... my plan is to go in the tower, get out gold from the princes dead body and I need you to make sure nobody goes in.", 55, '\x1b[36m');
            await AcceptMission();
            break;
        case 1:
            await typeColor("Yeah I know. So... here my plan. I need you to wait for me outside the tower and make sure nobody goes in. I'll pay you once I'm done.", 55, '\x1b[36m');
            await typeColor("Are you in ? ", 55, '\x1b[36m');
            await AcceptMission();
            break;
        case 2:
            await typeColor("...", 55, '\x1b[36m');
            await typeColor("Listen buddy. Don't ever disagree with me. Ever again. Got it ?", 55, '\x1b[36m');
            await DisagreeLastChance();
            break;
        case 3:
            await typeColor("... What ? Hum ok ?", 55, '\x1b[36m');
            await typeColor("Yeah I know. So... here my plan. I need you to wait for me outside the tower and make sure nobody goes in. I'll pay you once I'm done.", 55, '\x1b[36m');
            await typeColor("Are you in ? ", 55, '\x1b[36m');
            await AcceptMission();
            break;
        case 4:
            await typeColor("... This again ? I don't get what you're saying.", 55, '\x1b[36m');
            await typeColor("Yeah I don't think this is going to work out if I can't understand you...", 55, '\x1b[36m');
            await typeColor("Forget it. I'll ask someone else. Goodbye.", 55, '\x1b[36m');
            await End(3);
            break;
        case 5:
            await typeColor("...", 55, '\x1b[36m');
            await typeColor("You have a gift to annoy me.", 55, '\x1b[36m');
            await typeColor("I was going to ask you to come with me but... nevermind I don't want you anymore", 55, '\x1b[36m');
            await typeColor("Good luck getting out of poverty looser.", 55, '\x1b[36m');
            await End(1);
            break;
        default:
            await typeColor("...", 55, '\x1b[36m');
            await typeColor("You are so annoying.", 55, '\x1b[36m');
            await typeColor("I was going to ask you to come with me but... nevermind I don't want you anymore", 55, '\x1b[36m');
            await typeColor("Good luck getting out of poverty looser.", 55, '\x1b[36m');
            await End(2);
            break;
    }
}

async function DisagreeLastChance(){
    await typeBold("\nChoose :",55);
    await typeBold("1- Excuse yourself",55);
    await typeBold("2- Stay silent",55);
    await typeBold("3- Stand up to him",55);

    let response =0;
    try {
        const answer = await askQuestion("");

        if(answer.toLowerCase()==="1"){
            await typeText("\nYou : Sorry sir.", 55);
            response = 1;
        }
        else if(answer.toLowerCase()==="2"){
            await typeText("\nYou : ...", 55);
            staysilentCOUNT ++;
            if(staysilentCOUNT >=2){ //second time we are silent
                response = 3;
            }
            else response = 2;
        }
        else if(answer.toLowerCase()==="3"){
            await typeText("\nYou : No. I'm right and you are wrong. ", 55);
            disagreeCOUNT ++;
            response = 4;
        }
        else {
            await typeText("\nYou : "+ reverseString(answer), 55);
            charabiaCOUNT++;
            if(charabiaCOUNT >=2){ //second time we are saying sh*t
                response = 0;
            }
            else response = 5;
        }
        await DisagreeLastChance_result(response);

    } catch (error) {
        console.error("[Script 2] Error in Page:", error);
    } finally {
        //ask.close();
    }
}

async function DisagreeLastChance_result(response){
    console.log("\n");
    switch (response) {
        case 1:
            await typeColor("Good.", 55, '\x1b[36m');
            await typeColor("Are you in ? ", 55, '\x1b[36m');
            await AcceptMission();
            break;
        case 2:
            await typeColor("Staying silent huh. Well it's better than stating i'm wrong.", 55, '\x1b[36m');
            await typeColor("Alright well... my plan is to go in the tower, get out gold from the princes dead body and I need you to make sure nobody goes in.", 55, '\x1b[36m');
            await AcceptMission();
            break;
        case 3:
            await typeColor("...", 55, '\x1b[36m');
            await typeColor("You like being silent a little bit too much for me.", 55, '\x1b[36m');
            await typeColor("I need someone that can check out for me outside of the tower. If you can't speak, you're no fit for the job.", 55, '\x1b[36m');
            await typeColor("Forget what I said. I will find someone else.", 55, '\x1b[36m');
            await End(2);
            break;
        case 4:
            await typeColor("...", 55, '\x1b[36m');
            await typeColor("You are so annoying.", 55, '\x1b[36m');
            await typeColor("I was going to ask you to come with me but... nevermind I don't want you anymore", 55, '\x1b[36m');
            await typeColor("Good luck getting out of poverty looser.", 55, '\x1b[36m');
            await End(1);
            break;
        case 5:
            await typeColor("Huh sure, whatever you say...", 55, '\x1b[36m');
            await typeColor("Alright well... my plan is to go in the tower, get out gold from the princes dead body and I need you to make sure nobody goes in.", 55, '\x1b[36m');
            await AcceptMission();
            break;
        default :
            await typeColor("Okay I don't know if you are playing with me saying whatever and speaking freaking chinese but I'm done.", 55, '\x1b[36m');
            await typeColor("You are so annoying. Forget everything I said.", 55, '\x1b[36m');
            await End(3);
            break;
    }
}

async function AcceptMission(){
    await typeBold("\nChoose :",55);
    await typeBold("1- Accept the mission",55);
    await typeBold("2- Say you'll think about it",55);
    await typeBold("3- Refuse the mission",55);
    await typeBold("4- Stay silent",55);

    let response =0;
    try {
        const answer = await askQuestion("");

        if(answer.toLowerCase()==="1"){
            await typeText("\nYou : Alright. I'm in.", 55);
            response = 1;
        }
        else if(answer.toLowerCase()==="2"){
            await typeText("\nYou : I'm not sure, I will think about it. ", 55);
            disagreeCOUNT ++;
            response = 2;
        }
        else if(answer.toLowerCase()==="3"){
            await typeText("\nYou : Nah... I'm not interested. ", 55);
            disagreeCOUNT ++;
            response = 3;
        }
        else if(answer.toLowerCase()==="4"){
            await typeText("\nYou : ...", 55);
            staysilentCOUNT ++;
            response = 4;
        }
        else {
            await typeText("\nYou : " + reverseString(answer), 55);
            charabiaCOUNT ++;
            response = 0;
        }
        //await DisagreeLastChance_result(response);

    } catch (error) {
        console.error("[Script 2] Error in Page:", error);
    } finally {
        //ask.close();
    }
}

async function End(end_number){
    console.log("\n");
    switch (end_number) {
        case 1: //fail : pissed of the solder
            await typeColor("You failed your mission. You were supposed to discover the truth about the Tower, but the solder decided not to take you with him because you pissed him off.",55, '\x1b[31m');
            await typeColor("You are now stuck in this dimension. Goodbye.",55, '\x1b[31m');
            break;
        case 2: //fail : stayed silent too often
            await typeColor("You failed your mission. You were supposed to discover the truth about the Tower, but the solder decided not to take you with him because you stay silent too much.",55, '\x1b[31m');
            await typeColor("You are now stuck in this dimension. Goodbye.",55, '\x1b[31m');
            break;
        case 3: //fail : spoke verlan
            await typeColor("You failed your mission. You were supposed to discover the truth about the Tower, but the solder decided not to take you with him because you spoke a weird language.",55, '\x1b[31m');
            await typeColor("You are now stuck in this dimension. Goodbye.",55, '\x1b[31m');
            break;
        default:
            await typeColor("You failed your mission. You were supposed to discover the truth about the Tower.",55, '\x1b[31m');

            break;
    }
}


main().then(r => {});
