var str2="yuvi";
var str1="yuvivirat";
if(str1.length<str2.length){
    for(i=0;i<str2.length;i++){
        if(str1[0]==str2[i]){
            var pos=i;
            var j=1;
            var count=1;
            while(j<str1.length){
                if(str1[j]==str2[i+j]){
                    count++;
                    j++;
                }
            }
        }
    }
    
    if(count==str1.length){
        console.log(str2.substr(pos,pos+str1.length))
    }
    else{
        console.log(-1)
    }
}
else{
    for(i=0;i<str1.length;i++){
        if(str2[0]==str1[i]){
            var pos=i;
            var j=1;
            var count=1;
            while(j<str2.length){
                if(str2[j]==str1[i+j]){
                    count++;
                    j++;
                }
            }
        }
    }
    
    if(count==str2.length){
        console.log(str1.substr(pos,pos+str2.length))
    }
    else{
        console.log(-1)
    }  
}