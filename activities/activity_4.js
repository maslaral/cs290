let result = [];

function buildList(list) {
  for (let i = 0; i < list.length; i++){
      let item = 'item' + list[i];
      return function() {
          result.push(function(){
              console.log(item + ' ' + list[i])
          });
        }
      }
  return result;
}

function testList() {
  let fnlist = buildList([1, 2, 3]);
  for (var j = 0; j < fnlist.length; j++) {
    result[j] = fnlist(j);
  }
}

testList();