$(document).ready(function(){
    var slideIndex = 0;
    var slides = document.getElementsByClassName("carousel-item");
    
    function showSlide() {
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      
      slides[slideIndex-1].classList.add("active");
      
      setTimeout(showSlide, 2000); // Altera o slide a cada 3 segundos (3000 ms)
    }
    
    showSlide();
  });

  // 
  // 
  // 
  // 
  // Inicio JS Cartão de Crédito
  