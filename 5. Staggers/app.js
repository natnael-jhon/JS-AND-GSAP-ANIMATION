gsap.set(".box", {
    borderRadius: 0,
})

gsap.to(".box", {
    borderRadius: 100,
    duration: 1,
    y: -100,
    ease: "power1",
    yoyo: true,
    repeat: -1,
    stagger: {
        amount: 0.3,
        from: 0,
    }
})