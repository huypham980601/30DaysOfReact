const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getSeason(month) {
    const lowerMonth = month.toLowerCase();
    if (["september", "october", "november"].includes(lowerMonth)) {
        return "Autumn";
    } else if (["december", "january", "february"].includes(lowerMonth)) {
        return "Winter";
    } else if (["march", "april", "may"].includes(lowerMonth)) {
        return "Spring";
    } else if (["june", "july", "august"].includes(lowerMonth)) {
        return "Summer";
    } else {
        return "Invalid month";
    }
}

rl.question("Enter the name of a month: ", (month) => {
    console.log(getSeason(month));
    rl.close();
});