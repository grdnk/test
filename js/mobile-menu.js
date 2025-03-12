document.querySelector('.mobile-open').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.add('opened');
    document.body.classList.add('overflow-hidden');
});

document.querySelector('.mobile-close').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.remove('opened');
    document.body.classList.remove('overflow-hidden');
});