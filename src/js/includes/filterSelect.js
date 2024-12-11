const filterSelect = () => {
    const filterSelectButtonAll = document.querySelectorAll('.filter-select__button');

    filterSelectButtonAll.forEach(item => {
        item.addEventListener("click", () => {
            const filterSelectToggle = item.closest('.filter-select').querySelector('.filter-select__toggle');
            const filterSelectToggleTitle = filterSelectToggle?.querySelector('.filter-select__toggle-title');
            const filterSelectDropdown = item.closest('.filter-select').querySelector('.filter-select__dropdown');
            const activeButton = filterSelectDropdown.querySelector('.filter-select__button.is-active');
            
            if (filterSelectToggleTitle) {
                filterSelectToggleTitle.innerText = item.innerText;
            }

            filterSelectToggle.setAttribute("aria-expanded", false);
            filterSelectDropdown.setAttribute("aria-hidden", undefined);
            
            if (item != activeButton) {
                item.classList.add('is-active')
                activeButton.classList.remove('is-active')
            }
        });
    });
}

export default filterSelect;