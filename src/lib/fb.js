
let initialized = false;
let queue = [];

export function fb(callback) {
    if (initialized) {
        callback(window.FB);
    } else {
        queue.push(callback);
        if (!window.fbAsyncInit) {
            window.fbAsyncInit = () => {
                window.FB.init({
                    appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
                    autoLogAppEvents: true,
                    status: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v3.2',
                });
                initialized = true;
                queue.forEach(cb => cb(window.FB));
                queue = null;
            };

            (function (d, s, id) {
                var js,
                    fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');
        }
    }
}