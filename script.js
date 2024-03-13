window.addEventListener('scroll', function() {
    var nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 0);
});
