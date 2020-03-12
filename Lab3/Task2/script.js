let numRows = 10

var generate = function(numRows) {
    let triangle = [
        [1],
        [1, 1]
    ]
    if (numRows === 0) {
        return []
    } else if (numRows == 1) {
        return [
            [1]
        ]
    } else if (numRows == 2) {
        return [
            [1],
            [1, 1]
        ]
    } else {
        for (let i = 2; i < numRows; i++) {
            addRow(triangle)
        }
    }
    for (let i = 0; i < numRows; i++) {
        let row = '';
        for (let j = 0; j < triangle[i].length; j++) {
            row += triangle[i][j];
            row += '    '
        }
        let elem = document.createElement('pre');
        elem.innerHTML = row;
        buttonContainer.appendChild(elem);
    }
};

var addRow = function(triangle) {
    let previous = triangle[triangle.length - 1]
    let newRow = [1]
    for (let i = 0; i < previous.length - 1; i++) {
        let current = previous[i]
        let next = previous[i + 1]
        newRow.push(current + next)
    }
    newRow.push(1)
    return triangle.push(newRow)

}

generate(numRows);