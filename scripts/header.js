const header = document.getElementById('header');

document.addEventListener('scroll', () => {

    let scrollTop = window.scrollY;

    if (scrollTop > 0) {
        header.classList.add('rolar');

    } else {
        header.classList.remove('rolar');
    }
});

const btnMobile = document.getElementById("btnMobile");
const navList = document.getElementById("navList");
const icon = document.querySelector('.mobile-menu button i');
const body = document.getElementById('body');
const html = document.getElementById('html');
const link = document.querySelectorAll('.nav-list a');

btnMobile.addEventListener('click', () => {

    html.classList.toggle('active-body');
    body.classList.toggle('active-body');
    btnMobile.classList.toggle('btn-active');
    navList.classList.toggle("active");
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

link.forEach(link => {
    link.addEventListener('click', () => {

        if (navList.classList.contains('active')) {

            html.classList.toggle('active-body');
            body.classList.remove('active-body');
            navList.classList.remove('active');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    })
})