var arr=[1,2,3];
var myfun=((arr)=>{
    var sum=0;
    for(var x of arr){
        sum=sum+x
    }
    return (sum)/arr.length

})
console.log(myfun(arr))