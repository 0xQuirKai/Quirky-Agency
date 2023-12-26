//rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second.
var src = ["./assets/images/project-1.jpg", "./assets/images/project-4.jpg", "./assets/images/project-5.jpg", "./assets/images/project-2.jpg", "./assets/images/project-3.jpg"]


gsap.registerPlugin(ScrollTrigger)
    //gsap.to("body", { opacity: 1, delay: 1, duration: 2, ease: "power1.out", });
gsap.to(".service-card", {
    opacity: 1,
    duration: 1,

    stagger: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".service", // make .panel2 the trigger
        start: "30% bottom", // 10% of .panel2 enters the bottom of the viewport
        // Whatever other ScrollTrigger vars you need here
    }
});
const tl = gsap.timeline();
const tl2 = gsap.timeline();

var btns = Array.from(document.getElementsByClassName("filter-btn"))
btns.forEach(element => {
    element.addEventListener('click', e => {
        if (!element.classList.contains('active')) {
            btns.forEach(e => {
                e.classList.remove('active')
                element.classList.add('active')

            })
            tl.to("#prj1", { x: -850, duration: 1, ease: "power1.out", });
            tl.set("#prj1", { delay: 1, attr: { src: src[Math.floor(Math.random() * src.length)] } });
            tl.to("#prj1", { x: 0, duration: 0.5, ease: "power4.in", });
            tl2.to("#prj2", { y: 450, duration: 1, ease: "power1.out", });
            tl2.set("#prj2", { delay: 1, y: -450, attr: { src: src[Math.floor(Math.random() * src.length)] } });
            tl2.to("#prj2", { y: 0, duration: 0.5, ease: "power4.in", });
            tl.play()
            tl2.play()
        }


    })
});

gsap.from(".footer-tt", {
    y: -500,
    scrollTrigger: {
        trigger: ".blog",
        start: "bottom bottom",
        scrub: true,
    },
});