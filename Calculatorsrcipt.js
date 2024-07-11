let display = document.getElementById('result');
let op = {
    percentage: '%',
    divide: '÷',
    mul: '×',
    sub: '-',
    add: '+'
};

let num = {
    9: '9',
    8: '8',
    7: '7',
    6: '6',
    5: '5',
    4: '4',
    3: '3',
    2: '2',
    1: '1',
    0: '0',
    dot: '.'
};

let previous = '';
let newentry = '';

let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    display.innerHTML = "0";
    previous = '';
    newentry = '';  // Reset newentry when clear is pressed
});

// Event listeners for operations
for (let key in op) {
    if (op.hasOwnProperty(key)) {
        let operations = document.getElementById(key);
        operations.addEventListener('click', () => {
            previous = op[key];
            newentry += previous;
            display.innerHTML = newentry;
        });
    }
}

// Event listeners for numbers and dot
for (let key in num) {
    if (num.hasOwnProperty(key)) {
        let numbers = document.getElementById(key);
        numbers.addEventListener('click', () => {
            previous = num[key];
            newentry += previous;
            display.innerHTML = newentry;
        });
    }
}

// Event listener for equal
let equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click', () => {
    try {
        let result = eval(newentry.replace(/÷/g, '/').replace(/×/g, '*'));
        display.innerHTML = result;
        newentry = result.toString();
    } catch (error) {
        display.innerHTML = 'Error';
        newentry = '';
    }
});

// Event listener for backspace
let backspace = document.getElementById('backspace');
backspace.addEventListener('click', () => {
    newentry = newentry.slice(0, -1); 
    display.innerHTML = newentry || "0"; 
});
