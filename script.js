const toggles = document.querySelectorAll('.faq-toggle');
const buttonToggle = document.querySelector('.faq-toggle');


toggles.forEach(toggle=>{
    toggle.addEventListener('click', e=>{
        toggle.parentNode.classList.toggle('active');
    })
});

