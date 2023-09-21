/**
 * @fileoverview Example of HTTP rewrite.
 *
 * @supported Quantumult X (v1.0.5-build173)
 */

// $request, $response, $notify(title, subtitle, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers, $response.body
//
// $prefs is for persistent store and the data of $prefs will be cleared when Quantumult X is deleted.
// $prefs.setValueForKey(value, key), $prefs.removeValueForKey(key), $prefs.removeAllValues(). Returns true or false, value and key should be string.
// $prefs.valueForKey(key) returns value.
//
// setTimeout(function() { console.log("abc"); }, 1000);
//
// You can optional change the response headers at the same time by using $done({body: modifiedBody, headers: modifiedHeaders}); only change the response headers is not allowed for script-response-body. The modifiedHeaders can be copied and modified from $response.headers, please do not change the content length, type and encoding field.
// Response status can also be optional changed by using $done({body: modifiedBody, headers: modifiedHeaders, status: modifiedStatus}), the modifiedStatus should be like "HTTP/1.1 200 OK"

let token = $request.headers["sessionid"]
$notify("腾讯健康", "session", token);
// 更新青龙的环境变量
refreshToken(token);

$done();


function refreshToken(token) {
    const myRequest = {
        url: 'http://192.168.10.99:5700/open/envs',
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
