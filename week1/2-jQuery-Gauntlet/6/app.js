$(document).ready(function(){

    $('#item-select').find('option').remove();
    $.getJSON('http://localhost:3000/students', function(students){
        $.each(students, function(index){
            $('#item-select').append('<option>' + students[index]['name'] + '</option>')    
        })
    })

    $('#item-select').change(function(){
        var selected = $(this).find('option:selected'); 
        $('.btn.btn-success').on('click', function(){
            selected.remove();
             $('#item-to').append(selected);    
        })
    })

    $('#item-to').change(function(){
        var selected = $(this).find('option:selected'); 
        $('.btn.btn-warning').on('click', function(){
            selected.remove();
             $('#item-select').append(selected);    
        })
    })
})