var x="abc";
var count=0;
for(i=0;i<x.length/2;i++){
    if(x[i]!=x[x.length-1-i]){
        x[x.length-1-i]=x[i]
    }
}
for(i=0;i<x.length/2;i++){
    if(x[i]==x[x.length-1-i]){
        count++
    }
}

if(count==Math.floor(x.length/2)){
    console.log("YES")
}
else{
    console.log("NO")
}