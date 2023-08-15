import inquirer from 'inquirer';


function getUserInput() {
    return inquirer.prompt([
        {
            type:'input',
            name:'text',
            message:'What text would you like for your logo? (max 3 characters)',
            validate: function(value) {
                if (value.length > 3){
                    return 'Please enter up to 3 characters only';
                } else return true
            }
        },
        {
            type:'input',
            name:'textColor',
            message:'What color would you like for your text? (color keyword or hex code)'
        },
        {
            type:'list',
            name:'shape',
            message:'What shape would you like for your logo?',
            choices: ['Circle','Square','Triangle']
        },
        {
            type:'input',
            name:'shapeColor',
            message:'What color would you like for your shape? (color keyword or hex code)'
        }
    ]);
}

export {getUserInput};