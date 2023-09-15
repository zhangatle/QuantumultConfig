var data = JSON.parse($response.body);

var temp = data.data.groupStatusInfos

temp.forEach((item,index,arr)=>{
    if(item.status === 1) {
        item.status = 0
    }
});

data.data.groupStatusInfos = temp

$done({body: JSON.stringify(data)})
