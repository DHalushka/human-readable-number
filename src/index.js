module.exports = function toReadable(number) {
    const str = number.toString().split("");
    let word = "";
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
    ];
    const teens = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number <= 10) {
        return ones[number];
    }
    if (number > 10 && number < 20) {
        return teens[number - 11];
    }
    if (number >= 20 && number < 100 && number % 10 !== 0) {
        return `${tens[Math.trunc(number / 10) - 1]} ${ones[number % 10]}`;
    }
    if (number % 10 === 0 && number < 100) {
        return tens[number / 10 - 1];
    }
    if (number % 100 === 0) {
        return `${ones[number / 100]} hundred`;
    }
    if (number > 100 && number % 100 < 11) {
        return `${ones[Math.trunc(number / 100)]} hundred ${
            ones[number % 100]
        }`;
    }
    if (number > 100 && number % 100 > 10 && number % 100 < 20) {
        return `${ones[Math.trunc(number / 100)]} hundred ${
            teens[(number % 100) - 11]
        }`;
    }
    if (number > 100 && number % 100 >= 20 && number % 10 === 0) {
        return `${ones[Math.trunc(number / 100)]} hundred ${
            tens[Math.trunc((number % 100) / 10) - 1]
        }`;
    }
    if (number > 100 && number % 100 > 20) {
        return `${ones[Math.trunc(number / 100)]} hundred ${
            tens[Math.trunc((number % 100) / 10) - 1]
        } ${ones[Math.trunc(number % 10)]}`;
    }
};
