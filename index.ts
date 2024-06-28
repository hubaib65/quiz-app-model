#!/usr/bin/env node
import inquirer from "inquirer";

const Quiz: {
    q1 : string;
    q2 : string;
    q3 : string;
    q4 : string;
    q5 : string;
} = await inquirer.prompt ([
    {
        name : "q1",
        type : "list",
        message : " What is the default value of a variable declared with let but not initialized?",
        choices : ["any","never","undefined","void"],
    },
    {
        name : "q2",
        type : "list",
        message : "Which TypeScript data type represents values that never occur?",
        choices :["null","never","undefined","void"],
    },
    {
        name : "q3",
        type : "list",
        message : "What is a variable in programming?",
        choices : ["A fixed value","A placeholder for data that can change","A type of function","A kind of loop"],
    },
    {
        name : "q4",
        type : "list",
        message : "What will be the output of the following code? console.log(x); var x = 5;",
        choices : ["5","reference error","undefined","type error"],
    },
    {
        name : "q5",
        type : "list",
        message : " In which situation would a var declaration be preferable over let?",
        choices : ["When you need block scope for a variable.","When you need to declare a variable inside a loop.","When you want to prevent re-declaration of a variable.","When you need to use the variable across multiple functions."],
    }
]);

let score : number = 0;

switch (Quiz.q1){
    case "undefined":
    console.log("correct");
    ++score 
    break;
    default:
        console.log("incorrect");
        

}

switch (Quiz.q2){
    case "never":
    console.log("correct");
    ++score 
    break;
    default:
        console.log("incorrect");
        

}

switch (Quiz.q3){
    case "A placeholder for data that can change":
    console.log("correct");
    ++score 
    break;
    default:
        console.log("incorrect");
        

}

switch (Quiz.q4){
    case "undefined":
    console.log("correct");
    ++score 
    break;
    default:
        console.log("incorrect");
        

}

switch (Quiz.q5){
    case "When you need to use the variable across multiple functions.":
    console.log("correct");
    ++score 
    break;
    default:
        console.log("incorrect");
        

}

console.log(`score : ${score}`);

