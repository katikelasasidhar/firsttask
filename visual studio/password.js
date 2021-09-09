var str1="abi"
var str2='bhuvana';
var res=[];
if(str1.length>str2.length){
    var j=1;
    for(i=str2.length;i<str1.length;i++){
        str2=str2+j;
        j++
    }
    for(k=0;k<str1.length;k++){
        res.push(str1[k]);
        res.push(str2[k])
    }

}
else{
    var j=1;
    for(i=str1.length;i<str2.length;i++){
        str1=str1+j;
        j++
    }
    for(k=0;k<str1.length;k++){
        res.push(str1[k]);
        res.push(str2[k])
    }
}
console.log(res.join(""))
