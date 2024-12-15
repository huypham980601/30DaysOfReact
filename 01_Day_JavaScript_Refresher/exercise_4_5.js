const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 !== 0)
}

function getDaysInMonth(month, year) {
    const lowerMonth = month.toLowerCase();
    if (["january", "march", "may", "july", "august", "october", "december"].includes(lowerMonth)) {
        return `${month} has 31 days.`;
    } else if (["april", "june", "september", "november"].includes(lowerMonth)) {
        return `${month} has 30 days.`;
    } else if (lowerMonth === "february") {
        if (isLeapYear(year)) {
            return `${month} has 29 days because ${year} is a leap year.`;
        } else {
            return `${month} has 28 days because ${year} is not a leap year.`;
        }
    } else {
        return "Invalid month. Please enter a valid month name.";
    }
}

rl.question("Enter the name of a month: ", (month) => {
    rl.question("Enter the year: ", (yearInput) => {
        const year = Number(yearInput);
        if (isNaN(year) || year < 1) {
            console.log("Invalid year. Please enter a valid year.");
        } else {
            console.log(getDaysInMonth(month, year));
        }
        rl.close();
    });
});