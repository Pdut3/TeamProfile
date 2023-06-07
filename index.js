const readline = require('readline');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let teamMembers = [];

// Prompt function to get team manager's information
function promptManager() {
  rl.question("Enter the team manager's name: ", (name) => {
    rl.question("Enter the team manager's employee ID: ", (id) => {
      rl.question("Enter the team manager's email address: ", (email) => {
        rl.question("Enter the team manager's office number: ", (officeNumber) => {
          const manager = {
            name,
            id,
            email,
            officeNumber,
            role: 'Manager'
          };
          teamMembers.push(manager);
          showMenu();
        });
      });
    });
  });
}

// Prompt function to get engineer's information
function promptEngineer() {
  rl.question("Enter the engineer's name: ", (name) => {
    rl.question("Enter the engineer's employee ID: ", (id) => {
      rl.question("Enter the engineer's email address: ", (email) => {
        rl.question("Enter the engineer's GitHub username: ", (github) => {
          const engineer = {
            name,
            id,
            email,
            github,
            role: 'Engineer'
          };
          teamMembers.push(engineer);
          showMenu();
        });
      });
    });
  });
}

// Prompt function to get intern's information
function promptIntern() {
  rl.question("Enter the intern's name: ", (name) => {
    rl.question("Enter the intern's employee ID: ", (id) => {
      rl.question("Enter the intern's email address: ", (email) => {
        rl.question("Enter the intern's school: ", (school) => {
          const intern = {
            name,
            id,
            email,
            school,
            role: 'Intern'
          };
          teamMembers.push(intern);
          showMenu();
        });
      });
    });
  });
}

// Show the menu options
function showMenu() {
  rl.question(
    "Select an option:\n1. Add an engineer\n2. Add an intern\n3. Finish building my team\n",
    (choice) => {
      switch (choice) {
        case '1':
          promptEngineer();
          break;
        case '2':
          promptIntern();
          break;
        case '3':
          generateHTML(teamMembers); // Pass teamMembers array to generateHTML function
          break;
        default:
          console.log("Invalid choice. Please try again.");
          showMenu();
          break;
      }
    }
  );
}

// Start by prompting for the team manager's information
promptManager();
