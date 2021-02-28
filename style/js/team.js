var inquire = require('inquirer');

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = function(){
        return this.name;
    }
    this.getId = function(){
        return this.id;
    }
    this.getEmail = function(){
        return this.email;
    }
    this.getRole = function(){
        var employee = "Employee";
        return employee;
    }
}

function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    this.getName = function(){
        return this.name;
    }
    this.getId = function(){
        return this.id;
    }
    this.getEmail = function(){
        return this.email;
    }
    this.getRole = function(){
        var employee = "Manager";
        return employee;
    }
}

function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.getName = function(){
        return this.name;
    }
    this.getId = function(){
        return this.id;
    }
    this.getEmail = function(){
        return this.email;
    }
    this.getGithub = function(){
        return this.github;
    }
    this.getRole = function(){
        var employee = "Engineer";
        return employee;
    }
}

function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.getName = function(){
        return this.name;
    }
    this.getId = function(){
        return this.id;
    }
    this.getEmail = function(){
        return this.email;
    }
    this.getSchool = function(){
        return this.school;
    }
    this.getRole = function(){
        var employee = "Intern";
        return employee;
    }
}

function 
inquire.prompt({
    {
        type: 'input',
        name: 'position',
        message: 'What is your job position?'
    }
    {
        type: 'input',
        name: 'name',
        message: 'What is their name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their id number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?'
    },
    {
        type: 'input', 
        name: 'officeNumber',
        message: 'What is their office number?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their GitHub username?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is their schools name?'
    }
})