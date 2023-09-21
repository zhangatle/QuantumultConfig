let token = $request.headers["sessionid"]
$notify("腾讯健康", "session", token);
// 更新青龙的环境变量
refreshToken(token);

$done();


function refreshToken(token) {
    const myRequest = {
        url: 'http://192.168.10.99:5700/open/envs',
        opts: {
            policy: "direct"
        },
        method: "POST",
        headers: { //请求头
            'Authorization': "Bearer 02a953bc-916e-4b1e-b8e5-5298be7789ca"
        },
        body: JSON.stringify([{"name":"PC_TOKEN", "value":token, "remarks":"腾讯健康token"}])
    };

    $task.fetch(myRequest).then(response => {
        console.log(response.body);
        $notify("Title", "Subtitle", response.body); // Success!
        $done();
    }, reason => {
        $notify("Title", "Subtitle", reason.error); // Error!
        $done();
    });
}
