

let aboutTop = $('#about').offset().top;
let optnContWieth = $('.options-content').innerWidth();
$('.options').animate({right:`-${optnContWieth}`});
$('.nav-link').css('color','#fff');

let aboutScroll = $(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if ( wScroll > aboutTop )
    {
        $('#main-nav').css('backgroundColor','#dbd6d6');
        $('#main-nav').css('padding',' 15px 80px');
        $('.btn-up').fadeIn(500);
        $('.nav-link').css('color','#000');
        $('.navbar-brand').css('color','#000');
    }
    else
    {
        $('#main-nav').css('backgroundColor','transparent');
        $('#main-nav').css('padding','10px');
        $('.btn-up').fadeOut(500);
        $('.nav-link').css('color','#fff');
        $('.navbar-brand').css('color','#fff');
    }
})
// button Up
$('#icon').click(function(){
    // $('html,body').animate({screenTop:0},1000);
    $(window).scrollTop(0);
})

// Slide Menu
$('.item-icon').click(function(){
    if( $('.options').css('right') == '0px'){
    $('.options').animate({right:`-${optnContWieth}`},1000);
    }
    else{
    $('.options').animate({right:`0px`},1000);
    }
}) 
// Slide Menu Change Colors
let colorItem = $('.color-item');
colorItem.eq(0).css('background-color','red');
colorItem.eq(1).css('background-color','pink');
colorItem.eq(2).css('background-color','#5871df');
colorItem.eq(3).css('background-color','#ff206e');
colorItem.eq(4).css('background-color','green');
colorItem.eq(5).css('background-color','teal');
colorItem.eq(6).css('background-color','#9258f0');
colorItem.eq(7).css('background-color','#000');
colorItem.eq(8).css('background-color','#fff');
colorItem.eq(9).css('background-color','#334d4e');
colorItem.eq(10).css('background-color','#bb9b12');
colorItem.eq(11).css('background-color','#ffd108');
colorItem.eq(12).css('background-color','#08fffd');
colorItem.eq(13).css('background-color','#25ff08');
colorItem.eq(14).css('background-color','#6c2926');
colorItem.eq(15).css('background-color','#80e7dd');
colorItem.eq(16).css('background-color','#9465e8');
colorItem.eq(17).css('background-color','#ccbbea');
colorItem.eq(18).css('background-color','#f0ea4f');
colorItem.eq(19).css('background-color','#8bc34a');
colorItem.eq(20).css('background-color','#ff5722');

$('.color-item').click(function (e) {
    let getColor = $(e.target).css('background-color');      // Get Value
    $('.change').css('color',`${getColor}`);                // Set Value
})

// loading Page 
$(document).ready(function () {
    $('.loading .lds-spinner').fadeOut(1000 , function(){
        $('.loading').fadeOut(1000 , function(){
            $('.loading').remove();
            $('body').css('overflow-y','auto');
        })
    });
})


