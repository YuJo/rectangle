/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
  
  $(".rectangle").on("click", function() {
    var thisRec = $(this);
    console.log(thisRec.width());
    console.log(thisRec.height());
  });
  
   $("#divRight").on("click", function() {
    var parent = $(this).parent();
    console.log(parent.width());
    console.log(parent.height());
  });
  
   $("#divBottom").on("click", function() {
    var parent = $(this).parent();
    console.log(parent.width());
    console.log(parent.height());
  });
  
  $("#right").on("click", function() {
    alert("right");
  });
  
  $("#bottom").on("click", function() {
    alert("bottom");
  });
});

