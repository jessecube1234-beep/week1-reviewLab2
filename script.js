// Function
function fortuneTeller (name, age) {

    let nameWithAge = `Name: ${name} and Age: ${age}\nYour Fortune:\n`;

// Fortune based on name

    if (name.length > 7) {
        nameWithAge += `${name} will marry late in life\n`
    }

    if (name.length < 5) {
        nameWithAge += `${name} will marry within a year\n`
    }

    if (name.length >= 5 && name.length <= 7) {
        nameWithAge += `${name} will encounter a once-in-a-lifetime opportunity\n`
    }

    if (name[0].toLowerCase() === 'r') {
        nameWithAge += `${name} will be rich\n`
    }

    if(name.toLowerCase().includes('i')) {
        nameWithAge += `${name} will fall in love this week\n`
    }

// Fortune based on age

    age = Number(age);

    if (age < 18) {
        nameWithAge += `${name} will achieve something great in their studies\n`
    }

    if (age >= 18 && age <= 30) {
        nameWithAge += `${name} will soon find their dream job\n`
    }

    if (age > 30) {
        nameWithAge += `${name} will experience financial success soon\n`
    }

    return nameWithAge;
}

let userName = prompt ("Insert your name");

let userAge = prompt ("Insert your age");

console.log (fortuneTeller(userName, userAge));

