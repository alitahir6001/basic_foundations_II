// Basic Foundations II: Function Harder  (code written in jsbin.com before being c/p here)


// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(makeItBig([-1, 3, 5, -5]));  // remember to call the function inside the console.log, separating them only prints the array inputted, not the result of the function.


// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printlow(arr) {
    var low = arr[0];
    var high = arr[0];
    for (i = 1; i < arr.length; i++){
        if (arr[i] < low){
            low = arr[i];
        }
        else if (arr[i] > high) {  //else if instead of else, because if the first if statement isn't true, then go to the next condition. else is used if the same condition isn't true, but I am using different conditions to be checked. 
            high = arr[i];
        }
    }
    console.log (low);
    return high;
}
console.log(printlow([1,10,-7,0,55,3]));

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function printanother(arr) {
    console.log(arr[arr.length - 2]);
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            return arr[i];
        }
    }
}
console.log(printanother([7,8,6,-8,12]));

// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function double(arr) {
    var newArray = [];
    for (i = 0; i <arr.length; i++){ // remember to keep the name of the (arr) here
        newArray.push(arr[i] * 2); // here's where I want it to do its magic
    }
    return newArray;
}
console.log(double([1,2,3]));
console.log(double([10,20,30]));


// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPos(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++; // just like incrementing i to iterate through an array, I can increment the count to keep track of something
            arr[arr.length - 1] = count;
        }
    }
    console.log(arr);
}
countPos([-1,1,1,1]);
countPos([5,-9,-18,55,126]);

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

var evens = 0
var odds = 0
function evenodds(arr) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i]%2 !==0) { // if there remainder does not equal zero, (iow: if there is a remainder), then increment odds by one and leave evens at zero.
            odds++;
            evens = 0;
        }
        else { // otherwise (iow: if there is no remainder)
            evens++; // increment evens count by 1
            odds = 0;
        }
        if (odds === 3) { // had to look this one up on W3 and read up on eq value/eq type operator
            console.log("That's odd bro!");
            odds = 0; // so if i get three odds in a row, print that string and reset the counter to zero
        }
        else if (evens === 3) {
            console.log("Even more so, bro!");
            evens = 0; // same thing as above        
        }
    }
}
evenodds([15,17,13,12,14,28,9,8,7,6,5,4]); // only one set of each appears in a row, so it should print the string once for each
evenodds([1,2,3,4,5,6,7,8,9,10]); // none appear in a row, so no printing of strings
evenodds([1,1,1,3,3,3,6,6,6,8,8,8]); // strings should appear twice for each 

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function seconds(popcorn) {
    for (var i = 0; i < popcorn.length; i++) {
        if (i % 2 !==0) { // use modulo because I can iterate through the array and see if it's odd or not by checking for a remainder (divide in half)
            arr[i]++; // if so, increment it
        }
    }
    console.log(popcorn);
    return popcorn;
}
seconds([10,11,12,13,14,15,16,17,18,19,20]);



// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previous(arr) {
    var newarr = []; //new array to be printed
    for (var i = 0; i < arr.length; i++) { // iterate through an array as i normally would
        newarr[i] = arr[i].length; // set the index values of new arrays to equal the length of the array we are passing it when we call the function
    }
    for (var box1 = 1, box2 = 0; box1 < arr.length; box1++, box2++) { //iterate through the array but set new variables to contain the new values that are being replaced. It's like setting an "i = 0" setup i do when i iterate through an array, but im doing it twice within the same loop
        arr[box1] = newarr[box2]; //set the index of that array to be replaced by a number into the new array i created
    }
    return arr;
}
console.log(previous(["hello", "dojo", "awesome",]));



// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addseven(arr) {
    var newarr = [];
    newarr[0] = arr[0]; // i guess i could've used push here too
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = arr[i] + 7; // the magic: take the index value of the new array and add seven to it
    }
    return newarr;
}
console.log(addseven([1,2,3]));
console.log(addseven([7,14,21]));



// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

//we did this one in class/lecture -- check video

var myarray = [3,1,6,4,2] // I could either set the array here or pass it one later when i call the function
function reversearray(arr) {
    for (var i = 0; Math.floor(i < arr.length/2); i++) { // class.method(number) -- if any remainder when div by 2, it'll get rid of that decimal and go to the base value/
    //Math.floor  -- the "M" is case sensitive because it's a hardcoded thing in js
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i] // this is where we swap because i is what changes. 
        arr[arr.length-1] = temp
    } 
    return arr
}
console.log(reversearray(myarray));
console.log(reversearray([8,7,6,5,4,3,2,1]));

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].


function negoutlook(arr) {
    var newarr = [] // the new array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) { // if the index value is a positve number
            arr[i] = arr[i] * -1; // make it negative
        }
        newarr.push(arr[i]) // after making it a neg number, push that value into index [i]
    }
    return newarr;
}
console.log(negoutlook([1, -3, 5]));
console.log(negoutlook([5,10,15,20,25]));

// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function feedme(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") { // if that index value has the string "food" 
            console.log("yummy"); // then print "yummy"
            counter++; // keep track of how many 'yummy' strings I have logged
        }
    }
    if (arr[i] != "food") { // if the index value doesn't have the string "food"
        console.log("I'm hungry"); // print "im hungry"
    }
    return arr[i]; // return that array index
}
console.log(feedme(["chicken", "food", 4, 3, "food", 20, 7, "food"]));


// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function centerswap(arr) {
    var temp = arr[0]; // creating a temporary var inside the function to hold index[0] of array
    arr[0] = arr[arr.length - 1]; //which is then changed to length of array minus 1
    arr[arr.length - 1] = temp; // the new index value of that array is set to the current temp
    return arr;
}
console.log(centerswap([true, 42, "Ada", 2, "pizza"]));
console.log(centerswap([6,2,4,3,5,1]));

// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaledarray(arr, num) { // you can pass multiple types of parameters by defining them when creating the function
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= num; // multiplay everything by the number
    }
    return arr;
}
console.log(scaledarray([1,2,3], 3));
console.log(scaledarray([20,13,40], -1));

// why is the last one easier than the middle ones?! Whatever. This assignment hurt my brain and I need a nap.

// I've noticed I'm spending WAY more time reading code than actually writing it. I think that's why i keep leaving these notes along the way to keep my myopic memory in check. Once I read aloud in english what im trying to do, it starts to make sense (a little). Still spending most of my time 99% lost in trying to figure it out but I think that's part of the process.