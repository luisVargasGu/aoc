let total = 0;
let fs = require('fs');

fs.readFile('./Day-1-2023-input.txt', 'utf8', (e, d) => {
    if (e) {
        console.log(e);
        return;
    }
    const lines = d.split('\n');
    for (let l of lines) {
        l = cstnr(l);
        findCalibrationValue(l);
    }
    console.log(total);
})


function findCalibrationValue(value) {
    const numbersInLine = [];

    for (var i = 0; i < value.length; i++) {
        var currentChar = value.charAt(i);
        if (isNum(currentChar)) {
            numbersInLine.push(currentChar);
        }
    }

    const temp = numbersInLine[0] + numbersInLine[numbersInLine.length - 1];
    if (!isNaN(temp)) {
        total += Number(temp);
    }
}

function cstnr(line) {
    const numberMap = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9',
    };

    const pattern = new RegExp(Object.keys(numberMap).join('|'), 'g');
    return line.replace(pattern, match => numberMap[match]);
}

function isNum(n) {
    return (n <= '9' && n >= '1');
}

