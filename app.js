let age =21;
let userName = "Abir";
let hobbies = [age, userName];
let job = {
    title:'Developer',
    place:'Bangladesh',
    salary: 3445
};
function find(age){
    return age-18;
}
let adultYear = find(age);
alert(adultYear);