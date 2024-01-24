const fs = require('fs');
const { typeText } = require('./typescript/typescript.js');
const { typeBold } = require('./typescript/typescript_bold.js');

const { spawn } = require('child_process');
const readline = require("readline");

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

let bool_next_page_success = false;
async function main(){

    //on fait un petit message subliminal pour faire patienter
    await typeText(" ",10);
    await typeText("=================Charging=================",20);
    await typeText(" ",10);

    /*

    await typeText("It looks like you were transferred into a medieval village as a small, young, and poor boy.",55);
    await typeText("Oh your information sheet even talks about your missing father and your (almost) dead mother !",55);
    await typeText("Here take a look :",55);

    await typeText(page12,3);

     */
    await typeText("Try to go onto the next page by entering the page number you want to see :",55);

    await Page();

}

async function Page() {

    const ask = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    ask.question("", async (number) => {

        if (number === "1" || number === "2") //page12
        {
            await typeText(page12, 3);
            await typeText("This is the first page, you already read it. Change page : ", 55);
            await Page();
        } else if (number === "3" || number === "4") //page12
        {
            await typeText(page34, 3);
            await typeText("Enter anything to start the story", 55);
            ask.close();
            Go();
        } else {
            await typeText("Please provide a valid page number (1 to 4)", 55);
            await Page();
        }
    });

    process.stdin.on('data', async (data) => {
        const number = data.toString().trim();
        if (number === "1" || number === "2") //page12
        {
            await typeText(page12, 3);
            await typeText("This is the first page, you already read it. Change page : ", 55);
            await Page();
        } else if (number === "3" || number === "4") //page12
        {
            await typeText(page34, 3);
            await typeText("Enter anything to start the story", 55);
            ask.close();
            Go();
        } else {
            await typeText("Please provide a valid page number (1 to 4)", 55);
            await Page();
        }
    });



}

function Go(){
    const ask1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    ask1.question("", async (number) => {

        await typeBold("Great ! Now that you are aware of your surroundings I will leave you be. ",55);
        await typeText("...",55);
        ask1.close();
        To_First_Mission();

    });
/*
    process.stdin.on('data', async (data) => {
        await typeBold("Great ! Now that you are aware of your surroundings I will leave you be. ",55);
        await typeText("...",55);
        To_First_Mission();
    });

 */
}

function To_First_Mission(){

    const secondScript = spawn('node', ['./src/mission1.js']);

    secondScript.stdout.pipe(process.stdout);
    // Handle any errors that occur in the second script
    secondScript.on('error', (err) => {
        console.error(`Error occurred in second script: ${err}`);
    });

    // Handle the completion of the second script
    secondScript.on('close', (code) => {
        console.log(`Second script exited with code ${code}`);
        process.exit();
    });

}


main().then(r => {});
