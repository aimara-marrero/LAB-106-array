/*## Iteration 1

### 1.1/ **sumPositiveNumbers(array)** */

function sumPositiveNumbers(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            total += array[i];
        }
    }
    console.log(total);
}

sumPositiveNumbers([1, -4, 7, 12]);


// ### 1.2/ **countThatSheep(array)** 

function countThatSheep(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            count++;
        }
    }

    console.log(count);
}

countThatSheep([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
]);

//### 1.3/ **countThatSheepV2(array)** 

function countThatSheepV2(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === true) {
                count++;
            }
        }
    }

    console.log(count);
}

countThatSheepV2([
    [true, true, true, false, true],
    [true, false, true, false, true],
    [true, false, true, false, true],
]);



//### 1.4/ **toReverse(string)**. 
function toReverse(str) {
    //Split to separate the chars.
    //Reverse chAnges the order
    //map Change type of the str
    console.log(str.split("").reverse().map(Number));
}

toReverse("348597");


//## Iteration 2 - Count until i want

function countBy(x, n) {
    let newArr = Array();
    for (let i = 1; i <= n; i++) {
        newArr.push(x * i);
    }
    console.log(newArr);
}

countBy(2, 5);


// ## Iteration 3 - Shorter first

function shorterFirst(array) {
    let newArray = array.sort((a, b) => {
        return a.length - b.length;
    });
    console.log(newArray);
}

shorterFirst(["Telescopes", "Glasses", "Eyes", "Monocles"]);
