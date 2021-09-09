var str1="Guvi";
var str2="yuvi";
var str3="yuvirat";
var arr=str1.length<str2.length<str3.length?[str1,str3,str2]:str1.length<str3.length<str2.length?[str1,str2,str3]:str2.length<str1.length<str3.length?[str2,str3,str1]:str2.length<str3.length<str1.length?[str2,str1,str3]:str3.length<str2.length<str1.length?[str3,str1,str2]:str3.length<str1.length<str2.length?[str3,str1,str2]:null

var min=arr[0]

var max=arr[2];
var rem=arr[1];
var output="";
var value;
for(i=0;i<min.length;i++){

    for(j=0;j<max.length;j++){
        while(min[i]==max[j]){
            output=output+min[i]
            i++;
            j++;
        }
        if(output.length>0){
          value=rem.indexOf(output);
          break;  
        }

    }
    if(output.length&&value!=-1){
        console.log(output)
    }
    
}
if(output.length==0){
    console.log(-1)
}