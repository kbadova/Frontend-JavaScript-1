$(document).ready(function(){
    generateRandomNumber();

    function generateRandomNumber(){
        var rand_num = Math.floor(Math.random() * 900000000000);
        $('.container').find('h1').find('span').text(rand_num);
    }
    function generateRandomNumberLength(){
        return $('.container').find('h1').find('span').text().length;
    }

    

    $(".btn.btn-lg:not('.btn-warning')").on('click', function(){
        if ($('.enteredNumbers').length == generateRandomNumberLength()){
                var onlyNumbers = $('.col-xs-12').find('h3').text().replace(/\D/g, '');
                if (onlyNumbers == $('.container').find('h1').find('span').text()){
                    generateRandomNumber();
                    $('.col-xs-12').find('h3').remove();
                    return
                }
        }
        var numberButton = $(this).text();
        $('.col-xs-12').last().append($('<h3 class="enteredNumbers">You entered ' + numberButton +'</h3>'));
    })
    $('.btn.btn-lg.btn-warning').on('click', function(){
        $('.col-xs-12').find('h3').last().remove();
    })
});

