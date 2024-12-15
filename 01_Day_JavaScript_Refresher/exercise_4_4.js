const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getDaysInMonth(month, year = null) {
    const lowerMonth = month.toLowerCase();
    const isLeapYear = year && (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

    if (["january", "march", "may", "july", "august", "october", "december"].includes(lowerMonth)) {
        return `${month} has 31 days.`;
    } else if (["april", "june", "september", "november"].includes(lowerMonth)) {
        return `${month} has 30 days.`;
    } else if (lowerMonth === "february") {
        return `${month} has ${isLeapYear ? 29 : 28} days.`;
    } else {
        return "Invalid month";
    }
}

rl.question("Enter the name of a month: ", (month) => {
    console.log(getDaysInMonth(month));
    rl.close();
});