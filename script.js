function spanLetter(){
    var clutter='';
    var text=document.querySelector('.animateText').textContent;
    text.split('').forEach(function(e){
        clutter+=`<span>${e}</span>`;
    });
    document.querySelectorAll('.animateText').innerHTML=clutter
}
spanLetter();

function seprateLetter(qid){
    var clutter='';
    var text=document.querySelector(qid).textContent;
    text.split('').forEach(function(e){
        clutter+=`<span>${e}</span>`;
    });
    document.querySelector(qid).innerHTML=clutter
}
seprateLetter('.animateSec4');
seprateLetter('.animateSec5');
seprateLetter('.animateText');

const TL = gsap.timeline();
TL.from('nav #brandLogo',{
    opacity:0,
    y:-70,
    duration:0.5,
    delay:0.2,
})
TL.from('nav #navItems a',{
    opacity:0,
    y:-70,
    duration:0.7,
    stagger:0.2,
})
TL.from('#page1Left i',{
    x:-200,
    opacity:0,
    duration:2,
    stagger:-0.2,
    repeat:-1,
    yoyo:true,
},'page1Left')

TL.from('#page1Right i',{
    x:200,
    opacity:0,
    duration:2,
    stagger:0.2,
    repeat:-1,
    yoyo:true,
},'page1Left')


gsap.from('#midSection',{
    y:100,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#midSection',
        scroll:'body',
        start:'bottom 95%',
        end:'bottom 70%',
        scrub:1,
    }
})


const TL2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#section2',
        scroll:'body',
        start:'top 80%',
        end:'top 20%',
        scrub:1,
    }
})
TL2.from('#page2Left i',{
    x:-200,
    opacity:0,
    duration:0.7,
    stagger:-0.2,
})
TL2.from('.sec2Left img',{
    x:-700,
    duration:0.2,
})

TL2.from('.sec2Right',{
    y:500,
    duration:0.2,
})
gsap.from('#sec2Left i',{
    opacity:0,
    rotate:-90,
    scale:0.5,
    x:-50,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section2',
        scroll:'body',
        start:'top 60%',
        end:'top 20%',
        scrub:1,
    }
})

gsap.from('#page2Right i',{
    x:200,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section2',
        scroll:'body',
        start:'bottom 95%',
        end:'bottom 70%',
        scrub:1,
    }
})
gsap.from('#sec2Right i',{
    rotate:90,
    scale:0.5,
    x:50,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section2',
        scroll:'body',
        start:'bottom 95%',
        end:'bottom 70%',
        scrub:1,
    }
})

gsap.from('#sec2Right i',{
    rotate:90,
    scale:0.5,
    x:50,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section2',
        scroll:'body',
        start:'bottom 95%',
        end:'bottom 70%',
        scrub:1,
    }
})

gsap.from('#page3Left i',{
    x:-200,
    opacity:0,
    duration:0.7,
    stagger:-0.2,
    scrollTrigger:{
        trigger:'#section3',
        scroll:'body',
        start:'top 80%',
        end:'top 20%',
        scrub:1,
    }
})
gsap.from('.sec3Left',{
    y:400,
    opacity:0,
    duration:0.7,
    stagger:-0.2,
    scrollTrigger:{
        trigger:'#section3',
        scroll:'body',
        start:'top 80%',
        end:'top 20%',
        scrub:1,
    }
})

gsap.from('.sec3Right',{
    x:400,
    opacity:0,
    duration:0.7,
    stagger:-0.2,
    scrollTrigger:{
        trigger:'#section3',
        scroll:'body',
        start:'top 80%',
        end:'top 20%',
        scrub:1,
    }
})


gsap.from('#page3Right i',{
    rotate:360,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section3',
        scroll:'body',
        start:'bottom 95%',
        end:'bottom 70%',
        scrub:1,
    }
})

gsap.from('#page4Right i',{
    y:-200,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section4',
        scroll:'body',
        start:'top 60%',
        end:'top 20%',
        scrub:1,
    }
})

gsap.from('#page4Left i',{
    y:200,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section4',
        scroll:'body',
        start:'top 80%',
        end:'top 20%',
        scrub:1,
    }
})

gsap.from('#section4 .animateText span',{
    y:400,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section4',
        scroll:'body',
        start:'top 80%',
        end:'top 20%',
        scrub:1,
    }
})

gsap.from('.sec4Top ',{
    y:400,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section4',
        scroll:'body',
        start:'top 80%',
        end:'top 20%',
        scrub:1,
    }
})
gsap.from('.sec4Left img ',{
    x:-400,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section4',
        scroll:'body',
        start:'top 60%',
        end:'top 20%',
        scrub:1,
    }
})
gsap.from('.sec4Right img ',{
    x:400,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section4',
        scroll:'body',
        start:'top 60%',
        end:'top 20%',
        scrub:1,
    }
})

gsap.from('.sec5Bottom img ',{
    scale:0.1,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section5',
        scroll:'body',
        start:'top 80%',
        end:'top 20%',
        scrub:1,
    }
})

gsap.from('.sec5Top .text span',{
    y:400,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section5',
        scroll:'body',
        start:'top 80%',
        end:'top 20%',
        scrub:1,
    }
})

gsap.from('.sec5Top',{
    x:-200,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section5',
        scroll:'body',
        start:'top 80%',
        end:'top 20%',
        scrub:1,
    }
})

gsap.from('.sec5BottomAfter,.sec5BottomBefore',{
    height:0,
    width:0,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:'#section5',
        scroll:'body',
        start:'top 10%',
        end:'top 80%',
        scrub:1,
    }
})

gsap.from('#page6Right i:nth-child(1),#page6Right i:nth-child(2)',{
    x:-300,
    opacity:0,
    duration:0.7,
    stagger:-0.2,
    scrollTrigger:{
        trigger:'#section6',
        scroll:'body',
        start:'top 10%',
        end:'top 80%',
        scrub:1,
    }
})
gsap.from('#page6Right i:nth-child(4),#page6Right i:nth-child(5)',{
    x:300,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section6',
        scroll:'body',
        start:'top 10%',
        end:'top 80%',
        scrub:1,
    }
})

gsap.from('.animateSec5 span',{
    y:-300,
    x:300,
    rotate:360,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section6',
        scroll:'body',
        start:'top 80%',
        end:'top 20%',
        scrub:1,
    }
})

gsap.from('#sec6Left i',{
    rotate:90,
    scale:0.5,
    x:1000,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section6',
        scroll:'body',
        start:'top 80%',
        end:'top 20%',
        scrub:1,
    }
})

gsap.from('#sec6Right i',{
    rotate:90,
    scale:0.5,
    x:-1000,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section6',
        scroll:'body',
        start:'top 80%',
        end:'top 20%',
        scrub:1,
    }
})

gsap.from('.sec6Bottom .box:nth-child(1)',{
    rotate:-90,
    x:-100,
    scale:0.5,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section6',
        scroll:'body',
        start:'top 10%',
        end:'bottom 100%',
        scrub:1,
    }
})
gsap.from('.sec6Bottom .box:nth-child(2)',{
    scale:0.5,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section6',
        scroll:'body',
        start:'top 10%',
        end:'bottom 100%',
        scrub:1,
    }
})
gsap.from('.sec6Bottom .box:nth-child(3)',{
    rotate:45,
    x:100,
    scale:0.5,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#section6',
        scroll:'body',
        start:'top 10%',
        end:'bottom 100%',
        scrub:1,
    }
})
