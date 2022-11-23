// Hide the background
$(".page-background-layout").css("opacity", "0");

// Saves if the animation started laying
let animationIsPlaying = false;

// The background will appear when the hero start scrolling out
ScrollTrigger.create({
    trigger: ".section_home-hero",
    start: "bottom center",
    end: "bottom center",
    onEnter: () => {
        if(!animationIsPlaying) {
            console.log("Start playing");
            animationIsPlaying = true;
            configurateAnimation();
        }
        gsap.to($(".page-background-layout"), {opacity: 1, duration: 0.5});
    },
    onEnterBack: () => {
        gsap.to($(".page-background-layout"), {opacity: 0, duration: 0.5});
    }
});

function configurateAnimation() {
    $(".page-background_column-fill").each(function(index) {
        let delay = Math.random() * 3000;
        gsap.set($(this), {scaleY: 0});
        setTimeout(() => {
            columnPlay($(this));
        }, delay);
    });
    
    $(".page-background_line-fill").each(function(index) {
        let delay = Math.random() * 3000;
        gsap.set($(this), {scaleX: 0});
        setTimeout(() => {
            linePlay($(this));
        }, delay);
    });
};

function columnPlay(column) {
    gsap.to(column, {scaleY: 1, duration: 0.5});
    gsap.to(column, {y: "100%", duration: 0.5, delay: 10, onComplete: () => {
        setTimeout(() => {
            gsap.set(column, {scaleY: 0});
            gsap.set(column, {y: "0%"});
            columnPlay(column);
        }, 2000);
    }});
}

function linePlay(line) {
    gsap.to(line, {scaleX: 1, duration: 0.5});
    gsap.to(line, {x: "100%", duration: 0.5, delay: 10, onComplete: () => {
        setTimeout(() => {
            gsap.set(line, {scaleX: 0});
            gsap.set(line, {x: "0%"});
            linePlay(line);
        }, 2000);
    }});
}