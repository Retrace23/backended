const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("what is your name? ", function(name) {
   console.log("Hi " + name + " ");
   rl.question("How old are you? ", function(age) {
   console.log(`\nHello ${name} `);
   console.log(`You are ${age} years old`);
   console.log("welcome to Node.js world");
    rl.close();
});
});