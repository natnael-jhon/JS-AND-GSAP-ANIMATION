// from: in from method you don't have to specify the inital state, (it will figure out by itslef)
// fromTo: in fromTo method you HAVE to specify the default value and also the new animation state

// gsap.from(".box1", {
//     y: -200,
//     duration: 3,
//     ease: "linear",
//     repeat: -1,
//     yoyo: true,
// })

// gsap.from(".box2", {
//     y: 100,
//     yoyo:true,
//     repeat: 2,
//     duration: 2,
// })
gsap.fromTo(".box1" ,{
    y: 200,
    opacity: 0,
} , {
    opacity: 1,
    y: -200,
    duration: 3,
    ease: "linear",
    borderRadius:0,
    repeat: -1,
    yoyo: true,
})