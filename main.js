var typed=new Typed(".text",{
    strings:["Frontend Developer","Java Developer","SQL Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});

// document.addEventListener('DOMContentLoaded', () => {
//     const elems = {
//         logo: document.querySelector('.logo'),
//         navLinks: document.querySelectorAll('.navbar a'),
//         homeHeadings: document.querySelectorAll('.home-content h3, .home-content h1'),
//         homeParagraph: document.querySelector('.home-content p'),
//         homeSocials: document.querySelectorAll('.home-sci a'),
//         btnBox: document.querySelector('.btn_box'),
//         scrollSections: document.querySelectorAll('.about, #services, .container1, .portfolio-content, .contact'),
//         topBtn: document.querySelector('.top i')
//     };

//     const animate = (el, anim, delay = 0) => {
//         el.style.animation = `${anim} 1s ease ${delay}s forwards`;
//         el.style.opacity = '1';
//     };

//     // Home animations
//     animate(elems.logo, 'slideRight');
//     elems.navLinks.forEach((l,i) => animate(l, 'slideTop', i*0.2 + 0.5));
//     elems.homeHeadings.forEach((h,i) => animate(h, h.tagName==='H3'?'slideBottom':'slideRight', h.tagName==='H3'?i*0.5+0.7:1));
//     animate(elems.homeParagraph, 'slideLeft', 1.2);
//     elems.homeSocials.forEach((s,i) => animate(s, 'slideLeft', i*0.2+1.5));
//     animate(elems.btnBox, 'slideTop', 2);

//     // Scroll animations
//     const inView = (el, offset=150) => el.getBoundingClientRect().top <= window.innerHeight - offset;
//     const show = el => { el.style.opacity='1'; el.style.transform='translateY(0)'; el.style.transition='opacity 0.8s ease-out, transform 0.8s ease-out'; };
//     const scrollHandler = () => {
//         elems.scrollSections.forEach(el => { if(inView(el)) show(el); });
//         elems.topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
//     };
//     window.addEventListener('scroll', scrollHandler);
//     window.addEventListener('resize', scrollHandler);
//     scrollHandler();

//     // Smooth scroll
//     elems.navLinks.forEach(link => {
//         link.addEventListener('click', e => {
//             e.preventDefault();
//             document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
//         });
//     });

//     // Back to top
//     elems.topBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
// });
