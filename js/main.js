/*global console*/
$(function(){

//     var x;
//    for( i = 1; i<=14 ;i++){
//     x = 'dc';
//     x = x + i;
//    $(".card p").css('background-color',x);
//    console.log(x)
//    }  
   

/* Start Handling Contact Logo */
/*var logoNum = 0;
setInterval(function(){
    logoNum++;
    if(logoNum % 2 == 0){
        $('.contact-logo img').attr('src',"img/contact.png");
        console.log(logoNum);
    }
    else{
        $('.contact-logo img').attr('src',"img/Contact-logo2.png")
        console.log(logoNum);
    }

},1000);
*/
/* End Handlig Contact Logo */

/* */
$('.video-img-container').click(function(){
  $(this).css('display','none')
    $('.video-vemo-container').fadeIn(500);
})

/* */
var flag = 0;
$('.item .item-son1').click(function(){
  if(flag %2 == 0){
    $(this).siblings().css('display','none');
    $(this).animate({
        height:'200px',
    },20);
  }
  else {
    $('.item .item-son2').css('display','block');
    $(this).animate({
        height:'110px',
    },20);
  
  }
flag++;
});

});