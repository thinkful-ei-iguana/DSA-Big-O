# DSA-Big-O

## 1a. What is the Big O for doggy playdate.-- O(1)

O(1) - it doesn't matter how many people are in the group. You are asking everyone at the same time.

## 1b. What is the Big O for doggy playdate.-- O(n)

O(n) the timing grows linearly as you are asking each person individually meaning the time spent increases the more people there are.

## 2. Even or odd -- O(1)

function isEven(value) {
if (value % 2 == 0) {
return true;
}
else
return false;
}
}

the function evaluates true or false for ONE value. 

## 3. Are you here? - polynomial O(n^2)
We are looping through the entire 2nd array for the number of times equal to the first array's length. i.e. if the 1st array = a length of 2 and the 2nd has a length of 10, then we are looping through the array of 10 and then again through the array of 10. 

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

exArray = [
  [1,2,3,4],
  [11,12,13,14,15,16,17,18,19,20]
]

## 4. Doubler - O(n)
What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

The complexity of the function grows linearly as the length of the array increases. 

## 5. Naive search
What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
The complexity of the function is proportional to its input size. Same as above.

## 6. Creating pairs: - O(n)
What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

The complexity of the function is proportional to its input size. It takes one array to create a pair of numbers to console.log.  

## 7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}