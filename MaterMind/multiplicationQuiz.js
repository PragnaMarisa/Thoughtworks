const Top10Scores = [720, 660, 500, 480, 450, 180, 150, 100, 50, 30];
const Top10Names = ['Dinesh Chadra', 'Pradeep Bisit', 'Dindeshwari', 'Hari Priya', 'Mounika', 'Sudheer', 'Siressha', 'Aman B', 'usename', 'username'];

function printLeaderBoard(index) {
  if (index === 10) {
    return 0;
  }

  console.log((index + 1) + ' ' + Top10Names[index] + ' With Score: ' + Top10Scores[index] + ' ');
  return printLeaderBoard(index + 1);
}

function modifyLeaderBoard(index, CurrentScore, CurrentUserName, end) {
  if (index === end) {
    Top10Names[index] = CurrentUserName;
    Top10Scores[index] = CurrentScore;

    console.log("\t LeaderBoard \t");
    return printLeaderBoard(0);
  }

  Top10Names[end] = Top10Names[end - 1];
  Top10Scores[end] = Top10Scores[end - 1];

  return modifyLeaderBoard(index, CurrentScore, CurrentUserName, end - 1);
}

function sortLeaderBoard(CurrentScore, CurrentUserName, index) {
  if (index === Top10Scores.length || CurrentScore < Top10Scores[9]) {
    return 'You Are not in Top 10...';
  }

  if (Top10Scores[index] >= CurrentScore) {
    return sortLeaderBoard(CurrentScore, CurrentUserName, index + 1);
  }

  modifyLeaderBoard(index, CurrentScore, CurrentUserName, 9);
}

function quizOnMultiply(level, noOfQuestions, score, userName) {
  let levelNo = level;

  if (noOfQuestions === 0) {
    levelNo += 1;
    console.clear();
    console.log("\nWelcome to LEVEL " + levelNo + '\n');
  }

  if (noOfQuestions === 3) {
    noOfQuestions = -1;
  }

  const number1 = Math.round(Math.random() * 10 ** level);
  const number2 = Math.round(Math.random() * 10 ** 1);
  const actualResult = number1 * number2;

  const userResult = +(prompt(number1 + ' X ' + number2 + ' = '));

  if (userResult !== actualResult) {
    console.clear();
    console.log("Hurray!!! You Scored " + score + ' 🥳');
    sortLeaderBoard(score, userName, 0);

    const playAgain = confirm("Want to play another game??");
    if (playAgain) {
      console.clear();
      mainPart();
    }
    return 0;
  }

  score += 10 * levelNo;
  console.log("👍🏻" + ' Your CurrentScore: ' + score);
  quizOnMultiply(levelNo, noOfQuestions + 1, score, userName);
}

function prepareQuiz() {
  console.log("Welcome to the numbers world!!")

  const isUserIntrested = confirm("Are you ready for multiplication quiz?");

  if (!isUserIntrested) {
    console.log("Gain some knowledge and come back soon");
  }

  const userName = prompt("Enter your name: ");
  console.log("let's begin multiplying numbers!!!");
  return quizOnMultiply(0, 0, 0, userName);
}

prepareQuiz();
