var arr="Geeksforgeek";
var res=((z)=>{
var x=z.split("");

for(i=0;i<x.length;i++){
    if(x[i]==x[i+1]){
        var y=x[i];
        while(true){
            if(y==x[i]){
                x.splice(i,1);
            }
            else if(y!=x[i]){
                break;
            }
        }
    }
}
return x.join('');

});
console.log(res(arr))