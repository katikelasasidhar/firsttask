var str1="abcd";
var str2="cdba";
var count=0;

if(str1.length==str2.length){
    for(var i=0;i<str1.length;i++){
        var j=0;
        while(j<str1.length){
                if(str1[i]==str2[j]){
                    count++
                }
                j++;
        }
    }
    
    if(count==str1.length){
        console.log(1)
    }
    else{
        console.log(0)
    }
}
else{
    console.log(0)
}