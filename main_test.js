const { spawn } = require('child_process');
const readline = require('readline');

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

TutoOftheGame();