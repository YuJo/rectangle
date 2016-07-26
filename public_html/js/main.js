/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

  (function () {
    $("#root").css("background-color", getRandomColor())
      .css("z-index", 0);
    $("#rootRight").css("background-color", getRandomColor())
      .css("z-index", 1).css("opacity", 0);
    $("#rootBottom ").css("background-color", getRandomColor())
      .css("z-index", 1).css("opacity", 0);
  }());

  var root = generateRectangle(500, 500);
  registerEventHandlers(root);

  $("#test").append(root);

  function registerEventHandlers(target) {
    // $(".rectangle").on("click", function () {

    var right, bottom;
    right = target.find(".div-right");
    bottom = target.find(".div-bottom");

    target.on("click", function () {
      var thisRec = $(this);
      var thisWidth,
        thisHeight,
        thisZindex;

      thisWidth = thisRec.width();
      thisHeight = thisRec.height();
      thisZindex = thisRec.css("z-index");

      // alert(thisWidth + " " + thisHeight + " " + thisZindex);
      console.log(thisWidth);
      console.log(thisHeight);
      console.log(thisZindex);
    });

    // $(".div-right").hover(
    right.hover(
      function () {
        $(this).fadeTo(1, 1);
      }, function () {
      $(this).fadeTo(1, 0);
    }
    );

    // $(".div-bottom").hover(
    bottom.hover(
      function () {
        $(this).fadeTo(1, 1);
      }, function () {
      $(this).fadeTo(1, 0);
    }
    );

    // $(".div-right").on("click", function (e) {
    right.on("click", function (e) {
      e.stopPropagation();
      var x, y, parent;
      parent = $(this).parent();
      x = parent.width() / 2;
      y = parent.height();

      parent.width(x);

      var newRight = generateRectangle(x, y);
      registerEventHandlers(newRight);
      parent.after(newRight);
    });

    // $(".div-bottom").on("click", function (e) {
    bottom.on("click", function (e) {
      e.stopPropagation();
      var x, y, parent;
      parent = $(this).parent();
      x = parent.width();
      y = parent.height() / 2;

      parent.height(y);

      var newRight = generateRectangle(x, y);
      parent.css("float", "initial");
      registerEventHandlers(newRight);
      parent.after(newRight);
    });

  }

  $("#rootRight").on("click", function (event) {
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

    // alert(thisWidth + " " + thisHeight + " " + thisZindex);
  });

  $("#rootBottom").on("click", function (event) {
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

    // alert(thisWidth + " " + thisHeight + " " + thisZindex);
  });

  $("#doLarge").on("click", function () {
    // alert("right");
    var root = $("#root");
    root.width(root.width() * 2);
    root.height(root.height() * 2);
  });

  $("#doSmall").on("click", function () {
    // alert("bottom");
    var root = $("#root");
    root.width(root.width() / 2);
    root.height(root.height() / 2);
  });

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function setXy2Rectangle(target, x, y) {
    target.width(x);
    target.height(y);
  }

  function generateRectangle(x, y) {
    var root = $("<div />", {
      "class": "rectangle root"
    });

    var right = $("<div />", {
      "class": "rectangle div-right"
    });

    var bottom = $("<div />", {
      "class": "rectangle div-bottom"
    });

    root.css("background-color", getRandomColor())
      .css("z-index", 0);
    right.css("background-color", getRandomColor())
      .css("z-index", 1).css("opacity", 0);
    bottom.css("background-color", getRandomColor())
      .css("z-index", 1).css("opacity", 0);
    root.append(right).append(bottom);

    root.width(x);
    root.height(y);

    return root;
  }

});
