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


/*Starting Walid*/

    //displaying and hiding the ites on click
    $(".info .wrapper .item, .investment-sites .wrapper .item .details").on("click", function(e) {
        var allDetails = $(this).parents(".row, .custom-row").children()
                                .find(".item .details")
                                .not($(this).find(".details"));
                                
        if(allDetails.is(":visible")) {
            return;
        } else {
            $(this).find(".details").fadeToggle();
        }

    })

    
    var investmentItemWrapper = $(".investment-sites .custom-row .wrapper .holder");
    //this function adjusts the height of the detaials depend on the item height 
    //mutiblied by 3 times
    //and also adjusts the width 
    function adjustHeightAndWidth() {
            detailsWidth = investmentItemWrapper.outerWidth(),
            detailsHeight = investmentItemWrapper.outerHeight();

        //making Details height equal for three Items
        $(".investment-sites .wrapper .item .details")
            .css({"min-height": detailsHeight * 3 + 60, "height": "auto"})
            .outerWidth(detailsWidth)
        
        //making Detials width equal for two Items in small screens
        if($(window).outerWidth() < 991) {
            $(".investment-sites .wrapper span.vertical-detector").css("bottom", -detailsHeight - 100)
            $(".investment-sites .wrapper .item .details")
                .outerWidth(detailsWidth * 2 + 30)
        } else {
            $(".investment-sites .wrapper span.vertical-detector").css("bottom", "-100px")
        }

        //making the second row of items opens to top 
        //not to bottom just to stay in the continer
        $(investmentItemWrapper).each(function() {
            if($(window).outerWidth() > 992) {
                if($(this).parent().position().top == $(this).parent().outerHeight(true) ) {
                    $(this).find(".details").css({
                        "top": "calc(-100% - 30px)"
                    })
                }
            } else {
                $(this).find(".details").css({
                    "top": "0"
                })
            }
        })
    }
    adjustHeightAndWidth();


    var horizontalDetectorSpans = $(".investment-sites .custom-row .wrapper span.horizontal-detector"),
        verticalalDetectorSpans = $(".investment-sites .custom-row .wrapper span.vertical-detector"),
        customRow = $(".investment-sites .custom-row");
    function detectingOffset() {
        if(customRow.offset()) {
            var containerLeftOffset = customRow.offset().left,            
            customRowBottomOffset = customRow.find(".row-bottom-offset").offset().top;
        }

        //making the items on the left opens to right not to left just to not make
        //overflow scroll to the screen 
        horizontalDetectorSpans.each(function() {
            if($(this).offset().left < containerLeftOffset) {
                $(this).parents(".wrapper").find(".item .details").css({
                    "left": "0",
                    "right": "unset"
                })
            } else {
                $(this).parents(".wrapper").find(".item .details").css({
                    "right": "0",
                    "left": "unset"
                })

            }
        });

        //making the lowest row of items opens to top 
        //not to bottom just to stay in the continer
        verticalalDetectorSpans.each(function() {
            if($(this).offset().top > customRowBottomOffset && verticalalDetectorSpans.length > 12) {
                $(this).parents(".wrapper").find(".item .details").css({
                    "top": "calc(-200% - 60px)",
                    "height": "auto"
                })
            }
        });

    }
    detectingOffset()

    $(window).on("resize", function() {
        adjustHeightAndWidth();
        detectingOffset();

    })


    /////////////////////////////////////////////////
    ///**********************************************
    //  Start tha main slider and the nested slider 
    ///***********************************************
    /////////////////////////////////////////////////

    //the Home mains slider links switch active class
    $(".home-carousel .links li").on("click", function() {
        
        $(this).addClass("active").siblings().removeClass("active");

        $(".main-carousel .carousel-inner > div")
            .eq($(this).data("slide-to"))
            .fadeIn().siblings().fadeOut();;
    })

    //the index of the active slide in the nested slidere
    var activeSlide = 0;  

    //this is the function that disables the arrows
    function disableArrow() {
        if(activeSlide == 0) {
            $(".home-carousel #nested-carousel a.prev").css({
                "cursor": "default",
                "pointer-events": "none",
                "color": "#b9b4b4"
            })
        } else {
            $(".home-carousel #nested-carousel a.prev").css({
                "cursor": "pointer",
                "pointer-events": "all",
                "color": "black"
            })
        }

        if(activeSlide == 1) {
            $(".home-carousel #nested-carousel a.next").css({
                "cursor": "default",
                "pointer-events": "none",
                "color": "#b9b4b4"
            })
        } else {
            $(".home-carousel #nested-carousel a.next").css({
                "cursor": "pointer",
                "pointer-events": "all",
                "color": "black"
            })
        }
    }
    disableArrow()
    
    //the next slide function
    function next(activeElem, prevIndicator, nextIndicator) {

        if(!activeElem.is(":last-child")) {

            activeElem.fadeOut().next().fadeIn();
            activeElem.removeClass("active").next().addClass("active");

            prevIndicator.animate({
                left: -30
            });

            nextIndicator.animate({
                left: 30
            })

            activeSlide = 1
            disableArrow();

        } 
    }
    
    //the next slide function call
    $(".home-carousel #nested-carousel a.next").click(function() {

        next($(".home-carousel #nested-carousel .slide-inner > div.active"), 
            $(".home-carousel #nested-carousel .custom-indicators li.prev"), 
            $(".home-carousel #nested-carousel .custom-indicators li.next")
        );
   });

    //the previous slide function
   function prev(activeElem, prevIndicator, nextIndicator) {

        if(!activeElem.is(":first-child")) {

            activeElem.fadeOut().prev().fadeIn();
            activeElem.removeClass("active").prev().addClass("active");

            prevIndicator.animate({
                left: 0
            });

            nextIndicator.animate({
                left: 0
            })

            activeSlide = 0
            disableArrow();

        } 
   }
    
   //the previous function call
   $(".home-carousel #nested-carousel a.prev").click(function() {

        prev($(".home-carousel #nested-carousel .slide-inner > div.active"), 
            $(".home-carousel #nested-carousel .custom-indicators li.prev"), 
            $(".home-carousel #nested-carousel .custom-indicators li.next")
        );
   });

    //the indicators slide depend on the active slide index
    $(".home-carousel #nested-carousel .custom-indicators li:not(.active)").click(function() {

        if(activeSlide == 0) {
            
            next($(".home-carousel #nested-carousel .slide-inner > div.active"), 
                $(".home-carousel #nested-carousel .custom-indicators li.prev"), 
                $(".home-carousel #nested-carousel .custom-indicators li.next")
            );
        } else {

            prev($(".home-carousel #nested-carousel .slide-inner > div.active"), 
                $(".home-carousel #nested-carousel .custom-indicators li.prev"), 
                $(".home-carousel #nested-carousel .custom-indicators li.next")
            );
        }
    });

    /////////////////////////////////////////////////
    ///**********************************************
    //  Start Icons in the department-content.html 
    ///***********************************************
    /////////////////////////////////////////////////
        $(".content-d1-last .lastit li").click(function() {
            // if($(window).outerWidth() > 575) {
                $(this).find(".data").toggle(400).parent().siblings().find(".data").hide(400);
            // }
        });    



    /////////////////////////////////////////////////
    ///**********************************************
    //  Start navbar Toggler
    ///***********************************************
    /////////////////////////////////////////////////
    $("header .nav-toggler").click(function() {

        $("header .nav-links").toggleClass("shown")
        if($("header .nav-links").hasClass("shown")) {
            $("body").css("overflow", "hidden");
        } else {
            $("body").css("overflow", "auto");
        }

    });

});

