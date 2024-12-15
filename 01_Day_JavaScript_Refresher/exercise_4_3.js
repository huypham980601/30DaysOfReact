const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function checkDay(day) {
    const lowerDay = day.toLowerCase();
    if (["saturday", "sunday"].includes(lowerDay)) {
        return `${day} is a weekend.`;
    } else if (
        ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(lowerDay)
    ) {
        return `${day} is a working day.`;
    } else {
        return "Invalid day";
    }
}

rl.question("Enter the name of a day: ", (month) => {
    console.log(checkDay(month));
    rl.close();
});