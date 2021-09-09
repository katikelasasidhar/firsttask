var n=8;
var arr=['rat',"art","cat","act","dog","god","tar","apt"]
var output=[];
for(i=0;i<n;i++){
    var res="";
     res=arr[i];
    if(arr[i]!=-1){
        for(j=i+1;j<n;j++){
            var count=0;
            if(arr[j]!=-1){
            var y=arr[j].split("");
            var k=0;
            while(true){
                if(y.indexOf(arr[i][k]==-1)){
                    break;
                }
                else{
                    count++
                }
                k++
            }
            }
            if(count==arr[j].length){
                res=res+","+arr[j];
                arr[j]=-1
            }
        }

    }
    output.push(res)
}
console.log(output)


