// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

let name='javascript',price=5,goal= ['Learning Javascipt','Becoming a expert','Mastering Javascript'];

//2) Output ("alert") the three variable values
console.log(name);
console.log(price);
console.log(goal);

//3) Try "grouping" the three variables together and still output their values thereafter

let course = {
    name: 'javascript',
    price: 5,
    goal: ['Learning Javascipt','Becoming a expert','Mastering Javascript']

}

console.log(course.name);
console.log(course.price);
console.log(course.goal);

//4)Also output the second element in your "main goals" variable

console.log(goal[1]);

//5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

function show(list,id){
    return list[id];
}

// 6) Execute your custom command from (5) and output ("alert") the result

console.log(show(course.goal,1));