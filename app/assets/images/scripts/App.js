import '../styles/styles.css';
import MobileMenu from './modules/mobile-menu'
import RevealOnScroll from './modules/reveal-on-scroll'
import StickyHeader from './modules/sticky-header'

new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);
let stickyHeader = new StickyHeader();

let mobileMenu = new MobileMenu();

if(module.hot){
    module.hot.accept();
}




