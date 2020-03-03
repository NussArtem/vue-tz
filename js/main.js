// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

$(".btn_modal").fancybox({
    autoFocus: false,
    afterLoad : function(instance, current) {
        //console.log(instance, current);
        if (current.src == "#reg"){
            App.setCountryAutocomplete();
            App.setCityAutocomplete();
        }else if(current.src =="#auth"){
            $('div.auth__tab').removeClass('active');
            $('div.auth__tab.tab1').addClass('active');
        }
    }
});



// SVG IE11 support
svg4everybody();

// lng

$('.lng__active').on('click touchstart', function(e){
    e.preventDefault();
    $('.lng').toggleClass('open');
});

// Nav
(function() {

    $('.nav_toggle').on('click touchstart', function(e){
        e.preventDefault();

        $('.page').toggleClass('nav_open');
    });

}());

// Hide dropdown

$('body').click(function (event) {

    if ($(event.target).closest(".lng").length === 0) {
        $(".lng").removeClass('open');
    }

    if ($(event.target).closest(".select").length === 0) {
        $(".select").removeClass('open');
    }

    if ($(event.target).closest(".user").length === 0) {
        $(".user").removeClass('open');
    }

    if ($(event.target).closest(".informer__item").length === 0) {
        $(".informer__item").removeClass('open');
    }
});

(function() {

    $('.cookies__close').on('click', function(e){
        e.preventDefault();

        $('.cookies').slideUp('fast');
    });

}());


$('.user__label').on('click', function() {
    $(this).closest('.user').toggleClass('open');
});



$('.select__label').on('click touchstart', function(e) {
    e.preventDefault();

    if($(this).closest('.select').hasClass('open')){
        $(this).closest('.select').toggleClass('open');
    }
    else {
        $('.select').removeClass('open');
        $(this).closest('.select').toggleClass('open');
    }
});

$('.select_submit').on('click touchstart', function() {
    $(this).closest('.select').toggleClass('open');
});

$('.select_clear').on('click touchstart', function() {
    $(this).closest('.select').find('input').prop('checked', false);
    $(this).closest('.select').toggleClass('open');
});


$('.informer__item_data').on('click touchstart', function(e) {
    e.preventDefault();

    if($(this).closest('.informer__item').hasClass('open')){
        $(this).closest('.informer__item').toggleClass('open');
    }
    else {
        $('.informer__item').removeClass('open');
        $(this).closest('.informer__item').toggleClass('open');
    }
});

$('.informer__list li').on('click', function() {
    $(this).closest('.informer__item').removeClass('open');
});


$('.select__option li').on('click', function() {
    var opt = $(this).find('span').text();
    $(this).closest('.select').removeClass('open');
    $(this).closest('.select').find('input[type=hidden]').val(opt);
    $(this).closest('.select').find('.select__label span').text(opt);
});


$('.info_link a').on('click touchstart', function(e) {
//    e.preventDefault();
});



$(".select__content").mCustomScrollbar({
    theme:"minimal-dark"
});

$(".informer__list_scroll").mCustomScrollbar({
    theme:"minimal-dark"
});



$('.raty').raty({
    number: 5,
    starHalf      : 'star-half-png',
    starOff       : 'star-off-png',
    starOn        : 'star-on-png',
    cancelOff     : 'cancel-off-png',
    cancelOn      : 'cancel-on-png',
    score: function() {
        return $(this).attr('data-score');
    },
    readOnly: function() {
        return $(this).attr('data-readOnly');
    },
});

// datetimepickers

$(function() {

    jQuery.datetimepicker.setLocale('ru');

    jQuery('.datetimepicker1').datetimepicker({
        timepicker:false,
        format:'d.m.Y',
        inline:true,
        scrollMonth: false,
        scrollInput: false,
        defaultDate:'18/11/2019'

    });

    jQuery('.datetimepicker2').datetimepicker({
        timepicker:false,
        format:'d.m.Y',
        inline:true,
        scrollMonth: false,
        scrollInput: false,
        defaultDate:'18/09/2019'

    });

    jQuery('.datetimepicker3').datetimepicker({
        timepicker:false,
        format:'d.m.Y',
        inline:true,
        scrollMonth: false,
        scrollInput: false
    });

    jQuery('.form_date').datetimepicker({
        format:'d.m.Y',
        timepicker:false,
        scrollMonth: false,
        scrollInput: false,
        mask:true,
    });


    jQuery('.form_elem__calendar').datetimepicker({
        format:'d.m.Y',
        timepicker:false,
        scrollMonth: false,
        scrollInput: false,
        mask:true,
    });

});

(function() {

    $('.file__form input').on('change', function(e) {
        var box = $(this).closest('.file');
        var str = $(this).val();

        if (str.lastIndexOf('\\')){
            var i = str.lastIndexOf('\\')+1;
        }
        else{
            var i = str.lastIndexOf('/')+1;
        }
        var filename = str.slice(i);

        console.log(filename);

        box.find('.file__name').text(filename);


    });

}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// Placeholders
(function() {
    $('.form_elem input').focus(function(event) {
        $(this).closest('.form_elem').addClass('focus');
    });

    $('.form_elem input').focusout(function(){

        var inputVal = $(this).closest('.form_elem').find('input').val();
        if (inputVal == '') {
            $(this).closest('.form_elem').removeClass('focus');
        }
    });
}());


$('.auth__nav a').on('click', function(e) {
    e.preventDefault();
    var tab = $($(this).attr("data-tab"));
    var box = $(this).closest('.auth');

    $(this).closest('.auth__nav').find('a').removeClass('active');
    $(this).addClass('active');

    box.find('.auth__tab').removeClass('active');
    box.find(tab).addClass('active');
});

//fogot password
$('a#fogot-pass').on('click', function (e) {
    e.preventDefault();
    var tab = $($(this).attr("data-tab"));
    var box = $(this).closest('.auth');

    $(this).closest('.auth__nav').find('a').removeClass('active');
    $(this).addClass('active');

    box.find('.auth__tab').removeClass('active');
    box.find(tab).addClass('active');
});

$('#link-logout').click(function (ev) {
    ev.preventDefault();
    window.app.apiLogout()
        .then(function(){window.localStorage.removeItem('auth_token'); window.location.reload(true);})
        .catch(function(e){console.log(e)});
});
