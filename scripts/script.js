// JavaScript Document
const triggerMarker = document.querySelector('header');
var navBar = document.querySelector('.none');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navBar.classList.add('visible');
        } else {
            navBar.classList.remove('visible');
        }
    })
});

observer.observe(triggerMarker);