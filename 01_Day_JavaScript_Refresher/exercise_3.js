const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function checkAge(age) {

    const userAge = Number(age);

    if (isNaN(userAge) || userAge <= 0) {
        return "Please enter a valid number greater than 0.";
    } else if (userAge >= 18) {
        return "You are old enough to drive.";
    } else {
        const yearsLeft = 18 - userAge;
        return `You are left with ${yearsLeft} years to drive.`;
    }

}


rl.question("Enter your age : ", (age) => {
    console.log(checkAge(age));
    rl.close();
});