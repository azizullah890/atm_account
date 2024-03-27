#!/usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let mypin = 1234;
console.log(`totalAmunt ${balance}`);
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "enter your pin",
        type: "number",
    }]);
if (pinAnswer.pin === mypin) {
    console.log("correct pin code");
    let opr = await inquirer.prompt([{
            name: "operation",
            message: "select one opereator",
            type: "list",
            choices: ["withdraw", "check Balance", "fastcash"],
        }]);
    if (opr.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter the amount withdraw",
                type: "number"
            }]);
        if (amountAns.amount < balance) {
            balance -= amountAns.amount;
            console.log("now your balance is " + balance);
        }
        else {
            console.log("inuficient balance");
        }
    }
    else if (opr.operation === "check Balance") {
        console.log("your current balance is" + balance);
    }
    else if (opr.operation === "fastcash") {
        let fast = await inquirer.prompt([{
                name: "fast_opt",
                message: "How much money use withdraw",
                type: "list",
                choices: ["1000", "2000", "5000"]
            }]);
        if (fast.fast_opt === "1000") {
            balance -= fast.fast_opt;
            console.log(`your remaining balance is ${balance}`);
        }
        if (fast.fast_opt === "2000") {
            balance -= fast.fast_opt;
            console.log(`your remaining balance is ${balance}`);
        }
        if (fast.fast_opt === "5000") {
            balance -= fast.fast_opt;
            console.log(`your remaining balance is${balance}`);
        }
    }
    else {
        console.log('invalid pin code');
    }
}
else {
    console.log("incorrect pin number");
}
/*
    
*/ 
