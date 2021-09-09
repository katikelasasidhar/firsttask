var x="a1b10";
var n;
var res=[]
for(i=0;i<x.length;i=i+2){
    if(isNaN(x[i])){
        if(!isNaN(x[i+1])){
            if(!isNaN(x[i+2])){
              n=x.substring(i+1,i+3);
              console.log(n)
              var k=0;
              while(k<+n){
                  res.push(x[i])
              }  
              i++;
            }
            else{
                k=0;
                while(k<+x[i+1]){
                    res.push(x[i])
                } 
            }
        }
    }
    else{
        res.push(x);
    }

}
//console.log(res)