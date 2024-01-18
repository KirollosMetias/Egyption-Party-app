$(".openNav").on('click' , function(){
    $("#nav").animate({ width:'250px'},50)
    $("#home-content").animate({marginLeft :'250px'},50)
    $("#nav").css('display' , 'block')
})
$(".closebtn").on('click' , function(){
    $("#nav").animate({ width:'0px'},50)
    $("#home-content").animate({marginLeft :'0px'},50)
})
                                                        //slider
$('#slider .card').on('click' , (function(){
    $('.sliderInfo').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000);
}));
                                                        //counter
window.onload = function() {
date("17 january 2024 9:56:00");
}
function date(counter) {
    let dateOfDay = new Date(counter);
    dateOfDay = (dateOfDay.getTime()/1000);
    let now = new Date();
    now = (now.getTime()/1000);
    remaining = (dateOfDay- now);
    let days = Math.floor( remaining / (24*60*60));
    let hours = Math.floor((remaining - (days*(24*60*60))) / 3600);
    let minutes = Math.floor((remaining - (days*(24*60*60)) - (hours*3600 )) / 60);
    let seconds = Math.floor((remaining - (days*(24*60*60)) - (hours*3600) - (minutes * 60)))
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} H`);
    $(".minutes").html(`${ minutes } M`);
    $('.seconds').html(`${ seconds} S`)
    setInterval(function(){ 
        date(counter);
    } , 1000);
}
                                                        //contact-us
    let characters = 100;
$('textarea').keyup(function() {
    let length = $(this).val().length;
    let charactersRemains = characters-length;
    if(charactersRemains <= 0){
    $("#Character").text("your available character finished");
    $("textarea").attr('disabled' , true)
    }
        else{
        $("#Character").text(charactersRemains);
        }
});
let charactersRemains = ''
$(".submitBtn").on('click', function(){
    if(charactersRemains <= 0){
        $("textarea").removeAttr('disabled')
        $('textarea').val('');
        $("#Character").text("100");       
    }
});