let x = 5;
let y = 7;
let z = x + y;

console.log(z)

let A = 'Hello ';
let B = 'world!';


let C = A + B
console.log(C)

function SumNPrint(x1, x2){
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y)

SumNPrint(A, B)

if (C.length > z) {
    console.log(C);
} else if (C.length < z){
    console.log(z)
} else {
    console.log("good job!")
}

// let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(arr) {
//     arr.forEach(function(item) {
//         if (item === "Banana") {
//             alert("We found a banana in the array");
//         }
//     });
// }

// findTheBanana(L1);
// findTheBanana(L2);

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting = "";

    if (h >= 0 && h < 5) {
        greeting = "Good night";
    } else if (h >= 5 && h < 12) {
        greeting = "Good morning";
    } else if (h >= 12 && h < 18) {
        greeting = "Good afternoon";
    } else if (h >= 18 && h < 22) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }

    let E = document.getElementById("greeting");
    if (E) {
        E.innerHTML = greeting + ", I'm Emma Wong!";
    }
    console.log(greeting)
}

if (window.location.href.indexOf("index.html") > -1) {
    greetingFunc();
} else {
    console.log ("Not on index.html; greetingFunc() was not invoked.");
}

function addYear() {
    const currentYear = new Date().getFullYear();
    const copyYearElem = document.getElementById('copyYear');
    // Append the current year to the existing text or update as needed
    copyYearElem.textContent += " © " + currentYear;
}

function showList() {
    document.getElementById('funList').style.display = 'block';
    document.getElementById('showListBtn').style.display = 'none';
}


$(document).ready(function() {
    $('#readMore').click(function() {
         $('#shortBio').hide();
         $('#fullBio').show();
    });
    $('#readLess').click(function() {
         $('#fullBio').hide();
         $('#shortBio').show();
    });
});

function validateForm(event) {
    console.log("HIIIII")
    let errorMessage = "";
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    if (!nameField.checkValidity()) {
        errorMessage += "Please enter your name.<br>";
    }
    if (!emailField.checkValidity()) {
        errorMessage += "Please enter a valid email address.<br>";
    }
    if (!messageField.checkValidity()) {
        errorMessage += "Please enter your message.<br>";
    }

    console.log("HELLO asdf")
    if (errorMessage) {
        console.log("HELLO WOWER")
        document.getElementById('errorMessage').innerHTML = errorMessage + " Please re-input your responses correctly so I can get back to you.";
        return false;
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!");

    let form = document.getElementById("myForm");
    console.log(form);
    // console.log(form.onsubmit);

    if (!form) {
        console.error("Form not found!");
        return;
    }
    // form.addEventListener("submit", validateForm)

    form.onsubmit = function () {
        console.log("Form submitted!");
        return validateForm();
    };
    // console.log(form.onsubmit);
});


// function validateForm() {
//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let message = document.getElementById("message").value.trim();
//     let errorMessage = document.getElementById("errorMessage");

//     if (name === "" || email === "" || message === "") {
//         errorMessage.textContent = "All fields are required!";
//         return false; // Prevent form submission
//     }

//     errorMessage.textContent = ""; // Clear any previous error messages
//     return true; // Allow form submission
// }