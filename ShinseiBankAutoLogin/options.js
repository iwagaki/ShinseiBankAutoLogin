function save_options() {
  var optionDict = {};

  var optionIds = ['account_no', 'account_pin', 'account_password'];
  for (var i = 0; i < optionIds.length; i++) {
    id = optionIds[i];
    optionDict[id] = document.getElementById(id).value;
  }

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 10; j++) {
      var id = 'code_' + '01234'.charAt(i) + 'abcdefghij'.charAt(j);
      optionDict[id] = document.getElementById(id).value;
    }
  }
  chrome.storage.local.set(optionDict, function() {
    var status = document.getElementById('status');
    status.innerHTML = 'Options saved.';
    setTimeout(function() {
      status.innerHTML = '';
    }, 750);
  });
}

function restore_options() {
  var optionIds = ['account_no', 'account_pin', 'account_password'];
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 10; j++) {
      var id = 'code_' + '01234'.charAt(i) + 'abcdefghij'.charAt(j);
      optionIds.push(id);
    }
  }
  chrome.storage.local.get(optionIds, function(items) {
    for (var i = 0; i < optionIds.length; i++) {
      id = optionIds[i];
      if (items[id]) {
        document.getElementById(id).value = items[id];
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', function(e) {
  restore_options();
  document.querySelector('#save').addEventListener('click', save_options);
}, false);
