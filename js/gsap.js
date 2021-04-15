/*ANIMACOES*/
var tl = gsap.timeline({repeat: 0, yoyo: true}); 

tl.from('.colOne', {
    delay: 0,
    duration: 2,
    zIndex: 9,
    overflow: 'hidden',
    position: 'absolute',
    left: '100%',
    ease: "power4",
    overflow: 'hidden'
})

tl.to('.colOne', {
    duration: 2,
    position: 'absolute',
    left: '-100%',
    display: 'none',
    ease: "power4",
    zIndex: -1,
    ease: 'power2',
    overflow: 'hidden'
})
