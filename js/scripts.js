var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$('.landing').mousemove(function(e) {
      var width = $(this).width() / 2;
      var height = $(this).height() / 2;
      var amountMovedX1 = ((width - e.pageX) * -1 / 16);
      var amountMovedY1 = ((height - e.pageY) * -1 / 16);

      var amountMovedX2 = ((width - e.pageX) / 40);
      var amountMovedY2 = ((height - e.pageY) / 30);

      /*    var amountMovedX3 = ((width - e.pageX) / 20);
          var amountMovedY3 = ((height - e.pageY) / 20);

          var amountMovedX4 = ((width - e.pageX) * -1 / 10);
          var amountMovedY4 = ((height - e.pageY) * -1 / 20);

          $('.shapes1').css('marginLeft', amountMovedX1);
          $('.shapes1').css('marginTop', amountMovedY1);

          $('.shapes2').css('marginLeft', amountMovedX2);
          $('.shapes2').css('marginTop', amountMovedY2);

          $('.shapes3').css('marginLeft', amountMovedX3);
          $('.shapes3').css('marginTop', amountMovedY3);

          $('.shapes4').css('marginLeft', amountMovedX4);
          $('.shapes4').css('marginTop', amountMovedY4);
      	});
