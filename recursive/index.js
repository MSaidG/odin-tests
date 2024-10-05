
// function all(arr, callback) {
//     let len = arr.length - 1;
//     if (len === 0) {
//       return true;
//     }
//     if (callback(arr[len]) === false)
//     {
//         return false
//     }
//     return all(arr.splice(0, len), callback);
//   }

//   function allElementsPassTest(arr, callback) {
//     if (arr.length === 0) {
//       return true;
//     }
//     return callback(arr[0]) && allElementsPassTest(arr.slice(1), callback);
//   }
  
//   let arr = [ 2, 1, 4, 2];

//   let b = all(arr, (e) => e > 1)
  
//   console.log(b)


//   function sumOfArray(arr) {
//     if (arr.length === 0) {
//       return 0;
//     }
//     return arr[0] + sumOfArray(arr.splice(1));
//   }

//   arr = [2, 2, 3, 4, 5];

//   console.log(arr)
//   console.log(sumOfArray(arr))

//   var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }

// function contains(object, searchValue) {
//   if (typeof object !== "object" || object === null) {
//     return object === searchValue;
//   }

//   for (const value of Object.values(object)) {
//     if (contains(value, searchValue)) {
//       return true;
//     }
//   }
//   return false;
// }

// let hasIt = contains(nestedObject, 44);
// let doesntHaveIt = contains(nestedObject, "foo"); 

// console.log(hasIt)
// console.log(doesntHaveIt)

// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7














// function totalInt(arr, length = 0) {
// 	if (arr.length === length) return 0;
// 	if (Array.isArray(arr[length])) {
// 		totalInt(arr[length]);
// 	}
	
// 	if (Number.isInteger(arr[length])) 
// 	{
// 		console.log(1)	
// 		return 1 + totalInt(arr, length + 1);
// 	}
// 	else{
// 		totalInt(arr, length + 1);
// 	}
// }

// console.log(totalInt([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]))


// function recursion(array, length = 0) {
	// 		// console.log("turn")
	// 		// console.log(array[length])
	//     if (array.length === length) 
	// 		{
	// 			return 1;
	// 		}
	
	//     if (Array.isArray(array[length])) {
		// 			console.log("array")
    //         recursion(array[length]);
    //     }
		// 		// console.log(array[length])
		
		// 		if (Number.isInteger(array[length]))
		// 		{
		// 			// console.log(array[length])
		
    //     	return 1 + recursion(array, length + 1);
		// 		}
		
		// 		// console.log(1)
    //     return recursion(array, length + 1);
    // }
    
		// console.log(recursion(points))
    // // recursion(points);
		
var points = [[[5, [2]], 3], 0, 2, ['foo'], [1,2,3], [4, [5, 6,3], [1,2,3,3]], [1]];

function countIntegersInTree(node) {
	if (node === null) {
		return 0;
	}

	let count = 0;
	if (Number.isInteger(node)) {
		count++;
	}
	
	if (typeof node === 'object') {
		for (const child in node) {
			count += countIntegersInTree(node[child]);
		}
	}

	return count;
}

function sumSquaresInTree(node) {
	if (node === null) {
		return 0;
	}

	let sum = 0;
	if (Number.isInteger(node)) {
		sum += node * node;
	}
	
	if (typeof node === 'object') {
		for (const child in node) {
			sum += sumSquaresInTree(node[child]);
		}
	}

	return sum;
}

let l = [1,2,3]; 
console.log(sumSquaresInTree(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(sumSquaresInTree(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(sumSquaresInTree(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(sumSquaresInTree(l)); // 100 + 100 + 100 + 100 = 400

		// console.log(sumSquaresInTree(points))













// function totalIntegers(arr, length = 0, count=0) {
// 	if (arr.length === length) return 0;
// 	let i = 0
// 	if (Number.isInteger(arr[length])) 
// 	{
// 		i = 1
// 	}
// 	if (Array.isArray(arr[length])) {
// 		totalIntegers(arr[length]);
// 	}
// 	console.log(Number.isInteger(arr[length]))

	
// 	totalIntegers(arr, length + 1, count + i);

// 	return count;
// }

// let as = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

// console.log(as)
// var points = [[1, 2], 3, [4, 3], [10, 50], [98, 100]];
// totalIntegers(points);