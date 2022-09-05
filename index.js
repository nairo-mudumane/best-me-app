const questions = [
  "What I learned today?",
  "What made me upset?",
  "What would I make better?",
  "What made me happy?",
  "How many people I helped today?",
];

const ask = (index = 0) => {
  return process.stdout.write("\n" + questions[index] + " >");
};

ask();

const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data);
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  console.log(`
  ====================
  Great Nairo!

  ${questions[0].slice(0, questions[0].length - 1)} was:
  ${answers[0]}

  ${questions[1].slice(0, questions[0].length - 1)} was:
  ${answers[1]}

  ${questions[2].slice(0, questions[0].length - 1)} was:
  ${answers[2]}

  ${questions[3].slice(0, questions[0].length - 1)} was:
  ${answers[3]}

  ${questions[4].slice(0, questions[0].length - 1)} was:
  ${answers[4]}
  ====================
  back tomorrow for more!
  `);
});
