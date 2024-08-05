// scripts.js

// Countdown Timer
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    
    // Replace this with the actual date of the birthday
    const birthdayDate = new Date('2024-08-06T00:00:00').getTime();

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = birthdayDate - now;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "Happy Birthday Akku! You the Bestestttt!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = 
            days + "d " +
            hours + "h " +
            minutes + "m " +
            seconds + "s ";
    }, 1000);
}

// Initialize the countdown timer
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
});

const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 