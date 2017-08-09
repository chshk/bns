/**
 * Created by 94712 on 2017/6/20.
 */
$(function(){
    $('.boxShow .con ul li').hover(function(){
        var i=$(this).index();
        $('.boxShow .con').css("background",'url(../images/images/meimei'+i+'.png)');
    })
    $('.boxShow .con ul li').mouseenter(function(){
        var i=$(this).index();
        $('.boxShow .con').css({opacity:0.3}).stop().animate({opacity:1},1500);
    })
    $('.boxShow .con ul li').mouseleave(function(){
        var i=$(this).index();
        $('.boxShow .con').css({opacity:1}).stop().animate({opacity:0.8},1500);
    })
})
