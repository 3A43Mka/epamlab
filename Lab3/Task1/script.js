const button = document.getElementById("makePredicion");
const buttonContainer = document.getElementById("buttonContainer")

const partnerNames = ['Марта', 'Моніка', 'Джейн', 'Кейт', 'Джессаміна'];
const kidsNums = [1, 2, 3, 4, 5];
const countries = ['Албанія', 'Африка', 'Америка', 'Малайзія', 'Китай'];
const jobNames = ['двірник', 'прокурор', 'програміст', 'водій фури з морозивом', 'кіллер', 'футболіст'];

button.onclick = function() {
    let predictType = Math.round(Math.random());
    let prediction;
    if (predictType == 1) {
        const partnerName = partnerNames[Math.round(Math.random() * (partnerNames.length - 1))];
        const kidsNum = kidsNums[Math.round(Math.random() * (kidsNums.length - 1))];
        prediction = `Ви укладите шлюб з ${partnerName} та у вас буде ${kidsNum} дітей`;
    } else {
        const country = countries[Math.round(Math.random() * (countries.length - 1))];
        const jobName = jobNames[Math.round(Math.random() * (jobNames.length - 1))];
        prediction = `Ви переїдите у країну ${country} на посаду ${jobName}`;
    }
    alert(prediction);
    if (confirm(`Зберегти це передбачення?`)) {
        let elem = document.createElement('p');
        elem.innerHTML = prediction;
        buttonContainer.appendChild(elem);
    }
};