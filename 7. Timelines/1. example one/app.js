// Timeline in gsap will make and animation go on sequnce 

gsap.timeline().to(".box1", {
    duration:2,
    scale:0,
    opacity:0,
    delay:1,
}).to(".box2", {
    y: 100,
    opacity:0,
}).to(".box3", {
    x:-100,
    opacity: 0
}).set(".box1", {
    opacity:1,
    delay:0,
    scale:1,
    duration:0.2
})