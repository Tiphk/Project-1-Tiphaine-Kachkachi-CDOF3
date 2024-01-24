const readline = require('readline');
function typeBold(text,time) {

    return new Promise(resolve => {
        if(time === 0 || time < 0 || time == null) time = 55;
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                const boldText = '\x1b[1m' + text[i] + '\x1b[0m';
                process.stdout.write(boldText);

                if (i === text.length - 1) {
                    console.log();
                    resolve();
                }
            }, time * i);
        }
    });

}
module.exports = { typeBold };