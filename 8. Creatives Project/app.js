var tl = gsap.timeline({
    default: {
        opacity:0,
        ease: "linear",
        duration:1,
    }
})
tl.fromTo(".sidebar", {
    width:0
}, { opacity:1,
    width: "30%",})
tl.fromTo(".main-img", {
    x:0,
    opacity:1
})


tl.fromTo(".content", {x:100},{x:0, opacity:1} )