//main app
(function() {
    App = {};
    App.helper = {};
    App.INTERVAL = 2000;
    App.FRONT_UPDATE = 'AJAX';
    App.auth_token = window.localStorage.getItem('auth_token');
    App.apiLogin = function(email, password){
        return new Promise(function(resolve, reject){
            $.ajax({
                data: JSON.stringify({email: email, password: password, "session": true}),
                contentType: 'application/json',
                type: 'POST',
                url: '/api/v1/user/login',
                success: function (data) {
                    resolve(data);
                },
                error: function(xhr, status, error) {
                    reject(xhr.responseJSON);
                }
            });
        });
    };

    App.apiGetToken = function(){
        return new Promise(function(resolve, reject){
            $.ajax({
                type: 'GET',
                url: '/api/v1/user/token',
                success: function (data) {
                    resolve(data.token);
                },
                error: function(xhr, status, error) {
                    reject(xhr.responseJSON);
                }
            });
        });
    };
    App.apiLogout = function (){
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: 'GET',
                url: '/api/v1/user/token',
                success: function (data) {
                    $.ajax({
                        data: JSON.stringify({"session": true}),
                        contentType: 'application/json',
                        type: 'POST',
                        url: '/api/v1/user/logout',
                        headers: {Authorization: 'Bearer ' + data.token},
                        success: function (data) {
                            resolve(data);
                        },
                        error: function(xhr, status, error) {
                            reject(xhr.responseJSON);
                        }
                    });
                },
                error: function(xhr, status, error) {
                    reject(xhr.responseJSON);
                }
            });
        });


    };

    App.apiLoginToken = function(token){
        return new Promise(function (resolve, reject) {
            $.ajax({
                data: JSON.stringify({"token": token, "session": true}),
                contentType: 'application/json',
                type: 'POST',
                url: '/api/v1/user/login-token',
                success: function (data) {
                    resolve(data)
                },
                error: function(xhr, status, error) {
                    reject(xhr.responseJSON);
                }
            });
        });
    };

    App.apiVerifyEmail = function(email){
        return new Promise(function (resolve, reject) {
            $.ajax({
                data: JSON.stringify({"emailorphone": email, "verify": true, "type": "email"}),
                contentType: 'application/json',
                type: 'POST',
                url: '/api/v1/user/recovery',
                success: function (data) {
                    //msgBlock.innerHTML = 'Check email and go to link';
                    resolve(data);
                },
                error: function(xhr, status, error) {
                    reject(xhr.responseJSON);
                }
            });
        });
    };

    App.apiVerifyPhone = function(phone){
        return new Promise(function (resolve, reject) {
            $.ajax({
                data: JSON.stringify({"emailorphone": phone, "verify": true, "type": "sms"}),
                contentType: 'application/json',
                type: 'POST',
                url: '/api/v1/user/recovery',
                success: function (data) {
                    resolve(data);
                    /*
                     console.log(JSON.stringify(data));
                     msgBlock.innerHTML = 'SMS was sent, input it here';
                     var form = document.querySelector('#<?=$usertype;?>-dialog-form #tabs-4 form');
                     var label = document.createElement('label');
                     label.innerHTML = 'SMS code:';
                     var input = document.createElement('input');
                     input.id = 'sms-code';
                     var btn = document.createElement('button');
                     btn.innerHTML = 'Check SMS code';
                     btn.onclick = checkSmsCode;
                     form.appendChild(label);
                     form.appendChild(input);
                     form.appendChild(btn);
                     */
                },
                error: function(xhr, status, error) {
                    reject(xhr.responseJSON);
                }
            });

        });

    };


    App.checkSmsCode = function(code){
        return new Promise(function (resolve, reject) {
            $.ajax({
                data: JSON.stringify({"code": code, "type": "sms"}),
                contentType: 'application/json',
                type: 'POST',
                url: '/api/v1/user/verify',
                success: function (data) {
                    resolve(data)
                },
                error: function(xhr, status, error) {
                    reject(xhr.responseJSON);
                }
            });
        });
    };

    App.apiRecoveryViaEmail = function(email){
        return new Promise(function (resolve, reject) {
            $.ajax({
                data: JSON.stringify({"emailorphone": email, "type": "email"}),
                contentType: 'application/json',
                type: 'POST',
                url: '/api/v1/user/recovery',
                success: function (data) {
                    //.innerHTML = 'Check email and go to link for change password';
                    resolve(data);
                },
                error: function(xhr, status, error) {
                    reject(xhr.responseJSON);
                }
            });

        });

    };

    App.apiRecoveryViaPhone = function(phone, url){
        return new Promise(function (resolve, reject) {
            $.ajax({
                data: JSON.stringify({"emailorphone": phone, "type": "sms"}),
                contentType: 'application/json',
                type: 'POST',
                url: '/api/v1/user/recovery',
                success: function (data) {
                    resolve(data);
                    //msgBlock.innerHTML = 'Go to this <a href="'+url+'">link</a> for reset password';
                },
                error: function(xhr, status, error) {
                    reject(xhr.responseJSON);
                }
            });

        });
    };

    /**
     * register User
     * @param name
     * @param email
     * @param password
     * @param confirm_password
     */
    App.apiRegisterUser = function(name, email, password, confirm_password){
        return new Promise(function (resolve, reject) {
            $.ajax({
                data: JSON.stringify({"name": name, "email": email, "password": password, "confirm_password": confirm_password}),
                contentType: 'application/json',
                type: 'POST',
                url: '/api/v1/user/register',
                success: function (data) {
                    resolve(data);
                    //msgBlock.innerHTML = 'Go to this <a href="'+url+'">link</a> for reset password';
                },
                error: function(xhr, status, error) {
                    reject(xhr.responseJSON);
                }
            });
        });
    };


    /**
     * register Analyst
     * @param name
     * @param email
     * @param password
     * @param confirm_password
     */
    App.apiRegisterAnalyst = function(payload){
        return new Promise(function (resolve, reject) {
            $.ajax({
                data: JSON.stringify(payload),
                contentType: 'application/json',
                type: 'POST',
                url: '/api/v1/analyst/register',
                success: function (data) {
                    resolve(data);
                    //msgBlock.innerHTML = 'Go to this <a href="'+url+'">link</a> for reset password';
                },
                error: function(xhr, status, error) {
                    reject(xhr.responseJSON);
                }
            });
        });
    };

    /**
     * Change password
     * @param payload
     */
    App.apiChangePasswordSms = function(code, password, confirm_password, type, session){
        return new Promise(function (resolve, reject) {
            $.ajax({
                data: JSON.stringify({code: code, password: password, confirm_password: confirm_password, type: type, session: session}),
                contentType: 'application/json',
                type: 'POST',
                url: '/api/v1/user/changepassword',
                success: function (data) {
                    resolve(data);
                    //msgBlock.innerHTML = 'Go to this <a href="'+url+'">link</a> for reset password';
                },
                error: function(xhr, status, error) {
                    reject(xhr.responseJSON);
                }
            });
        });
    };

    window.app = App;

}());

