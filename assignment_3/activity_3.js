function deepEqual(...x) {
    let sameLength = true;
    let result = -Infinitiy;

    // check if x is an object and not null
    if(typeof(x) == "object" && x != null){
        for (let x of x) {
            if (x.length != result){
                sameLength = false;
                result = x.length;
            }
            else {
                sameLength = false;
                break;
            }
        }
        return sameLength;
    }
    else {
        return x === y;
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(null, obj));
// -> false
