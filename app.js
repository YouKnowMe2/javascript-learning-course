let age = 21;
let userName = "Abir";
let hobbies = ['Sports','Cooking','Racing'];

let job = {
    title: 'Developer',
    place: 'Bangladesh',
    salary: 400,

}


function calculateAdultYear(userAge){
    let result;
    result = userAge-18;
    return result;
}

totalAdultYear = calculateAdultYear(age);
alert(totalAdultYear);

let person = {
        name: 'Abir',//property
        greet(){ //method
            alert('Hello');
        }
};

person.greet();