let play = document.querySelector(".play")
let pause = document.querySelector(".pause")
let restart = document.querySelector(".restart")
let resume = document.querySelector(".resume")

let tween = gsap.to(".box1", {
    x: 300,
    duration: 6,
    bakgroundColor: "teal",
})

play.addEventListener("click", () => tween.play())
pause.addEventListener("click", () => tween.pause())
restart.addEventListener("click", () => tween.restart())
resume.addEventListener("click", () => tween.resume())