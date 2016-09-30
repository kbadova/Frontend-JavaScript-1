$(document).ready(function(){

    function filterStudentsObjects(field, selectedField, cb){
        $.getJSON('http://localhost:3000/students', function(students, textStatus) {
            var result = students.filter(function(item){
                return item[field]==selectedField
            });

            cb(result)
        })
    }

    $('#course-select').change(function(){
        var selectedCourse = $('select[name=course-pick]').val();
        filterStudentsObjects('course', selectedCourse, function(studentsForSelectedCourse){
            $('#select-option').find('.selectedStudents').remove();
            $.each(studentsForSelectedCourse, function(index){
                $('#select-option').append($('<option class="selectedStudents">' + studentsForSelectedCourse[index]['name'] + '</option>'))
            })
        });
    });
    $('#select-option').change(function(){
        var selectedStudent = $(this).val();
        filterStudentsObjects('name', selectedStudent, function(selectedStudents){
            var githubAccountArr = {};
            $.each(selectedStudents, function(index){
                var name = selectedStudents[index]['name'];
                githubAccountArr[name] = selectedStudents[index]['github'];
            })
            $.each(githubAccountArr, function(key, value){
                $('.col-xs-12').find('h2').remove();
                $('.col-xs-12').last().append($('<h3> GitHub for  ' + key + ' is ' + value + '</h3>'))
            })
            })
    });
});