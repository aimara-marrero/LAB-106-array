# JS Arrays

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Today you have learnt how to manipulate and create Arrays so you are ready to solve a lot of new problems. Today's lab will have lots of exercises that are increasingly difficult.

Ready?

## Requirements

- [Learn how to fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `code/labs` folder

## Starter code

You have to solve the different problems in the `starter-code/index.js` file. This Javascript file is included in the `starter-code/index.html`. 

You can easily open the HTML in Chrome, by typing in your terminal:
 
To test that it works, click on the Live Server button that is located on the bottom-right corner of VSCode:

After you open it, you can open the `Chrome Developer Tools` and see the `console.log`  of your exercises.


## **RULES**

 - All your functions have to be [pure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
 - No more than 10 lines per function


---
## Iteration 1

Create the following functions:

### 1.1/ **sumPositiveNumbers(array)**

You get an array of numbers, return the sum of all of the positives ones.

```js
  E.g. [1,-4,7,12] => 1 + 7 + 12 = 20
```


### 1.2/ **countThatSheep(array)** 

Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the one-dimensional array (true means present).

For example,

```js
[true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false]
```
The correct answer would be 9.

**Note:** Not count truthy values, only `true` values :) 

### 1.3/ **countThatSheepV2(array)** 

Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the **two-dimensional** array (true means present).

For example,

```js
[
  [true,  true,  true,  false, true],
  [true,  false,  true,  false, true],
  [true,  false,  true,  false, true],
]
```
The correct answer would be 10.

**Note:** Not count truthy values, only `true` values :) 

### 1.4/ **toReverse(string)**. 

You get a string with a representation of numbers and you have to return an array with the values in reversed order
Example:
``` 
348597 => [7,9,5,8,4,3]
```

---

## Iteration 2 - Count until i want


Create a function with two arguments `countBy(x, n)` that will return an array of length (n) with multiples of (x).

Check that the given number and the number of times to count are positive numbers greater than 0.

Return the results as an array.

Examples:
```js 
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
```

--- 

## Iteration 3 - Shorter first


Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array was passed as an argument:
```js
["Telescopes", "Glasses", "Eyes", "Monocles"]
```
Your function would return the following array:
```js
["Eyes", "Glasses", "Monocles", "Telescopes"]
```
All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

--- 

## Bonus

**Extra exercise**

You have to implement the `difference function`, which compares two arrays and return the values not included in both arrays.

```js
array_diff([1,2],[1]) == [2]
```
If a value is present in b, all of its occurrences must not included in the result:
```js
array_diff([1,2,2,2,3],[2]) == [1,3]
```

**One more**

You have to implement the `snail function`, which receives a `n x n` array and returns the array elements arranged from outermost elements to the middle element, traveling clockwise.
```js
array = [[1,2,3], [4,5,6], [7,8,9]]
snail(array) == [1,2,3,6,9,8,7,4,5]
```

For better clarity, this is the path you need to follow: 
![](./snail.png)

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin main
```

Then create a Pull Request!!