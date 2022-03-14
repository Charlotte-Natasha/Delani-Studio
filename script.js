$(document).ready(function(){
    $('.iconOne').click(function(){
   $('.hidden').toggle();
   });

   $('.iconTwo').click(function(){
    $('.hiddenOne').toggle();
    });

    $('.iconThree').click(function(){
        $('.hiddenTwo').toggle();
        });

   $('.col-md-3').snakeify({
    speed:250
})

$('#btn-alert').click(function(){
    $.alert('Message sent')
});
});













