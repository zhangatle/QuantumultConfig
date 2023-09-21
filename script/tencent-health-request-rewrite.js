let token = $request.headers["sessionid"]

$prefs.setValueForKey(token, "tencent_token")

$notify("腾讯健康", "session", token);

$done();
