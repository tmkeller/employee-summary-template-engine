const employeeQuestions = [
    {
        type: 'input',
        message: 'Manager name:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'ID number:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Email address:',
        name: 'email'
    }
];

const managerQuestion = {
    type: 'input',
    message: 'Office number:',
    name: 'officeNumber'
}

const engineerQuestion = {
    type: 'input',
    message: 'Github:',
    name: 'github'
}

const internQuestion = {
    type: 'input',
    message: 'School:',
    name: 'school'
}

const nextStep = {
    type: "list",
    name: "next",
    message: "What would you like to do next?",
    choices: [ "Add an engineer", "Add an intern", "Quit" ]
}

const managerQuestions = JSON.parse( JSON.stringify( employeeQuestions ));
managerQuestions.push( managerQuestion );
const engineerQuestions = JSON.parse( JSON.stringify( employeeQuestions ));
engineerQuestions.push( engineerQuestion );
const internQuestions = JSON.parse( JSON.stringify( employeeQuestions ));
internQuestions.push( internQuestion );

module.exports = { managerQuestions, engineerQuestions, internQuestions, nextStep }
