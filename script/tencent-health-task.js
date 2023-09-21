
let token = $prefs.valueForKey("tencent-token")
console.log(token)

if(token) {
    const options = {
        url: 'http://192.168.10.99:5700/open/envs',
        opts: {
            policy: "direct"
        },
        method: "POST",
        headers: { //请求头
            'Authorization': "Bearer 02a953bc-916e-4b1e-b8e5-5298be7789ca",
            "Content-Type": "application/json"
        },
        body: JSON.stringify([{"name":"tencent-health", "value": token, "remarks":"腾讯健康token"}])
    };


    $task.fetch(options).then(response => {
        console.log(response.body);
        $notify("Title", "Subtitle", response.body); // Success!
        $done();
    }, reason => {
        console.log(reason.error)
        $notify("Title", "Subtitle", reason.error); // Error!
        $done();
    });
}
