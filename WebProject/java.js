var navLinks = document.getElementById('navLinks');
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
$(function(){
  $("#slide").hide().show(2000);
  });
$(function(){
  $("#rgslide").hide().show(1100);
  });
 $(function(){
      $("#btn1h").on("click", function() {
        $("#slide1").hide(1000);
      });
  });
  $(function(){
       $("#btn1s").on("click", function() {
           $("#slide1").show(1000);
       });
         });

         $(function(){
              $("#btn2h").on("click", function() {
                $("#slide2").hide(1000);
              });
          });
          $(function(){
               $("#btn2s").on("click", function() {
                   $("#slide2").show(1000);
               });
                 });
 $(function(){
$("#btn3h").on("click", function() {
  $("#slide3").hide(1000);
});
});
$(function(){
     $("#btn3s").on("click", function() {
         $("#slide3").show(1000);
     });       });


     $(function(){
          $("#btn4h").on("click", function() {
            $("#slide4").hide(1000);
          });
      });
      $(function(){
           $("#btn4s").on("click", function() {
               $("#slide4").show(1000);
           });
             });
             $(function(){
                  $("#btn5h").on("click", function() {
                    $("#slide5").hide(1000);
                  });
              });
              $(function(){
                   $("#btn5s").on("click", function() {
                       $("#slide5").show(1000);
                   });
                     });
