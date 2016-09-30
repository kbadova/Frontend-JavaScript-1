"use strict";

$(document).ready(function() {

  $.getJSON('http://localhost:3000/students', function(students, textStatus) {
    $.each(students, function(index){
     var html = '<tr><td>' +  (parseInt(index) + 1) + '</td> <td>' + students[index]['name'] + '</td> <td> '+ students[index]['course'] +' </td> </tr>';
      $('tbody').append(html);
    })
  });

  function getData(cb){
    var allCourses = {};
    $.getJSON('http://localhost:3000/students', function(students, textStatus) {
      $.each(students, function(index){
        if (allCourses[students[index]['course']]){
          allCourses[students[index]['course']].push(students[index]['name']); 
        } else{
         allCourses[students[index]['course']]=[students[index]['name']] ;
          }
        });
      cb(allCourses)
    });
  }
  $("#group-btn").on("click", function() {
    getData(function(allCourses){
      $.each(allCourses, function(index){
        var filteredBy = '<p>' + index + '</p>';
        $("#group-btn").closest('div').append(filteredBy);
        var table = '<table class="table filteredTable"><thead><th>Id</th> <th>Name</th</thead</table>';
        $("#group-btn").closest('div').append(table);
        var listWithPeopleOnThatCourse = allCourses[index];
        $.each(listWithPeopleOnThatCourse, function(index){
          var html = '<tr><td>' +  (parseInt(index) + 1) + '</td> <td>' + listWithPeopleOnThatCourse[index] + '</td></tr>';
          $('.filteredTable').last().append(html);
        })
      })
    });
  });

  $("#search-btn").on("click", function() {
    $('#students-table').find('td').css({"color":"black"})
    var searched = $("#search-box").val().toLowerCase();
    if (searched != ""){
      $('#students-table').find('td').filter(function(item){
        if ($(this).text().toLowerCase().includes(searched)){
            console.log("dsfsd");
            $(this).css({"color":"green"});
        }
      });
    } else {
      $(this).append('<p>You have not entered a search value</p>');
    }
  });
});
