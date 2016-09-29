$(document).ready(function(){
    var temple = $('#mightyParagraphHolder').children().first();
        $('button').on('click', function(){
        temple.prev().removeClass('highlight');
        temple.addClass('highlight');
        temple = temple.next();
    });
});