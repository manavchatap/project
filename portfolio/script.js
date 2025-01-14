document.addEventListener("DOMContentLoaded", function () {
  const words = ["Web Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = '';
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const newWordDelay = 2000;

  function type() {
      if (charIndex < words[wordIndex].length) {
          currentWord += words[wordIndex].charAt(charIndex);
          document.querySelector('.typing-animation').textContent = currentWord;
          charIndex++;
          setTimeout(type, typingSpeed);
      } else {
          setTimeout(erase, newWordDelay);
      }
  }

  function erase() {
      if (charIndex > 0) {
          currentWord = currentWord.slice(0, -1);
          document.querySelector('.typing-animation').textContent = currentWord;
          charIndex--;
          setTimeout(erase, erasingSpeed);
      } else {
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, typingSpeed + 1100);
      }
  }

  type();
});



// Animate progress bars
const progressBars = document.querySelectorAll('.progress-done');

progressBars.forEach(bar => {
    setTimeout(() => {
        bar.style.width = bar.getAttribute('data-done') + '%';
        bar.style.opacity = 1;
    }, 500);
});

// Animate circular skills
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    let percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', percent);
});

function submitForm() {
    var formData = new FormData(document.getElementById('contact-form'));

    fetch('https://script.google.com/macros/s/AKfycby6Jl8u71VNFF1q0-NA3PeZmw9ngk8hzQYCsIngEf5b1WdLc8hZ04WSoPZVFtRnSWbx/exechttps://script.google.com/macros/s/AKfycbxrMm4w4GdwRBC38dU8r7q8hK1OQHrTDNjPBdKYZWTg1S-bZRLQ4VJGvpvnelyhMZ_q/exec', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            alert("Message Sent!");
            document.getElementById('contact-form').reset();  // Reset the form after submission
        })
        .catch(error => {
            alert("There was an error, please try again!");
            console.error(error);
        });
}



// const scriptURL = 'https://script.google.com/macros/s/AKfycbwA1yguS0kWRmTVQUSxOubUwhtmVay5A2SJhi97BmH-lN4Y1A5Yp-fYcj1Z4tEyOTZQ/exec'
// const form = document.forms['google-sheet']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
//     .catch(error => console.error('Error!', error.message))
// })

