$(document).ready(preloderFunction());
    
    
    
  function preloderFunction() {
    
      setTimeout(function() {
          
          // Force Main page to show from the Start(Top) even if user scroll down on preloader - Primary (Before showing content)
         
          // Model 1 - Fast            
          document.getElementById("page-top").scrollIntoView();
          let main = document.getElementById('main-1');
          // Model 2 - Smooth             
          // document.getElementById("page-top").scrollIntoView({behavior: 'smooth'});
                  
          
      
          
          // Removing Preloader:
          
          $('#ctn-preloader').addClass('loaded');  
          // Once the preloader has finished, the scroll appears 
          $('body').removeClass('no-scroll-y');
          $('main').removeClass('opi-1');
  
          if ($('#ctn-preloader').hasClass('loaded')) {
              // It is so that once the preloader is gone, the entire preloader section will removed
              $('#preloader').delay(2000).queue(function() {
                  $(this).remove();
                  
                  // If you want to do something after removing preloader:
                  afterLoad();
                  
              });
          }
      }, 3000);
  }
  
  
  
  function afterLoad() {
      // After Load function body!
  }