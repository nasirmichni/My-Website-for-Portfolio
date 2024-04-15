document.addEventListener('DOMContentLoaded', function() {
    const aboutText = "I am a creative designer and developer, who aims to work with small businesses and marginalized communities to bring their passions to life. I offer both design and development services of web applications or websites, so hit me up with your weird artistic project ideas or app proposals!";
    const aboutParagraph = document.querySelector('.about-text');
    let index = 0;
  
    function typeWriter() {
      if (index < aboutText.length) {
        aboutParagraph.textContent += aboutText[index];
        index++;
        setTimeout(typeWriter, 20); // Adjust typing speed here (milliseconds)
      }
    }
  
    typeWriter();
  });

  document.addEventListener('DOMContentLoaded', function() {
    const footerContent = document.getElementById('footer-content');
    
    // Get current year
    const currentYear = new Date().getFullYear();
    
    // Set your name and current year as the footer content
    footerContent.innerHTML = '&copy; Web<b>Mania</b> All Rights Reserved ' + currentYear;
  });