// Your code here
function mapToNegativize(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * -1)
    }
    return newArray
};

function mapToNoChange(arr) {
    let newArray = arr;
    // for (let i = 0; i < arr.length; i++){
    //     newArray.push(arr[1] * 1)
    // }
    return newArray
}

function mapToDouble(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++){
        newArray.push(arr[i] * 2)
    }
    return newArray
}

function mapToSquare(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * arr[i])
    }
    return newArr
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++){
        total = total + sourceArray[i]
    }
    return total
};

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++){
        if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }