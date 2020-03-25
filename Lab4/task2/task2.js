let mainTable = document.getElementById("main-table");
let addButton = document.getElementById("button-add");
let diagram = document.getElementById("diagram");

let colors = ["CRIMSON", "blue", "TOMATO", "green", "DEEPPINK", "orange", "BLUEVIOLET", "LIME", "AQUA", "BROWN"];

function AddNew() {
    let newRow = document.createElement('tr');
    let deleteAction = document.createElement('td');
    deleteAction.innerText = "Видалити";
    deleteAction.style.cursor = "pointer";
    deleteAction.style.color = "#0097c5";
    deleteAction.addEventListener("click", function() { RemoveRow(this); });
    newRow.appendChild(deleteAction);
    let groupName = document.createElement('td');
    groupName.innerText = "КП-ХХ";
    groupName.setAttribute("contenteditable", "true");
    groupName.addEventListener("DOMCharacterDataModified", DrawDiagrams);
    newRow.appendChild(groupName);
    let studentsNum = document.createElement('td');
    studentsNum.innerText = 1;
    studentsNum.setAttribute("contenteditable", "true");
    studentsNum.addEventListener("DOMCharacterDataModified", DrawDiagrams);
    newRow.appendChild(studentsNum);
    mainTable.appendChild(newRow);
    DrawDiagrams();
}

function ReadTable() {
    let groups = [];
    for (let i = 1; i < mainTable.rows.length; i++) {
        let group = {};
        group.title = mainTable.rows[i].cells[1].innerText;
        if (/\D/.test(mainTable.rows[i].cells[2].innerText)) {
            mainTable.rows[i].cells[2].style.border = '2px solid red'
        } else {
            mainTable.rows[i].cells[2].style.border = '';
        }
        group.num = mainTable.rows[i].cells[2].innerText;
        groups.push(group);
    }
    return groups;
}

function DrawDiagrams() {
    let data = ReadTable();
    while (diagram.firstChild) {
        diagram.removeChild(diagram.lastChild);
    }
    let max = 0;
    data.forEach(group => {
        if (+max < +group.num) {
            max = +group.num;
        }
    });
    let columnGap = 15;
    let columnWidth = (700 - columnGap * data.length) / data.length;
    let coef = 240 / max;
    let currHeight = 0;
    for (let i = 0; i < data.length; i++) {
        currHeight = data[i].num * coef;
        // (currHeight == 0) ? currHeight = 1 * coef: null;
        (currHeight < 25) ? (currHeight = 25) : null;

        let column = document.createElement("div");
        column.style.background = colors[i % colors.length];
        column.style.width = columnWidth + 'px';
        column.style.height = currHeight + 'px';
        column.style.lineHeight = currHeight - 10 + 'px';
        column.style.color = 'white';
        column.style.marginLeft = (+columnGap + (i * columnGap) + (i * columnWidth)) + 'px';
        column.style.position = "absolute";
        column.style.bottom = '40px';
        column.style.textAlign = "center";
        column.setAttribute("class", "diagram");
        column.setAttribute("data-num", data[i].num);
        column.addEventListener("mouseover", function() { ShowInfo(this); });
        column.addEventListener("mouseout", function() { HideInfo(this); });

        let caption = document.createElement("div");
        caption.style.width = columnWidth + 'px';
        caption.style.textAlign = "center";
        caption.innerText = data[i].title;
        caption.style.position = "absolute";
        caption.style.marginLeft = (+columnGap + (i * columnGap) + (i * columnWidth)) + 'px';
        caption.style.bottom = "10px";
        diagram.appendChild(column);
        diagram.appendChild(caption);
    }

}

function RemoveRow(btn) {
    let row = btn.parentNode;
    row.remove();
    DrawDiagrams();
}

function ShowInfo(diagram) {
    diagram.innerText = diagram.getAttribute("data-num");
    diagram.style.border = '5px double white';
}

function HideInfo(diagram) {
    diagram.innerText = '';
    diagram.style.border = '';
}


addButton.addEventListener("click", AddNew);