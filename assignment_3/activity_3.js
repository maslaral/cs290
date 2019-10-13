function deepEqual (x, y) {
    // checking whether both are objects and not null
    if ((typeof x == "object" && x != null) && 
        (typeof y == "object" && y != null)) {

        // getting keys and saving in variables
        let xProps = Object.keys(x);
        let yProps = Object.keys(y);

        // comparing length of keys, if not equal to exit
        if (xProps.length != yProps.length){
            return false;
        }

        // checking keys in x are in y and they are equal
        for (var key in xProps) {
            if (!(key in yProps)) {
                return false;
            }
            else if (!deepEqual(xProps[key], yProps[key])) {
                return false;
            }
        }

        // checking keys in y are in x and they are equal
        for (var key in yProps) {
            if (!(key in xProps)) {
                return false;
            }
            else if (!deepEqual(yProps[key], xProps[key])) {
                return false;
            }
        }

        // if made it this far, the values are equal
        return true;
    }
    else {
        // the case if not checking two objects
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
