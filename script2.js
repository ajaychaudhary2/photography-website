$(document).ready(function() {
  
    setTimeout(function() {
      $('#ctn-preloader').addClass('loaded');
      // Una vez haya terminado el preloader aparezca el scroll
      $('body').removeClass('no-scroll-y');
  
      if ($('#ctn-preloader').hasClass('loaded')) {
        // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
        $('#preloader').delay(2000).queue(function() {
          $(this).remove();
        });
      }
    }, 2000);
    
  });



  function myFunction()  {
    let x = document.getElementById("list");
   
    if (x.style.display === "none") {
      x.style.display = "block";
     

    } else {
     
      x.style.display = "none";
    }}
