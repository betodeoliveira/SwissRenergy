$(".section_scroll-anim").each(function (index) {
    // Configurate the section filter and opacity
    gsap.set($(this), { '-webkit-filter': 'grayscale(100%)' });
    gsap.set($(this), { opacity: 0.2 });
    // Hide the section sufix
    let sectionSufix = $(this).find(".section_prefix");
    gsap.set(sectionSufix, { opacity: 0 });
    gsap.set(sectionSufix, { x: "-2rem" });
    // Condigurate the scroll animation
    ScrollTrigger.create({
        trigger: $(this),
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            playOnEnter($(this), sectionSufix);
        },
        onEnterBack: () => {
            playOnEnter($(this), sectionSufix);
        },
        onLeave: () => {
            playOnLeave($(this), sectionSufix);
        },
        onLeaveBack: () => {
            playOnLeave($(this), sectionSufix);
        }
    });
});

function playOnEnter(section, sufix) {
    gsap.to(section, { '-webkit-filter': 'grayscale(0%)', duration: 0.5 });
    gsap.to(section, { opacity: 1, duration: 0.5 });
    gsap.to(sufix, { opacity: 1, duration: 0.5 });
    gsap.to(sufix, { x: "0rem", duration: 0.5 });
}

function playOnLeave(section, sufix) {
    gsap.to(section, { '-webkit-filter': 'grayscale(10%)', duration: 0.5 });
    gsap.to(section, { opacity: 0.2, duration: 0.5 });
    gsap.to(sufix, { opacity: 0, duration: 0.5 });
    gsap.to(sufix, { x: "2rem", duration: 0.5 });
}

// Listen for window resize and if it does refresh the trigger
let resizeTimeoutId;
const resizeObserver = new ResizeObserver(entries => {
    // console.log('Body height changed');
    clearTimeout(resizeTimeoutId);
    resizeTimeoutId = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 200);
});

// start observing a DOM node
resizeObserver.observe(document.body);