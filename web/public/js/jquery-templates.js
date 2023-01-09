// �綉��jq
var w = $(window).width(),
	h = $(window).height();

var ua = navigator.userAgent;
var android = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; // android
var iOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios
$(function(){
    $("#fb_btn").click(function(){
        if(iOS == true){
            window.open('https://www.facebook.com/messages/t/299633400217479');
        }else{
            FB.CustomerChat.show();
            FB.CustomerChat.showDialog();
        }
    });
});