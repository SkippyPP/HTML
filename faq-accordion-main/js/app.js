document.addEventListener('click', event => {
    const header = event.target.closest('.header')
    if (!header) return

    const openItem = document.querySelector('.header.active')
    header.classList.toggle('active')
    const content = header.nextElementSibling;
    const icon = header.querySelector('.icon')

    if (header.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px'
        icon.src = 'assets/images/icon-minus.svg'
    } else {
        content.style.maxHeight = null;
        icon.src = 'assets/images/icon-plus.svg'
    }
})