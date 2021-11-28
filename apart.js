function classToggle() {
    const navs = document.querySelectorAll('#navbars')

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.menu')
    .addEventListener('click', classToggle);