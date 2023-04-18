const TMP_FS = {
  "config.json": JSON.stringify({
    "stream_response": true,
    "quora_formkey": "",
    "quora_cookie": "",
    "channel_name": "",
    "app_settings": {
      "formkey": "",
      "tchannelData": {
        "minSeq": "",
        "channel": "",
        "channelHash": "",
        "boxName": "",
        "baseHost": "",
        "targetUrl": "",
        "enableWebsocket": true
      }
    },
    "chat_ids": {
      "a2": 0,
      "capybara": 0,
      "nutria": 0,
      "chinchilla": 0
    },
    "auto_login": true,
    "email": "",
    "sid_token": ""
  }, null, 4),
};

export const readFileSync = (path, opt) => {
  return TMP_FS[path];
}

export const writeFile = (path, content, cb) => {
  TMP_FS[path] = content;
  cb();
};