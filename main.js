$(document).ready(function(){
$('.with-dropdown').mouseenter(function(){
$(this).find('.menu').show()
})
$('#main').click(function(){
 $('.menu').hide()
})
$('.menu  a').mouseenter(function(){
$(this).css({ 'border-bottom':'2px solid hotpink'})
})
$('.menu  a').mouseleave(function(){
    $(this).css({ 'border-bottom':'none'})

    })
})
















