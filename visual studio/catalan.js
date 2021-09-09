
var n=5
var res=[1]
let fac =function(x){
    var mul=1;
for(j=x;j>0;j--){
    mul=mul*j
}

return mul
}

let catalon=function(n){
for(i=1;i<=n;i++){
var value=(fac(2*i)/(fac(i+1)*fac(i)))

res.push(value)
}
return res

}
 console.log(catalon(n))