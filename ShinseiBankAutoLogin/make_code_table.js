var codeDiv = document.getElementById('code_table');
var table = document.createElement('table');
for (var i = 0; i < 5; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 10; j++) {
    var td = document.createElement('td');
    var cell = document.createElement('input');
    cell.setAttribute('id', 'code_' + '01234'.charAt(i) + 'abcdefghij'.charAt(j));
    cell.setAttribute('size', 1);
    td.appendChild(cell);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
codeDiv.appendChild(table);
