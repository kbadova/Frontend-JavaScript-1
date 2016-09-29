$(document).ready(function() {
     $('#search-button').on('click', function(){
        var url = $('#search-input').val();
        if (checkUrl(url)){
        var img = $('<img src="' + url + '" class="imgClass">');

        $('.col-xs-12').append(img);
        $('.imgClass').fadeIn('slow');
    } else{
        alert("Not a valid image url")
    }
    });
     $('body').on('click', 'img', function(){
        $(this).remove();
    });
});

function checkUrl(url){
    var pattern = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
    return url.match(pattern);
}
