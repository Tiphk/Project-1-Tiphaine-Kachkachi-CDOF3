const readline = require('readline');
function typeText(text,time) {

    return new Promise(resolve => {
        if(time === 0 || time < 0 || time == null) time = 55;
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                process.stdout.write(text[i]);

                if (i === text.length - 1) {
                    console.log();
                    resolve();
                }
            }, time * i);
        }
    });

}
module.exports = { typeText };
