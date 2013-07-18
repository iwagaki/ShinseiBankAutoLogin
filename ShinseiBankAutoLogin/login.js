if (document.title == 'ログインスクリーン') {
    var element;
    var elements;

    element = document.getElementById('securitykeyboard');
    if (element)
        element.checked = false;

    if (document.getElementById('main-left-account')) {
        elements = document.getElementsByName('fldUserID');
        if (elements)
            elements[0].value = account_no;
    }

    if (document.getElementById('main-left-pin')) {
        elements = document.getElementsByName('fldUserNumId');
        if (elements)
            elements[0].value = account_pin;
    }

    if (document.getElementById('main-left-password')) {
        elements = document.getElementsByName('fldUserPass');
        if (elements)
            elements[0].value = account_password;
    }

    element = document.getElementById('main-left-security');
    if (element) {
        var cells = element.getElementsByTagName('strong');
//        console.dir(cells);
        for (var i = 0; i < 3; i++) {
            var x = cells[i].innerHTML[0];
            var y = cells[i].innerHTML[1];
            document.getElementById('fldGridChg' + (i + 1)).value = account_table[x][y];
        }
    }

    element = document.getElementById('loginbutton');
    if (element)
        element.click();

}
