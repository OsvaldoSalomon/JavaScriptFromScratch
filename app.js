console.log("Hello from JS");

// if (1 + 1 === 2) {
//     console.log("Math still works");
// }
// console.log("after conditional");
// let phrase = '';
//
//
// if (phrase === 'stop') {
//     console.log("red");
// } else if (phrase === 'slow') {
//     console.log("yellow");
// } else if (phrase === 'go') {
//     console.log("green");
// } else {
//     console.log("purple");
// }

// const password = prompt("Please enter a new password");
//
// if (password.length >= 6) {
//     if (password.indexOf('') === -1) {
//         console.log("Valid password");
//     } else {
//         console.log("Password cannot contain spaces!");
//     }
// } else {
//     console.log("Password too short");
// }


const password = prompt("Enter your password");

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid password");
} else {
    console.log("Invalid password");
}








