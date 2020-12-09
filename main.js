console.log('Hello Arrays');

let myLastObj = {name:'Bulent', age:35}

console.log(myLastObj);

console.log(myLastObj['name']);
console.log(myLastObj['age']);

console.log(Object.keys(myLastObj)[0]);

let myGroupObj = {
    camera1: 'Ana',
    camera2: 'Eleni',
    camera3: 'Burhanovic',
    camera4: 'Nicklaus',
    camera5: 'James',
    camera6: 'Antonis'
};

console.log(myGroupObj);

/*
Arrays based on Objects but there are some differences:
1. Objects must have keys ||||| Arrays has numeric keys automatically which starts from 0
2. Objects have { } ||||| Arrays have [ ]
3. We can reach Objects' members by key names ||||| We can reach Arrays' members by index numbers
*/

let myGroupArr = [
    'Ana',
    'Eleni',
    'Burhanovic',
    'Nicklaus',
    'James',
    'Antonis'
];


console.log(myGroupArr);

let emptyArr = [];

let myArr = ['audi', 'bmw', 'mercedes', 500];

console.log(myArr);

console.log(myArr[3]);

myArr[4] = "VW";



//We can create some new elements which are not sequential
//Array length is calculated as last element's index number +1
console.log(`length of myArr is: ${myArr.length}`);

myArr[100] = 'Porsche';

console.log(`length of myArr is: ${myArr.length}`);


/*
Push is method which gets the last element's index and sets
the next element with 1 more number and the value of parameter 
which you set.
*/

myArr.push('Lamborgini'); // Adds Lamborgini to the end of the array

myArr.unshift('Toyota'); // Adds Lamborgini to the beginning of the array


myArr.pop(); //Removes the last element of the array

myArr.shift(); //Removes the first element of the array

myArr.pop();

//Pop and Push are faster then shift and unshift

//class : [ {student info... , {08/12/2020: yes}}]

/*
1. Create an array which covers students in class
2. Create objects which overs student's name, last name, age and attendance for this week
    - You should create object per person

3. Create one more object as child of student object. This one will keep dates as keys and yes, no 
    for attendance
*/

let ourClass = [
    {
        name:'Nicklaus',
        age:'32',
        attendance: {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: undefined,
            sunday: undefined
        }
    }, 
    {
        name:'Maria',
        age:'32',
        attendance: {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: undefined,
            sunday: undefined
        }
    },
    {
        name:'James',
        age:'32',
        attendance: {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: false,
            saturday: undefined,
            sunday: undefined
        }
    }, 
];

console.log(ourClass);
/* 
let newClass = [];

let students = parseInt(prompt('How many students you will register?'));

for (let i = 1; i <= students; i++ ) {
    let name = prompt(`Please type ${i}. student's name`);
    let lName = prompt(`Please type ${i}. student's last name`);
    let age = prompt(`Please type ${i}. student's age`);

    let newStudent = {name, lName, age}
    newClass.push(newStudent);
}

console.log(newClass);
 */
/*
Task: Class creator
PS: We 're gonna crate something similar as sample below
1. Create an array for class
2. Ask for how many students will place in class
3. Create a loop to ask every student's name, last name and age
4. Create student objects with the informations that user typed
5. Place all student objects in class array(Which you created on number 1)

Sample:
let ourClass = [
    {
        name:'Nicklaus',
        lastName: 'Dimitriadis;
        age:'32'
    }, 
    {
        name:'Maria',
        lastName: 'Sventeriki',
        age:'32'
    },
    {
        name:'James',
        lastName: 'Conway',
        age:'32'
    }, 
];

*/



let newClass = [];

let studentCount = parseInt(prompt('How many students will be registered?'));

for (let i = 1; i <= studentCount; i++) {

    let name = prompt(`Please type ${i}. student's name`);
    let lName = prompt(`Please type ${i}. student's last name`);
    let age = prompt(`Please type ${i}. student's age`);

    newClass.push({name, lName, age});
    
}

console.log(newClass);