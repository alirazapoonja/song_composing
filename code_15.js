import inquirer from 'inquirer';
// Define the dialogues for each person
const dialogues = {
    asimazhar: "Haan yaad hai wo dosti ka har maza Muhabbatain, wo ronaqain, wo mastiyan",
    alizafar: "Laga k shart wo zindagi ki phir koi Jo waaday kar liye na hongey hum juda kabhi",
    aimabaig: "Dil ka dil se hoa hai Ehd e wafa",
    sahirali: "O mere yaara teri yaariyan Dil ki wafa Meri khushiyan tu saariyan Hongey na juda"
};
// List of persons
const persons = [
    { name: 'asimazhar', value: 'asimazhar' },
    { name: 'alizafar', value: 'alizafar' },
    { name: 'aimabaig', value: 'aimabaig' },
    { name: 'sahirali', value: 'sahirali' },
];
// Prompt user to choose a person
inquirer.prompt([
    {
        type: 'list',
        name: 'selectedPerson',
        message: 'Choose a person:',
        choices: persons
    }
]).then(answers => {
    // Display the dialogue for the selected person
    let selectedPerson = answers.selectedPerson;
    console.log(dialogues[selectedPerson]);
});
