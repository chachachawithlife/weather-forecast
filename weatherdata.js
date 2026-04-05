var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

// 1. Print the highest temperature to the console.

function highestTemp(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }

    }
    return max
}

console.log(highestTemp(highTemperatures));

// 2. Print the lowest temperature to the console.

function lowestTemp(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }

    }
    return min
}

console.log(lowestTemp(lowTemperatures));

// 3. What is the average high temperature from the data set?

function avgTemp(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum / arr.length

}

console.log(avgTemp(highTemperatures));

// 4. What is the average low temperature from the data set?

console.log(avgTemp(lowTemperatures));

// 5. What is the median high temperature from the data set?

function medianTemp(arr){
    let median = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1; j++){
            if ( arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }
    let lengthOfArr = arr.length;
    if (lengthOfArr % 2 === 0){
        median =(arr[lengthOfArr /2] + arr[lengthOfArr / 2 - 1])/2;
    } else {
        median = arr[lengthOfArr / 2 - 1];
    }
    return median;
}

console.log(medianTemp(highTemperatures));


// 6. What is the median low temperature from the data set?

console.log(medianTemp(lowTemperatures));
