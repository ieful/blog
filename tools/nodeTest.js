fetch("https://cn-jsnt-ct-01-33.bilivideo.com/upgcxcode/28/50/1451985028/1451985028-1-100111.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1712809303&gen=playurlv2&os=bcache&oi=3659428934&trid=0000cea157b20bb34d5387de223f67a324e3u&mid=513073464&platform=pc&upsig=c82ca0c8f59c8b02992d554dc7e52688&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=14712&bvc=vod&nettype=0&orderid=0,3&buvid=E160C794-1D9D-19C7-C6F3-1F84A5EA88F388940infoc&build=0&f=u_0_0&agrr=0&bw=8387&logo=80000000", {
    "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "range": "bytes=0-3992258",
        "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
    },
    "referrer": "https://www.bilibili.com/video/BV1LF4m157f4/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=e2e9371f444b4778af119073f5dd7ae8",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
}).then(response => {
    console.log('response is', response);
    response.blob();
}).then(blob => {
    console.log(blob.toString())
})