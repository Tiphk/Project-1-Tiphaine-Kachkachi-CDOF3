const readline = require('readline');
const { typeText } = require('./typescript/typescript.js');
const {spawn} = require("child_process");

let page12 = "\n"+
    "==================================================================================================\n" +
    "-                                                =                                               -\n" +
    "-     There was a very dark time when rumors     =  The number of deaths was so great that no    -\n" +
    "-     were part of the daily life of all         =    one approached the tower anymore,          -\n" +
    "-     commoners, regardless of what they         =  well aware of the fate that awaited them.    -\n" +
    "-                 might say.                     =                                               -\n" +
    "-     In the realms of a distant kingdom,        =     Years passed, and gradually, the entire   -\n" +
    "-    hidden behind a mysterious forest, stood    =    people forgot about the existence of the   -\n" +
    "- an old tower that once belonged to a princess. =  princess, who remained in her tower waiting  -\n" +
    "-  It is said that in the past, when tradition   =               for her savior.                 -\n" +
    "-  was still upheld, many princes tried, albeit  =     On the outskirts of the gloomy forest,    -\n" +
    "-  unsuccessfully, to face the monsters living   =      a warm village came into existence...    -\n" +
    "-     in the tower in an attempt to rescue       =    You were transferred into this village.    -\n" +
    "-                the princess.                   =         You must discover the truth           -\n" +
    "-    Unfortunately, none of them emerged alive.  =               behind the rumors.              -\n" +
    "-                                              1 =                                             2 -\n" +
    "==================================================================================================\n";

let page34 = "\n" +
    "==================================================================================================\n" +
    "-                                                =                                               -\n" +
    "-     In this world you are small and fragile    =         Chapter 1 : The First Choice          -\n" +
    "-     young boy. You are trying to make money    =                                               -\n" +
    "-     by selling flowers picked in the nearby    =                    ...                        -\n" +
    "-      forest. You never met your dad and your   =                                               -\n" +
    "-     mother is on the verge of death.           =                                               -\n" +
    "-                                                =                                               -\n" +
    "-         Your story ends here for now.          =                                               -\n" +
    "-     Complete choices and come back here        =                                               -\n" +
    "-          to check your story.                  =                                               -\n" +
    "-                                                =                                               -\n" +
    "-                                                =                                               -\n" +
    "-                                                =                                               -\n" +
    "-                                                =                                               -\n" +
    "-                                              3 =                                             4 -\n" +
    "==================================================================================================\n" ;

async function Page() {
    try {
        const number = await askQuestion("");
        //console.log(`[Script 2] Received input from Script 1: ${number}`);

        if (number === "1" || number === "2") {
            await typeText("This is the first page, you already read it. Change page : ", 55);
            await Page();

        } else if (number === "3" || number === "4") {
            //await typeText(page34,3);

            await Start();

        } else {
            await typeText("Please provide a valid page number (1 to 4)", 55);
            await Page();

        }
    } catch (error) {
        console.error("[Script 2] Error in Page:", error);
    } finally {
        //ask.close();
    }
}

async function Start() {
    await typeText("When you're ready, enter anything to start the story", 55);
    try {
        const number = await askQuestion("");
        //console.log(`[Script 2] Received input from Script 1: ${number}`);

        launchScript3();

    } catch (error) {
        console.error("[Script 2] Error in Page:", error);
    } finally {
        //ask.close();
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

async function main(){

    /*

    await typeText("It looks like you were transferred into a medieval village as a small, young, and poor boy.",55);
    await typeText("Oh your information sheet even talks about your missing father and your (almost) dead mother !",55);
    await typeText("Here take a look :",55);
    await typeText(page12,3);


     */
    await typeText("Try to go onto the next page by entering the page number you want to see :",55);
    await Page();

}

main();

function launchScript3(dataToSend) {
    const thirdScript = spawn('node', ['./src/mission1.js'], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    thirdScript.stdin.write(JSON.stringify(dataToSend) + '\n');

    thirdScript.stdout.on('data', (data) => {
        process.stdout.write(data.toString());
    });

    thirdScript.on('close', (code) => {
        console.log("Script 3 exited with code", code);
    });
}
/*
async function typeText(text, delay) {
   // console.log(`[Script 2] Outputting text: ${text}`);
    await new Promise(resolve => setTimeout(resolve, delay));
}

 */
