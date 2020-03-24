let mainTable = document.getElementById("main-table");
let addButton = document.getElementById("button-add");

function AddNew() {
    let newRow = document.createElement('tr');
    let deleteAction = document.createElement('td');
    deleteAction.innerText = "Видалити";
    deleteAction.addEventListener("click",
        function() {
            RemoveRow(this);
        }
    );
    newRow.appendChild(deleteAction);
    let groupName = document.createElement('td');
    groupName.innerText = "КП-ХХ";
    groupName.setAttribute("contenteditable", "true");
    groupName.addEventListener("DOMCharacterDataModified", ReadTable);
    newRow.appendChild(groupName);
    let studentsNum = document.createElement('td');
    studentsNum.innerText = 1;
    studentsNum.setAttribute("contenteditable", "true");
    studentsNum.addEventListener("DOMCharacterDataModified", ReadTable);
    newRow.appendChild(studentsNum);
    mainTable.appendChild(newRow);
    ReadTable();
}

function ReadTable() {
    let groups = [];
    for (let i = 1; i < mainTable.rows.length; i++) {
        let group = {};
        group.title = mainTable.rows[i].cells[1].innerText;
        group.num = mainTable.rows[i].cells[2].innerText;
        groups.push(group);
    }
    console.log(groups);
    return groups;
}

function RemoveRow(btn) {
    let row = btn.parentNode;
    row.remove();
}

addButton.addEventListener("click", AddNew);