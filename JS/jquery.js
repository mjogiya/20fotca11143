
$(document).ready(function () {
    $('.abc').hide();
    $('.size').hide();   

    $('.button').click(function () {
        $('.page').toggle(300);
        var selected = $(this);
        $('.page').removeClass('active');
        $(selected).addClass('active');
    });

    var $a = $('.a'),
        $b = $('.b'),
        $c = $('.c'),
        $d = $('.d'),
        $index = $('.index'),
        $about = $('.about'),
        $gallery = $('.gallery'),
        $contact = $('.contact');

    $a.click(function () {
        $index.fadeIn(4000);
        $about.fadeOut(2000);
        $gallery.fadeOut(2000);
        $contact.fadeOut(2000);
    });
    $b.click(function () {
        $index.fadeOut(2000);
        $about.fadeIn(4000);
        $gallery.fadeOut(2000);
        $contact.fadeOut(2000);
    });
    $c.click(function () {
        $index.fadeOut(2000);
        $about.fadeOut(2000);
        $gallery.fadeIn(4000);
        $contact.fadeOut(2000);
    });
    $d.click(function () {
        $index.fadeOut(2000);
        $about.fadeOut(2000);
        $gallery.fadeOut(2000);
        $contact.fadeIn(4000);
    });

    $(".github").hover(function(){
        $(".git-hub-hover").toggle(200);
    });

    $(".facebook").hover(function(){
        $(".facebook-hover").toggle(200);
    });

    $(".instagram").hover(function(){
        $(".instagram_hover").toggle(200);
    });

    $(".linkedin").hover(function(){
        $(".linkedin_hover").toggle(200);
    });
    $(".snapchat").hover(function(){
        $(".snapchat_hover").toggle(200);
    });
    $(".skype").hover(function(){
        $(".skype-hover").toggle(200);
    });
    $(".stackoverflow").hover(function(){
        $(".stackoverflow-hover").toggle(200);
    });
    $(".telegram").hover(function(){
        $(".telegram-hover").toggle(200);
    });
    $(".twitter").hover(function(){
        $(".twitter_hover").toggle(200);
    });
    $(".whatsapp").hover(function(){
        $(".whatsapp-hover").toggle(200);
    });

    
});