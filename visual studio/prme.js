var arr=[17,9,2,4,11];

var prime=((arr)=>{
    var res=[];

    for(var x of arr){
    var repeat=0;
        for(var i=2;i<=x/2;i++){
            
        if(x%i==0){
            repeat=1;
            break;

        }
        }
        if(repeat==0){
            res.push(x)
        }
    }
    console.log(res.join(" "))

})
prime(arr)