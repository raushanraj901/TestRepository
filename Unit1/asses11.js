
var start=1;
var end=100;
var count=0;
var sum=0;

while(start<=end){
  if (start%2==0){
    sum=sum+start;
    count++;
    }
  start++;
}var avg=sum/count;
console.log("Average of even numbers is: ",avg);