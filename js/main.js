
$(document).ready(function(){

    $nav = $("#navi");
    $togglediv = $("#toggi");

    $togglediv.click(function() {
        $nav.toggleClass("collapse");
        
    })

    // OWL carousel of blog
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$(".owl-navigation .owl-nav-previous"),$(".owl-navigation .owl-nav-next")], // is "navText wali line main humne yeh kia hai k jo navigation k icons lagae the na humne, woh icons humne phele se bani navigation ko assign krdye matlab us navigation icons main navigate krne ki taqat agai. 
        responsive : {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            560: {
                items: 2
            },
            960: {
                items: 3
            }
        }
    });
    
    //click to move up
    $(".move-up i").click(function(){
        $("html,body").animate({scrollTop:0}, 1000)
    })

    // Animation on scroll

    AOS.init();
});

// const moveup = document.getElementById("#top");
//  moveup.addEventListener("click", function(){ //there is a error in this line and i dont know what it is! this code isn't working!!!
//     window.scrollTo({top :0 , behavior : "smooth"});
// })