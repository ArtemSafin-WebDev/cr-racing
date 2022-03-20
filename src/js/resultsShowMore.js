export default function resultsShowMore() {
    const elements = Array.from(document.querySelectorAll('.results__tables-card-table-show-more'));

    elements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            const table = element.closest('.results__tables-card-table').querySelector('table');

            if (!table) return;

            table.classList.remove('has-show-more');

            element.parentElement.remove();
        });
    });
}
