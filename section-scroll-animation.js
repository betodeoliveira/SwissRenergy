$(".section_scroll-anim").each(function(index) {
    gsap.set($(this), {'-webkit-filter':'grayscale(100%)'});
    gsap.set($(this), {opacity: 0.2});
    let sectionSufix = $(this).find(".section_sufix");
    gsap.set(sectionSufix, {opacity: 0});
    gsap.set(sectionSufix, {x: "-2rem"});
    ScrollTrigger.create({
        trigger: $(this),
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            gsap.to($(this), {'-webkit-filter':'grayscale(0%)', duration: 0.5});
            gsap.to($(this), {opacity: 1, duration: 0.5});
            gsap.to(sectionSufix, {opacity: 1, duration: 0.5});
            gsap.to(sectionSufix, {x: "0rem", duration: 0.5});
        },
        onEnterBack: () => {
            gsap.to($(this), {'-webkit-filter':'grayscale(0%)', duration: 0.5});
            gsap.to($(this), {opacity: 1, duration: 0.5});
            gsap.to(sectionSufix, {opacity: 1, duration: 0.5});
            gsap.to(sectionSufix, {x: "0rem", duration: 0.5});
        },
        onLeave: () => {
            gsap.to($(this), {'-webkit-filter':'grayscale(10%)', duration: 0.5});
            gsap.to($(this), {opacity: 0.2, duration: 0.5});
            gsap.to(sectionSufix, {opacity: 0, duration: 0.5});
            gsap.to(sectionSufix, {x: "2rem", duration: 0.5});
        },
        onLeaveBack: () => {
            gsap.to($(this), {'-webkit-filter':'grayscale(10%)', duration: 0.5});
            gsap.to($(this), {opacity: 0.2, duration: 0.5});
            gsap.to(sectionSufix, {opacity: 0, duration: 0.5});
            gsap.to(sectionSufix, {x: "-2rem", duration: 0.5});
        }
    });
});