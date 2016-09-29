$(document).ready(function(){

    var arr = [];
    $.getJSON('http://localhost:3000/students', function(students, textStatus) {
      console.log(textStatus);
      $allStudentObjects = students;
      arr = students;
    });

    $('#course-select').change(function(){
        var selectedCourse = $('select[name=course-pick]').val();
        var studentsForSelectedCourse = arr.filter(function(item){return item['course']==selectedCourse});
        $.each(studentsForSelectedCourse, function(index){
            $('#select-option').append($('<option>' + studentsForSelectedCourse[index]['name'] + '</option>'))
        });
    });
})