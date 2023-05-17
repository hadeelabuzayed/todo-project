
"use strict";
let userName = prompt('Enter your name');
console.log(userName)
let gender = prompt('Enter your gender(male or female)');
console.log(gender);
let age = prompt('Enter your age');
console.log(age)
if (age <= 0) {
    alert('invalid age')
}


let confirmWelcome = confirm('Do you want to skip welcoming messege?');
if (confirmWelcome === false) {
    if (gender === 'female')
        alert('welcome ms. ' + userName)
    else if
        (gender === 'male')
        alert('welcome mr. ' + userName)
    else

        alert('welcome ' + userName)
}

//}

// let q1 = 
// console.log(q1)
// let q1Answer;
// if (q1 === '') {
//     q1Answer = 'invalid'
//     alert('your answer is invalid')
//     console.log(q1Answer)
// }
// else {
//     q1Answer = q1;
// }


// let q2 = prompt('Do you have a laptop ?')
// console.log(q2)
// let q2Answer;
// if (q2 === '') {
//     q2Answer = 'invalid'
//     alert('your answer is invalid')

//     console.log(q2Answer)
// }
// else {
//     q2Answer = q2;
// }

// let q3 = prompt('Do you like Javascript?')
// console.log(q3)
// let q3Answer;
// if (q3 === '') {
//     q3Answer = 'invalid'
//     alert('your answer is invalid')

//     console.log(q3Answer)
// }
// else {
//     q3Answer = q3;
// }
// let arr=[];
// arr.push(q1Answer, q2Answer, q3Answer);
// for (let n = 0; n < arr.length; n++){
//     console.log(arr[n])

// }
const answers = [];

function askquestion(question) {
    if (!question) {
        return 'invalid';
    }

    const answer = prompt(question + ' (Yes/No)').toLowerCase();

    if (answer === 'yes' || answer === 'no') {
        answers.push(answer);
    } else {
        answers.push('invalid');
    }

    return answer;
}

askquestion('Do you like coffe?');
askquestion('Have you ever been swimming?');
askquestion('Do you like javascript?');

console.log(answers);