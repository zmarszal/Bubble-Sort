
//
let swap = 0, comparisonCounter = 0;

function bubbleSort (arr){
  debugger;
  for(let i = arr.length; i >= 0; i--){
    for(let j=0; j<i; j++){
      comparisonCounter++;
      if(arr[j] > arr[j+1]){
        swap++;
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}


