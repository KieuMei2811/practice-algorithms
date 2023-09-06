function SelectionSort (arr : number []):void {
    let min_index: number;
    for (let i = 0; i < arr.length; i++){
        min_index = i; 
        for (let j = i+1; j < arr.length; j++){
            if(arr[j]< arr[min_index]){
                min_index = j;
            }
        }
        const news = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = news;
    }
}
let array = [10, 20 , 11, 50, 6,8];
SelectionSort(array);
console.log(array);

[10, 20, 11, 50, 6, 8];
[6, 20, 11, 50, 10, 8];
[6, 11, 20, 50, 10, 8];
[6, 11, 20, 10, 8, 50];
[6, 8, 20, 10, 11, 50];
[6, 8, 10, 11, 20, 50];