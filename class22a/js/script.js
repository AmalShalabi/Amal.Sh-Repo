const arr = [10,4,30,13,9,17,2,24,11,23,5,7];
let arrTemporary=0

//partaA
function sortArr(arr){
    for(i=0; i<arr.length; i++) { if (arr[i] > arr[i+1]){ return false;} //Q(n)
    }
    return true;
}
//PartB
while(!sortArr(arr)){
   for(i=0;i<arr.length;i++){if(arr[i]>arr[i+1]){ //Q(n)
       arrTemporary=arr[i];
       arr[i]=arr[i+1];
       arr[i+1]=arrTemporary;
   }
}
}
document.write("[" + arr + "]");


/*The inner loop is dependent on the control variable of the outer loop.
Therefore, we have to fall back to the number of inner
loop iterations to find the volume of statements executed.===> O(n) + O(n)=O(n)
*/
