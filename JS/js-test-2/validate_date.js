const format = 'yyyy-mm-dd';
const date = '2020-10-10';

// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const EMPTYSTRING = '';
const HYPHEN = '-';

let year = EMPTYSTRING;
let myDate = EMPTYSTRING;
let month = EMPTYSTRING;
let countOfHyphen = 0;
let isDateGivenValid = true;


for (let index = 0; index < format.length; index++) {
    switch (format[index]) {
        case 'y':
            year += date[index];
            break;
        case 'd':
            myDate += date[index];
            break;
        case 'm':
            month += date[index];
            break;
        case '-':
            if (date[index] === HYPHEN) {
                countOfHyphen++;
            }
            break;
        default:
            isDateGivenValid = false;
    }
}

if (isDateGivenValid) {

    const isDivBy4 = year % 4 === 0; 
    const isDivBy400 = year % 400 === 0; 
    const isDivBy100 = year % 100 === 0; 
    
    const isLeapYear = (isDivBy400) || (isDivBy4 && (!isDivBy100));
    const isYearValid = isLeapYear || (year.length === 4 && +year > 0);
    
    const isMonthValid = month.length === 2 && +month > 0 && +month < 13;
    
    const isMonthFeb = +month === 2;
    let daysInMonth = isMonthFeb && isLeapYear ? 29 : 28;
    
    if (isMonthValid && !isMonthFeb) {
        const isMonthLessThan31 = +month % 2 === 0 && +month < 7 || (+month + 1) % 2 === 0;
        daysInMonth = isMonthLessThan31 && !isMonthFeb? 30 : 31;
    }
    
    
    const isDateValid = +myDate > 0 && +myDate <= daysInMonth && myDate.length === 2;
    
    const isHyphen = countOfHyphen === 2;
    isDateGivenValid = isYearValid && isMonthValid && isDateValid && isHyphen;
} 

const result = isDateGivenValid ? 'valid' : 'invalid';
console.log(result);
