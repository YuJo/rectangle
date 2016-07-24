/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
  
  $("#root").css("background-color", getRandomColor())
    .css("z-index", 0);
  $("#divRight").css("background-color", getRandomColor())
    .css("z-index", 1);
  $("#divBottom ").css("background-color", getRandomColor())
    .css("z-index", 1);;
  
  $(".rectangle").on("click", function() {
    var thisRec = $(this);
    console.log(thisRec.width());
    console.log(thisRec.height());
    console.log(thisRec.css("z-index"));
  });
  
   $("#divRight").on("click", function() {
    var parent = $(this).parent();
    console.log(parent.width());
    console.log(parent.height());
    
    var thisRec = $(this);
    console.log(thisRec.css("z-index"));
  });
  
   $("#divBottom").on("click", function() {
    var parent = $(this).parent();
    console.log(parent.width());
    console.log(parent.height());
    
    var thisRec = $(this);
    console.log(thisRec.css("z-index"));
  });
  
  $("#right").on("click", function() {
    alert("right");
  });
  
  $("#bottom").on("click", function() {
    alert("bottom");
  });
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});

