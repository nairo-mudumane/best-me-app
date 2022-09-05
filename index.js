const questions = [
  "What I learned today?",
  "What made me upset?",
  "What would I make better?",
  "What made me happy?",
  "How many people I helped today?",
];

const ask = (index = 0) => {
  return process.stdout.write(questions[index] + "\n");
};

ask();

process.stdin.on("data", (data) => {
  process.stdout.write("Answer:" + data.toString().trim() + "\n");
  process.exit();
});
