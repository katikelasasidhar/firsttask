var str="ababababa";
var y;
var res;
var y=str.indexOf('ab')
while(y!=-1){ 
   y=str.indexOf("ab",y+2)

  if(str.indexOf('ab',y+2)==-1){
      res=y+2
  }

    
}
if(str[res]=="a"){
console.log(res+1);
}
else{
    console.log(res)
}