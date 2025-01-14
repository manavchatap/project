const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
   bar.addEventListener('click',() => {
     nav.classList.add('active');
    })
}

function showSidebar() {
  const sidebar = document.querySelector('.bar')
  sidebar.style.display = 'flex'
}

if (close) {
    close.addEventListener('click',() => {
      nav.classList.remove('active');
     })
 }