// CODE here for your Lambda Classes



class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am form ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase; 
    }
    demo(subject){
        return `today we are learning about ${subject}`;
    }
    grade(student,subject){
        return `${student.name} receives a perfect sore on ${subject}`;
    }
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
        let tempString = '';
        this.favSubjects.forEach( (item ) => {tempString += `${item} `});
        return tempString;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Person{
    constructor(projectmanagerAttributes){
        super(projectmanagerAttributes);
        this.gradeClassname = projectmanagerAttributes.gradeClassname;
        this.favInstructor = projectmanagerAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(studentObj,subject){
        return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;

    }
}
///////////////////////////////      / 
//                           //    /
// End of Class Constructors //   |===========
//                           //    \
///////////////////////////////      \
                                  
                                    
// Instructors///////////////////////////////////////////////////

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
const instructorTwo = new Instructor({
    name: 'Fred the Second',
    location: 'West Bedrock',
    age: 39,
    favLanguage: 'React',
    specialty: 'Back-End',
    catchPhrase: `Don't forget who...`
});

// Students//////////////////////////////////////////////////////

const John = new Student({
    name: 'John',
    location: 'New York',
    age: 25,
    previousBackground: 'Cashier',
    className: 'Web25',
    favSubjects: ['History','Math', 'Science'] 

});
const Doe = new Student({
    name: 'Doe',
    location: 'Florida',
    age: 47,
    previousBackground: 'The Florida Man',
    className: 'PR',
    favSubjects: ['Blacking Out','Getting in the News', 'Memes'] 

});

// Project Managers//////////////////////////////////////////////

const SpiderMan = new ProjectManager({
    name:'Spiderman',
    location: 'New York',
    age: 26,
    gradeClassname: 'Swinging From Buildings',
    favInstructor: 'Not Iron Man',
});
const James = new ProjectManager({
    name:'James Bond',
    location: 'New York',
    age: 50,
    gradeClassname: 'Secret Agent 101',
    favInstructor: 'Fred the Second',
});








//////// Test Logs  //////////////////////////////////////////////
//Instructor  
console.log(fred.demo(`Math!`));
console.log(instructorTwo.grade(Doe,'Creating Memes'));

//Student
console.log(John.listsSubjects());
console.log(John.PRAssignment('JavaScript II'));
console.log(Doe.sprintChallenge('JavaScript II'));

//Project Manager
console.log(SpiderMan.standUp('Avengers End Game Plan'));
console.log(SpiderMan.debugsCode(John,'Swinging from Buildings'));
console.log(James.standUp('FBI'));
console.log(James.debugsCode(John,'Sneaky walk'));