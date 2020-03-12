var bottles = function(bottles) {
    let string = '';
    for (let i = bottles; i > 0; i--) {
        string = `${i} пляшок стоїть на стіні, одна упала і залишилось`;
        let elem = document.createElement('p');
        elem.innerHTML = string;
        buttonContainer.appendChild(elem);
    }
    let end = document.createElement('p');
    end.innerHTML = 'жодної!';
    buttonContainer.appendChild(end);
}


bottles(prompt('Скільки пляшок було спочатку?'));