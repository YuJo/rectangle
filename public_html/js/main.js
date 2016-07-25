/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

  $("#root").css("background-color", getRandomColor())
    .css("z-index", 0);
  $("#divRight").css("background-color", getRandomColor())
    .css("z-index", 1).css("opacity", 0);
  $("#divBottom ").css("background-color", getRandomColor())
    .css("z-index", 1).css("opacity", 0);

  $(".rectangle").on("click", function () {
    var thisRec = $(this);
    var thisWidth,
      thisHeight,
      thisZindex;

    thisWidth = thisRec.width();
    thisHeight = thisRec.height();
    thisZindex = thisRec.css("z-index");

    alert(thisWidth + " " + thisHeight + " " + thisZindex);

  });

  $("#divRight").hover(
    function () {
      $(this).fadeTo(1, 1);
    }, function () {
    $(this).fadeTo(1, 0);
  }
  );

  $("#divBottom").hover(
    function () {
      $(this).fadeTo(1, 1);
    }, function () {
    $(this).fadeTo(1, 0);
  }
  );

  $("#divRight").on("click", function (event) {
    event.stopPropagation();
    var parent = $(this).parent();
    console.log(parent.width());
    console.log(parent.height());

    var thisRec = $(this);
    var thisWidth,
      thisHeight,
      thisZindex;
    thisWidth = thisRec.width();
    thisHeight = thisRec.height();
    thisZindex = thisRec.css("z-index");

    alert(thisWidth + " " + thisHeight + " " + thisZindex);
  });

  $("#divBottom").on("click", function (event) {
    event.stopPropagation();
    var parent = $(this).parent();
    console.log(parent.width());
    console.log(parent.height());

    var thisRec = $(this);
    var thisWidth,
      thisHeight,
      thisZindex;
    thisWidth = thisRec.width();
    thisHeight = thisRec.height();
    thisZindex = thisRec.css("z-index");

    alert(thisWidth + " " + thisHeight + " " + thisZindex);

  });

  $("#right").on("click", function () {
    alert("right");
  });

  $("#bottom").on("click", function () {
    alert("bottom");
  });

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
