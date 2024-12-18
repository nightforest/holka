const dataTrigger = () => {
    const toggleAll = document.querySelectorAll('[data-trigger]');

    const changeHeight = () => {
        const vh = window.innerHeight * 0.01;
        const headerHeight = document.querySelector('.header').offsetHeight;

        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.documentElement.style.setProperty('--header-h', `${headerHeight}px`);
    };
    
    toggleAll?.forEach(item => {
        item.addEventListener('click', function(e) {
            const menuID = item.getAttribute('data-trigger');
            const menu = document.getElementById(menuID);
            const isExpanded = item.getAttribute('aria-expanded');
            
            e.preventDefault();
            
            if (isExpanded === 'false') {
                item.setAttribute('aria-expanded', true);

                menu.setAttribute('aria-hidden', false);
            } else {
                item.setAttribute('aria-expanded', false);

                menu.setAttribute('aria-hidden', true);
            }

            changeHeight();
        });
    });
}

export default dataTrigger;
