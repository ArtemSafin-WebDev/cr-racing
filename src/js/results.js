export default function results() {
    const elements = Array.from(document.querySelectorAll('.js-results'));

    elements.forEach(element => {
        const btns = Array.from(element.querySelectorAll('.results__tables-card-link'));
        const items = Array.from(element.querySelectorAll('.results__tables-card-tabs-item'));

        const setActiveTab = index => {
            btns.forEach(btn => btn.classList.remove('active'));
            items.forEach(item => item.classList.remove('active'));

            btns[index].classList.add('active');
            items[index].classList.add('active');
        };

        if (items.length) {
            setActiveTab(0);
        }

        btns.forEach((btn, btnIndex) => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                setActiveTab(btnIndex);
            })
        })
    });
}
