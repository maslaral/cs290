var result = [];

function buildList(list) {
  for (var i = 0; i < list.length; i++){
      return function() {
          var item = 'item' + list[i];
          result.push(function(){
              alert(item + ' ' + list[i])
          });
        }
      }
  return result;
}

function testList() {
  var fnlist = buildList([1, 2, 3]);
  for (var j = 0; j < fnlist.length; j++) {
    result[j] = fnlist(j);
  }
}

testList();