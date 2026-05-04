AOS.init({
    duration: 800,
    once: true
});

window.addEventListener('load', function () {
    const loader = document.getElementById('loader');

    setTimeout(function () {
        loader.classList.add('loader-hidden');
    }, 1000);
});
