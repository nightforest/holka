import { vars } from './vars.js';

const enableScroll = () => {
    const fixBlocks = document?.querySelectorAll('.fixed-block');
    const pagePosition = parseInt(vars.bodyEl.dataset.position, 10);
    fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
    vars.bodyEl.style.paddingRight = '0px';
  
    vars.bodyEl.style.top = 'auto';
    vars.bodyEl.classList.remove('scroll-disabled');
    window.scroll({
      top: pagePosition,
      left: 0
    });
    vars.bodyEl.removeAttribute('data-position');
    vars.htmlEl.style.scrollBehavior = 'smooth';
}

export default enableScroll;