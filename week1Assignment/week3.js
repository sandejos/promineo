//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [3,9,23,64,2,8,28,93];
//Programmatically subtract the value of the first element in the array from the value in the last element of the array
var last = ages[ages.length - 1];
var first = ages[0];
console.log('First age minus the last = ' + (last - first)); //prints to console the last minus the first number of the array
//Add a new age to your array and repeat the step above to ensure it is dynamic 
ages.push(15, 47,96, 22);
//Programmatically subtract the value of the first element in the array from the value in the last element of the array
var last = ages[ages.length - 1]; // finds the final age in the array
var first = ages[0]; //Finds the initial age in the array
console.log('First age minus the last = ' + (last - first)); // Prints to console the last minus the first age
// Use a loop to iterate through the array and calculate the average age. Print the result to the console. */
let sum = 0; //This initalizes the variable sum to 0
for(var i = 0; i < ages.length; i++){ // initializes some variable i and as long as its value is lower than the amount of numbers in the ages aray it will keep iterating
    sum += ages[i]; // adding the ages string 
   
}
 console.log('Average age of the ages array = ' + sum/ages.length);
//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let nameValues = names.map(function(element) {
    return element.length;
});

let sum1 = 0;
for(let i = 0; i < nameValues.length; i++){
    sum1 += nameValues[i];

}
console.log('Average number of letters = ' + sum1/nameValues.length);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
var nameholder = "This is all the names together: ";
for(let i = 0; i < 5; i++){
    nameholder += names[i] + " "

} console.log(nameholder);

//How do you access the last element of any array?
// You access the last element of an array by subtracting 1 from the length of the array

// How do you access the first element of an array?
// You call the position [0] of the array


/*Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array
*/

var nameLengths = names.map(function(element){
return element.length

});
console.log(nameLengths[1]);

let totalNameLengths = 0;
for (let i = 0; i < nameLengths; i++){
    totalNameLengths += namelengths[i] + 1;

}
console.log(totalNameLengths)


//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function something(word, n){
   let value = [];
    for(let i = 0; i < n; i++){
        value += word
    }

    console.log(value)
}


something("chris", 5);

//Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullNames(firstName, lastName){

    return firstName + ' ' + lastName
}

console.log(fullNames('Joshua', 'Sanders'));

 // Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
    
    const arrayNumbers = [3,9,15,22,7,12,19,45,100];
    let sumArray = 0;

 function takesNumbers(){
      
        for(let i = 0; i < arrayNumbers.length; i++){
            sumArray += arrayNumbers[i];
        }
        console.log(sumArray)
        
        if(sumArray > 100){
            return true;
        } 
        else return false;

 }

 console.log(takesNumbers())

 //Write a function that takes an array of numbers and returns the average of all the elements in the array.

 const arrayNumbers2 = [50, 25, 25, 75];
 let sumAverageArray = 0;
 function averageArray(){
    for(let i = 0; i < arrayNumbers2.length; i++){
        sumAverageArray += arrayNumbers2[i]
         

    }
    return ((sumAverageArray/arrayNumbers2.length))
 }

 console.log(averageArray());

 // Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


 //Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrinks(isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket >= 10.50 ) {
    return true
    }
    else return false
}

console.log(willBuyDrinks(true, 10.50 ))

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// I wrote this function to print out positive self talk while coding. It allows you to put in a boolean value and regardless of if its true or false it gives you positive self talk to help keep you motivated.

function printsPositives(positiveSaying, positiveSaying2){
    if(positiveSaying == true && positiveSaying2 == true)
    {
       return "You can become a front end developer";
    }
    else return "You can do this even if you dont want to hear something positive right now";

}

console.log(printsPositives(true, true))