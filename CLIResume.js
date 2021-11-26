var inquirer = require('inquirer');
const cp = require('child_process')

function displayDetails() {
    inquirer
  .prompt([
    /* Pass your questions in here */
      {
          type: 'list',
          name: 'Selection',
          choices:['About','Skills','Project','Academics']
    }
  ])
  .then((choices) => {
    // Use user feedback for... whatever!!
      if (choices.Selection == 'About') {
          console.log('I enjoy programming in Python and C++ and also like to solve challenging problems by creating new solutions.')
          displayNext()
      } else if (choices.Selection == 'Skills') {
          console.log('Java,Javascript,node,react,python,cpp')
          displayNext()
      } else if (choices.Selection == 'Project') {
          cp.execSync('start chrome https://github.com/Akshima-Ghai')
          displayNext()
      } else if (choices.Selection == 'Academics') {
          console.log('9 cgpa')
          displayNext()
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

displayDetails()

function displayNext() {
    var inquirer = require('inquirer')
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'GoBack',
                choices:['back']
            }
        ])
        .then((choice) => {
            if (choice.GoBack = 'back') {
            displayDetails()
            } 
    })
}