function login(items) {
  if (document.title == 'ログインスクリーン') {
    var element;
    var elements;

    element = document.getElementById('securitykeyboard');
    if (element)
        element.checked = false;

    if (document.getElementById('main-left-account')) {
        elements = document.getElementsByName('fldUserID');
        if (elements)
            elements[0].value = items['account_no'];
    }

    if (document.getElementById('main-left-pin')) {
        elements = document.getElementsByName('fldUserNumId');
        if (elements)
            elements[0].value = items['account_pin'];
    }

    if (document.getElementById('main-left-password')) {
        elements = document.getElementsByName('fldUserPass');
        if (elements)
            elements[0].value = items['account_password'];
    }

    element = document.getElementById('main-left-security');

    if (element) {
        var cells = element.getElementsByTagName('strong');
        for (var i = 0; i < 3; i++) {
            var x = cells[i].innerHTML[0];
            var y = cells[i].innerHTML[1];
            var id = 'code_' + '01234'.charAt(y) + 'abcdefghij'.charAt('ABCDEFGHIJ'.indexOf(x));
//        console.dir(cells);
            document.getElementById('fldGridChg' + (i + 1)).value = items[id];
        }
    }

    element = document.getElementById('loginbutton');
    if (element)
        element.click();
  }
}

var optionIds = ['account_no', 'account_pin', 'account_password'];
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 10; j++) {
    var id = 'code_' + '01234'.charAt(i) + 'abcdefghij'.charAt(j);
    optionIds.push(id);
  }
}
chrome.storage.sync.get(optionIds, function(items) {
  login(items);
});
