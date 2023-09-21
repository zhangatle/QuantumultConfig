let token = $request.headers["sessionid"]

$prefs.setValueForKey(token, "tencent-token")

$notify("腾讯健康", "session", token);

$done();
