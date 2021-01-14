$(document).ready(function(){
    
    $('#loading').fadeOut(2000,function(){
        $('body').css('overflow','visible')
        new WOW().init();
    })
    
})
$('.fixed-part ').click(function(){
    if($(this).next().css('display') === 'block'){
        $(this).next().slideUp(1000)
    }else{
        $('.expand-part').slideUp(1000)
        $(this).next().slideDown(1000)
    }
    
})

$('.nav-open').click(function(){
    let width=$('.nav').outerWidth()
    console.log(width)
    $('.nav').css("left","0px")
})

$('.closer').click(function(){
    let width=$('.nav').outerWidth()
    $('.nav').css('left',"-250px")
})

$('.my-text-area').keyup(function(){
    let length =$(this).val().length
    $('.message-counter').html(100-length)
    if(length >= 101){
        $('#error').html('you cant add more letters')
        $('.send-button').css('opacity','0')
        $('.message-counter').addClass('text-danger')
    }else{
        $('#error').html('')
        $('.send-button').css('opacity','1')
        $('.message-counter').removeClass('text-danger')
    }
})

////////////////////////////

function countDownClock(){
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    // Update the count down every 1 second
    
    
      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    
      var daysDecimal =distance/(1000*60*60*24)
      
      function hi(num){
        arr=num.toString().split('.')
        int=parseInt(arr[0])
        dec=parseFloat('.'+arr[1])
        return {int,dec}
      }

      var days=hi(daysDecimal).int
      var hoursDecimal=hi(daysDecimal).dec*24
      var hours =hi(hoursDecimal).int
      var minutesDecimal=hi(hoursDecimal).dec*60 
      var minutes=hi(minutesDecimal).int
      var secondsDecimal=hi(minutesDecimal).dec*60 
      var seconds =hi(secondsDecimal).int
    

    //   console.log(days,hours,minutes,seconds)

      $('.days').text(days+' d')
      $('.hours').text(hours+' h')
      $('.minutes').text(minutes+' m')
      $('.seconds').text(seconds+' s')
      
}

setInterval(countDownClock,1000)


$(".nav-link").click(function(){
    let targetElementId=$(this).attr("href")
    let targetElementDistanceToTop=$(targetElementId).offset().top
    $('html,body').animate({ scrollTop:targetElementDistanceToTop },1000)
})

$(window).scroll(function(){
    console.log($(window).scrollTop())
    if($(window).scrollTop() > 600){
        $('#Top').css('display','flex')
    }else{
        $('#Top').css('display','none')
    }
})

$('#Top').click(function(){
    $('html,body').animate({scrollTop:0},2000)
})

