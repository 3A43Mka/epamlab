var arr = [
    { value: 100, type: 'USD' },
    { value: 215, type: 'EUR' },
    { value: 7, type: 'EUR' },
    { value: 99, type: 'USD' },
    { value: 354, type: 'USD' },
    { value: 12, type: 'EUR' },
    { value: 77, type: 'USD' },
];

var output1 = function(array) {
    let sum = 0;
    array.forEach(element => {
        if ((element.type == 'USD') && (element.value < 100)) {
            sum += element.value;
        }
    });
    let string = document.createElement('p');
    string.innerHTML = sum;
    buttonContainer.appendChild(string);
}

var output2 = function(array) {
    let out = [];
    array.forEach(element => {
        if (element.type == 'EUR') {
            element.value *= 2;
            out.push(element);
        }
    });
    out.forEach(element => {
        let string = element.value + ' ' + element.type;
        let elem = document.createElement('p');
        elem.innerHTML = string;
        buttonContainer.appendChild(elem);
    });
}

output1(arr);
output2(arr);