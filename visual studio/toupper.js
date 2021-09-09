var x="computer";
var str1=x.split("")
var y="program"
var str2=y.split("")
for(i=0;i<str1.length;i++){
    for(j=0;j<str2.length;j++){
        if(str1[i]==str2[j]){
           
         str1[i]=     str1[i].toUpperCase();
            str2[j]= str2[j].toUpperCase();
          
        }
    }
}
console.log(str1.join("")+' '+str2.join(""))