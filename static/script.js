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

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("We found a banana in the first array");
        }
    });
}

findTheBanana(L1);
findTheBanana(L2);

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting = "";

    if (h < 12) {
        greeting = "Good morning";
    } 

    else if (h >= 12 && h < 18) {
        greeting = "Good afternoon";
    }

    else if (h >= 18 && h < 20) {
        greeting = "Good evening";
    } 
    else if (h >=20 || h< 5) {
        greeting = "Good night";
    }

    let E = document.getElementById("greeting");
    if (E) {
        E.innerHTML = greeting + ", I'm Emma Wong!";
    }
    console.log(greeting)
}

if (window.location.href.indexOf("index.html") > -1 || window.location.pathname === "/") {
    greetingFunc();
} else {
    console.log("Not on index.html; greetingFunc() was not invoked.");
}
