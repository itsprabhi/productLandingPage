new fullScroll({
    mainElement: 'main',
    displayDots: false,
    dotsPosition: 'left',
    animateTime: 0.7,
    animateFunction: 'ease'
});
gsap.to('.anime-box1',2,{width:0,translate: '-100% 0',ease:Expo.easeInOut})
gsap.to('.anime-box2',2,{width:0,translate:'100% 0',ease:Expo.easeInOut})
const tl = gsap.timeline({})
tl.from('.site-intro-content',1.8,{x:200,stagger:0.2,opacity:0,ease:Expo.easeInOut})
.from('.img1',0.5,{opacity:0,y:-20},'-=0.5')
const tl2 = gsap.timeline({})
const tl3 = gsap.timeline({})
let url = window.location.href;
window.onhashchange = () => {
    if(window.location.href == url){
        return
    }else{
        url = window.location.href
        let slideNumber = url.slice(-1)
        if(slideNumber == 1){
            gsap.to('.anime-box1-slide1',1.5,{height:0,ease:Expo.easeInOut})
            gsap.to('.anime-box2-slide2',1.5,{height:0,ease:Expo.easeInOut})
            tl2.from('.about-content',1,{x:200})
            .from('.img2',0.5,{opacity:0,y:-20})
        }else if (slideNumber == 2){
            tl3.to('.anime-box-slide3',1.5,{width:0,translate:'100% 0',ease:Expo.easeInOut})
            tl3.from('.vid-content-para',1,{stagger:0.2,x:'-100',opacity:0,ease:Expo.easeIn},'-=2')
        }
    }
};