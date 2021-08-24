const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const answers = [];
rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {//0
  answers.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {//1
    answers.push(answer);
    rl.question("What do you listen to while doing that? ", (answer) => {//2
      answers.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc. ", (answer) => {//3
        answers.push(answer);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {//4
          answers.push(answer);
          rl.question("Which sport is your absolute favourite? ", (answer) => {//5
            answers.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {//6
              answers.push(answer);
              console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`)
              rl.close();
            });
          });
        });
      });
    });
  });
});

