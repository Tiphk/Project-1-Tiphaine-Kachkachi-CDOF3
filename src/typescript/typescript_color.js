const readline = require('readline');


function typeColor(text,time,mycolor) {
    const noir = '\x1b[0m';
    return new Promise(resolve => {
        if(time === 0 || time < 0 || time == null) time = 55;
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                const colorText = mycolor + text[i] + '\x1b[0m';
                process.stdout.write(colorText);

                if (i === text.length - 1) {
                    console.log();
                    resolve();
                }
            }, time * i);
        }
    });

}
module.exports = { typeColor };
