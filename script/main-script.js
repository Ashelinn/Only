const spoiler = () => {
    let spoilers = document.querySelectorAll('.spoilers__button');
    console.log(spoilers);
    if (spoilers) {
        spoilers.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            })
        });
    }
}
spoiler();