// SCRIPTS STARTS HERE.

/* 
    PART 1: Let's Practice Variables, Data Types and Decision-Making Using `if` Statements.
*/
// Declaring Variables with Various Data Types.
let name = "Divine"; //String
let country = "Nigeria"; //String
const birth_year = 1996; //Number
var weight = 60.15; //Float(in Kg).
let isFemale = true; //Boolean
let empty = null; //Null value
let height; //Undefined

// Data Structures Declaration
let fruits = ["Mango🥭", "Kiwi🥝", "Pineapple🍍", "Apple🍎", "Strawberry🍓", "Grape🍇"];
let person = {
    name: "Divine",
    age: 19,
    country: "Malaysia",
    isStudent: true,
    height: 170.5 //(in cm)
};


// Decision-Making Using `if` Statement.
// let message = document.write("All results for prompted questions and other DOM manipulations will be displayed in the console terminal!");
// message.style.fontSize = "1.5rem";
// message.style.textAlign = "center";

let first_name = prompt("Please enter your name: ");
let ageInput = prompt("Please enter your age: ");
const age = Number(ageInput);

// console.log("All results will be displayed in the console terminal!");

if (age == "" || isNaN(age)) {
    console.log(`${first_name}, You have entered and invalid input.`);
} else if (age >= 100) {
    console.log(`${first_name}, I believe by now, alcohol should be out of diet.`);
} else if (age >= 40) {
    console.log(`${first_name}, I know you are old enough to drink, but please reduce intake.`);
} else if (age >= 20) {
    console.log(`${first_name}, You are now an adult and of legal drinking age, but don't make it a habit.`);
} else {
    console.log(`${first_name}, I believe you are still too young to drink.`);
}

console.log("\n");

/* 
    PART 2: The Heart of Reusability, Defining JavaScript Functions...
*/ 

// RESULT CHECKER SCRIPTS...

// FUNCTION TO CHECK RESULT

function result_checker() {
    const resultInp = document.getElementById("resultInp").value.trim();
    const result = document.getElementById("result");

    // Convert input to number
    const score = Number(resultInp);

    // Check if input is a valid number
    if (resultInp === "" || isNaN(score)) {
        result.textContent = "You have entered an invalid input❌.";
    } else if (score > 100) {
        result.textContent = "Scores cannot be more than 100🚫!";
    } else if (score >= 90) {
        result.textContent = "You got an A, Excellent Job⭐⭐!";
    } else if (score >= 80) {
        result.textContent = "You got a B, Good Job🤓👍!";
    } else if (score >= 70) {
        result.textContent = "You got a C, Not Bad👏!";
    } else if (score >= 60) {
        result.textContent = "You got a D, Try Harder💪!";
    } else if (score >= 0) {
        result.textContent = "You have failed. Try Again✍✍!";
    } else {
        result.textContent = "Score cannot be negative🚫.";
    }
}

// SIMPLE INTEREST SCRIPTS

// ADDEVENTLISTENER BUTTON FUNCTION TO CALCULATE SIMPLE INTEREST.
const btn = document.getElementById("interestCalc");
btn.addEventListener('click', () => {
  const principalInp = document.getElementById("principal").value.trim();
    const rateInp = document.getElementById("rate").value.trim();
    const timeInp = document.getElementById("time").value.trim();
    const result = document.getElementById("interestResult");

    // Convert input fields to float and value-input error checking.
    const principal = parseFloat(principalInp);
    const rate = parseFloat(rateInp);
    const time = parseFloat(timeInp);

    // Empty values checking
    if (!principalInp || !rateInp || !timeInp) {
        result.textContent = `You have not entered all inputs. Please fill in all the fields.`;
        return;
    }

    if (Number.isNaN(principal) || Number.isNaN(rate) || Number.isNaN(time)) {
        result.textContent = `You have entered an invalid input. Please enter valid numeric values.`;
        return;
    }

    // Calculate Simpe Interest.
    const simpleInterest = (principal * rate * time) / 100;
    
    result.textContent = `Simple Interest Calculated: \$${simpleInterest.toFixed(2)}`;
});

// FUNCTION TO CALCULATE SIMPLE INTEREST
function simple_interest() {
    const principalInp = document.getElementById("principal").value.trim();
    const rateInp = document.getElementById("rate").value.trim();
    const timeInp = document.getElementById("time").value.trim();
    const result = document.getElementById("interestResult");

    // Convert input fields to float and value-input error checking.
    const principal = parseFloat(principalInp);
    const rate = parseFloat(rateInp);
    const time = parseFloat(timeInp);

    // Empty values checking
    if (!principalInp || !rateInp || !timeInp) {
        result.textContent = `You have not entered all inputs. Please fill in all the fields.`;
        return;
    }

    if (Number.isNaN(principal) || Number.isNaN(rate) || Number.isNaN(time)) {
        result.textContent = `You have entered an invalid input. Please enter valid numeric values.`;
        return;
    }

    // Calculate Simpe Interest.
    const simpleInterest = (principal * rate * time) / 100;
    
    result.textContent = `Simple Interest Calculated: \$${simpleInterest.toFixed(2)}`;
}



/* 
    PART 3: Repititions: Making Practical Use of Loops in JavaScript...
*/

// Using the previously declared variables fruits and person to iterate through.
console.log("Iterating through an array to print out the fruits.");
for (let i of fruits) {
  console.log(`I love ${i}.`);

}

// Let's attach to HTML while iterating through the array 'fruits' using the forEach loop.
const ul =  document.getElementById("lists");
const para = document.createElement("p");

para.style.fontFamily = "Verdana, Geneva, Tahoma, serif";
para.style.fontSize = "1.3rem";
para.style.fontWeight = "400";
para.style.textAlign = "start";

para.textContent = "Some of my favourite fruits are namely: ";
ul.appendChild(para);
fruits.forEach( fruit => {
  const li = document.createElement("li");
  li.style.fontSize = "1.2rem";
  li.style.fontFamily = "Verdana, Geneva, Tahoma, serif";
  li.style.fontWeight = "400";
  li.textContent = `I love ${fruit}`;

  // Append to ul
  ul.appendChild(li);
});


// Iterating through the object person.
console.log("\nIterating through the object 'person'.");
console.log(`The information of the object person: `);
for (let key in person) {
  
  console.log(`${key}: ${person[key]}`);
}

// Iterating through a list of students using te for loop.
let students = ["Divine", "Lily", "Esther", "Emma", "Victor", "Peter", "Paul", "Vivian", "Mimi"];
console.log("\nIterating through a list of students in a lesson class.");
console.log(`There are ${students.length} in this Python class, namely: `);
for (let i = 0; i < students.length; i++) {
  console.log(`Student${i + 1}: ${students[i]}.`);
}

// Using while loop to countdown to new year.
let count = 10;

console.log("\nNew Year Countdown begins: ");
while(count > 0) {
  console.log(`${count}`);
  count--;
}
console.log("Happy New Year.");


// Using a for loop to simulate a simple animation (e.g., a loading bar)
console.log("\nSimulating a loading bar:");
for (let i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log(`Loading: ${i * 10}%.`);
  }, i * 500); // every 500ms
}

