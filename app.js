// Import employee classes.
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Import questions arrays.
const { managerQuestions, engineerQuestions, internQuestions, nextStep } = require("./lib/questions")
// Import dependencies.
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

// The output directory for the final HTML file.
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Create the array that will hold all our employee objects.
const employeeArray = [];

init();
// Initializes the program by getting the Manager's information.
function init() {
    console.log( "\n", "Building new engineering team. Enter manager information:" )
    inquirer.prompt( managerQuestions ).then( ( response, err ) => {
        if ( response ) {
            const manager = new Manager( response.name, response.id, response.email, response.officeNumber );
            employeeArray.push( manager );
            addNew();
        } else {
            console.log( err );
        }
    });
}

function addNew() {
    inquirer.prompt( nextStep ).then( ( response, err ) => {
        if ( response ) {
            switch ( response.next ) {
                case "Add an engineer":
                    addEngineer();
                    break;
                case "Add an intern":
                    addIntern();
                    break;
                default:
                    renderEmployees();
                    break;
            }
        } else {
            console.log( err );
        }
    });
}

function addEngineer() {
    console.log( "\n", "Enter new engineer information:" );
    inquirer.prompt( engineerQuestions ).then( ( response, err ) => {
        if ( response ) {
            const engineer = new Engineer( response.name, response.id, response.email, response.github );
            employeeArray.push( engineer );
            addNew();
        } else {
            console.log( err );
        }
    });
}

function addIntern() {
    console.log( "\n", "Enter new intern information:" )
    inquirer.prompt( internQuestions ).then( ( response, err ) => {
        if ( response ) {
            const intern = new Intern( response.name, response.id, response.email, response.school );
            employeeArray.push( intern );
            addNew();
        } else {
            console.log( err );
        }
    });
}

function renderEmployees() {

    // The render function creates the markup for the final HTML file.
    const rendered = render( employeeArray );

    // Write the markup to our output file.
    fs.writeFile( outputPath, rendered, ( err ) => {
        err ? console.log( err ) : console.log( "\n", `Employee profiles have been rendered. Enjoy!` );
    })
}