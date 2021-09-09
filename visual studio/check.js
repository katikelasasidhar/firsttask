var x="aabbaaab"
var res=((y)=>{
    var repeat=0;
    for(i=0;i<y.length;i++){
        if(y.charAt(i)=="a"||y.charAt(i)=="b"){
            repeat++
            
            
        }
    }
    if(repeat==y.length){
        return "yes"
    }
    else
    return 'no'
})
console.log(res(x))