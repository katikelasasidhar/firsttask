var arr=[1,2,3,1,4,2,5,2,1,8,9,5,8];

(function(){
var res=[];
for(i=0;i<arr.length;i++){
    var repeat=0;
    for(j=0;j<arr.length;j++){
        if(arr[i]==res[j]){
            repeat=1;
        }
    }
    if(repeat==0){
        res.push(arr[i])
    }

}
console.log(res)
})(arr)