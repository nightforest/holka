import disableScroll from "./disableScroll";
import enableScroll from "./enableScroll";

const dataToggle = () => {
    const header = document.querySelector('.header');
    const backdrop = document.querySelector('.backdrop');
    const toggleAll = document.querySelectorAll('[data-toggle]');
    
    toggleAll?.forEach(item => {
        item.addEventListener('click', function(e) {
            const activeItem = document.querySelector('[data-toggle][aria-expanded="true"');
            const menuID = item.getAttribute('data-toggle');
            const menu = document.getElementById(menuID);
            const buttonsAll = document.querySelectorAll(`[data-toggle="${menuID}"]`);
            const isExpanded = item.getAttribute('aria-expanded');
            
            e.preventDefault();

            if (activeItem != item) {
                const activeMenuID = activeItem?.getAttribute('data-toggle');
                const activeMenu = document.getElementById(activeMenuID);
                const activeButtonsAll = document.querySelectorAll(`[data-toggle="${activeMenuID}"]`);

                activeButtonsAll.forEach(item => {
                    item.setAttribute('aria-expanded', false);
                });
                
                activeMenu?.setAttribute('aria-hidden', true);

                if (!item.hasAttribute('data-scroll-disabled') && activeItem?.hasAttribute('data-scroll-disabled')) {
                    enableScroll();
                    backdrop.classList.remove('is-visible');
                    header.classList.remove('is-active');
                }
            }
            
            if (isExpanded === 'false') {
                buttonsAll.forEach(item => {
                    item.setAttribute('aria-expanded', true);
                });

                menu.setAttribute('aria-hidden', false);

                if (item.hasAttribute('data-scroll-disabled')) {
                    disableScroll();
                    backdrop.classList.add('is-visible');
                    header.classList.add('is-active');
                }
            } else {
                buttonsAll.forEach(item => {
                    item.setAttribute('aria-expanded', false);
                });

                menu.setAttribute('aria-hidden', true);

                if (item.hasAttribute('data-scroll-disabled')) {
                    enableScroll();
                    backdrop.classList.remove('is-visible');
                    header.classList.remove('is-active');
                }
            }
        });
    });

    document.body.addEventListener('click', e => {
        const isHidden = e.target.closest('[aria-hidden="false"]');
        const isToggle = e.target.closest('[data-toggle]');

        if (!isHidden && !isToggle) {
            const activeItem = document.querySelector('[data-toggle][aria-expanded="true"');
            const activeMenuID = activeItem?.getAttribute('data-toggle');
            const activeMenu = document.getElementById(activeMenuID);

            activeItem?.setAttribute('aria-expanded', false);
            activeMenu?.setAttribute('aria-hidden', true);

            if (activeItem?.hasAttribute('data-scroll-disabled')) {
                enableScroll();
                backdrop.classList.remove('is-visible');
                header.classList.remove('is-active');
            }
        }
    });
}

export default dataToggle;