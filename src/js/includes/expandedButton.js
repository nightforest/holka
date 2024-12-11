const expandedButton = () => {
    const expandedButtonAll = document.querySelectorAll('.decision-card__toggle');

    expandedButtonAll.forEach(item => {
        const dataExpandedCaption = JSON.parse(item.getAttribute('data-expanded-caption'));
        const spanEl = item.querySelector('span')

        item.addEventListener('click', () => {
            spanEl.innerText === dataExpandedCaption[0] 
                ? spanEl.innerText = dataExpandedCaption[1] 
                : spanEl.innerText = dataExpandedCaption[0]
        });
    });
}

export default expandedButton;


