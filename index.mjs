import inquirer from "inquirer";
import fs from "fs/promises";

let {project_title, description, } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'project_title',
            message:'What is your projects title?',
        },
        {
            type: 'input',
            name: 'description',
            message:'describe your projects', 
        },
    ])
    let descriptionText = `
    # Title ${project_title}
    # Project Description ${description}`
    fs.writeFile('README.md', descriptionText)
    console.log(project_title, description)