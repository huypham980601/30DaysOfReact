const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A";
    } else if (score >= 70 && score <= 79) {
        return "B";
    } else if (score >= 60 && score <= 69) {
        return "C";
    } else if (score >= 50 && score <= 59) {
        return "D";
    } else if (score >= 0 && score <= 49) {
        return "F";
    } else {
        return "Invalid score";
    }
}

rl.question("Enter the student's score (0-100): ", (input) => {
    const score = Number(input);

    if (isNaN(score) || score < 0 || score > 100) {
        console.log("Please enter a valid score between 0 and 100.");
    } else {
        console.log(`The grade for score ${score} is: ${getGrade(score)}`);
    }

    rl.close();
});