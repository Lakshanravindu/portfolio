
  document.addEventListener("DOMContentLoaded", () => {
    const texts = ["Front End Developer   ", "Back End Developer   ", "Full Stack Developer   ", "Wordpress Developer   ","Social Media Consultant   ", "IT Support Specialist   ", "Junior Graphic Designer   "];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 300;
    const erasingSpeed = 200;
    const delayBetweenWords = 100;
    const target = document.getElementById("typing-animation");

    function type() {
      const currentText = texts[currentIndex];

      if (isDeleting) {
        target.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % texts.length;
          setTimeout(type, typingSpeed);
          return;
        }
      } else {
        target.textContent = currentText.substring(0, charIndex++);
        if (charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(type, delayBetweenWords);
          return;
        }
      }
      setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
    }

    setTimeout(type, typingSpeed);
  });

