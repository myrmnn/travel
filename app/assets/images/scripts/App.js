import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/mobile-menu'
import RevealOnScroll from './modules/reveal-on-scroll'
import StickyHeader from './modules/sticky-header'
import ClientArea from './modules/ClientArea'
new ClientArea();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);
new MobileMenu();
let modal;
document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
      if(typeof modal == "undefined"){
        import(/* webpackChunkName:"modal" */ './modules/Modal').then(x => {
            modal = new x.default()
            setTimeout(() => {
                modal.openTheModal()
            }, 20);
        }).catch(() => console.log('error'))
      } else {
        modal.openTheModal();
      }
    })
})

if(module.hot){
    module.hot.accept();
}




