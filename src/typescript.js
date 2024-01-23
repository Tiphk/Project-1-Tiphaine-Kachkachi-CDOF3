const readline = require('readline');
function typeText(text,time) {

    return new Promise(resolve => {
        if(time === 0 || time < 0 || time == null) time = 55;
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                process.stdout.write(text[i]);

                if (i === text.length - 1) {
                    console.log(); // Print a new line after the last character is displayed
                    resolve(); // Resolve the promise when typing is completed
                }
            }, time * i); // Wait 55 milliseconds for each character (adjust the delay as needed)
        }
    });

}
module.exports = { typeText };