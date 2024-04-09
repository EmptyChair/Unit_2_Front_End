// HOMEWORK 1
// fourOrSeven accepts only 4 or 7 and must return 7 (if 4 put in) or 4 (if 7 put in)
// Method 4

function fourOrSevenM4(x) {
    console.log("fourOrSeven - method 4")
    return 11-x
}

console.log("Homework - Task 1"); 
console.log(fourOrSevenM4('4')); 
console.log(fourOrSevenM4('7')); 
console.log(fourOrSevenM4(4));

// Method 5

function fourOrSevenM5(x) {
    console.log("fourOrSeven - method 5")
    return 28/x
}

console.log(fourOrSevenM5('4')); 
console.log(fourOrSevenM5('7')); 
console.log(fourOrSevenM5(4));

// HOMEWORK 2
// luckyNumber accepts 6-digit numbers
// if sum of 1st 3 digits equals the sum of second 3 digits, the number is lucky

function luckyNumber(x) {
    console.log("Number is "+x)
    let sum1 = 0
    let sum2 = 0;
    for (i=0; i<3; i++) {
        sum2 = sum2 + x%10;
        x = (x-(x%10))/10
    }
    for (i=3; i<6; i++) {
        sum1 = sum1+ x%10;
        x = (x-(x%10))/10
    }
    if (sum1 == sum2)
    console.log("The number is lucky!")
    else
    console.log("The number is NOT lucky!")

    return sum1 == sum2
}

console.log("Homework - Task 2"); 
console.log(luckyNumber(123871)); //false : (1+2+3 == 8+7+1)
console.log(luckyNumber(111111));
console.log(luckyNumber(651840));

// HOMEWORK 3
// banana - write banana using only a and b

function banana() {
    let a=  'a'
    let b = 'b'  
    return (b+a+(a/b)+a)
    
}

console.log("Homework - Task 3"); 
console.log("Function banana writes this word: "+banana())