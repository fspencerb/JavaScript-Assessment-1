//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

var sum = num10 + parseInt(string8) + one;
sum;
//2. write a loop that will log only numbers divisible by 3 between 20 - 100

for (var i=20; i<=100; i++) {
    if (i%3 === 0) {
        console.log(i);
    }
}

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

var sum = 0;
for(i = 0; i < scores.length; i++){
    sum += parseInt(scores[i]);
}

var avg = sum/scores.length;

console.log( "The sum of all the elements is: " + sum + " The average is: " + avg );