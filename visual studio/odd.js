var y=[245,299,343,512,90];
var res=((arr)=>{
    var odd=[];
for (var x of arr){


    if(x%2==1){
    odd.push(x);
       }
    else{
    continue;
      }
    }
return odd;
})

console.log(res(y));