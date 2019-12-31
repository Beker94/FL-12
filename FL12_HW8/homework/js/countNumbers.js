 const countNumbers = (arr) => {
     let numbers = {};
     for (let i = 0; i < arr.length; i++) {
         if (isNaN(arr[i]) || arr[i] === ' ') {
             continue;
         } else {
             if (arr[i] in numbers) {
                 numbers[arr[i]] = numbers[arr[i]] + 1;
             } else {
                 numbers[arr[i]] = 1;
             }
         }
     }
     console.log(numbers);
     return numbers;
 }

 countNumbers('fd33ksemf3444s,emf 455, fs55566hinf')