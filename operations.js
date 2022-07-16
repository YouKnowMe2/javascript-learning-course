console.log(10+4);
console.log(10-4);
console.log(10*4);
console.log(10/4);
console.log(10%4); //10/4 => 2 *4 => Reminder : 2
console.log(10%3); // Expected Reminded: 1
console.log((10 + 3 - 5) * 10); //using bracket to give priority

let result;
result = 10*4;
result = result+1; //javascript first performe the right side of the equal sign first

result++; //result =result+1;
result--; //result =result-1;

result +=5; //result =result+5;
result -=5; //result =result-5;
result /=5; //result =result/5;
result *=5; //result =result*5;

console.log(result);

console.log("Abir" +' ' + "Chowdhury"); //only (+) can be used

let userName2 = 'Abir';
console.log(userName2.length);
console.log(userName2.toUpperCase());

let hobbies2 = ['Sports','Cooking'];
console.log(hobbies2.length);
