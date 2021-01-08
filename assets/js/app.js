window.addEventListener('load' , e => {
  document.querySelector('.loading').style.display  =  'none';
  document.querySelector('.portfolio').style.display  = 'block' ;
 
})
// document.onreadystatechange = function() { 
//   if (document.readyState !== "complete") { 
//         document.querySelector("body").style.visibility = "hidden"; 
//         document.querySelector(".loading'").style.visibility = "visible"; 
//     } else { 
//         document.querySelector(".loading'").style.display = "none"; 
//         document.querySelector("body").style.visibility = "visible"; 
//     } 
// }; 
var slideNumber = document.getElementById('slid-number');
slideNumber.textContent = 1 ;
var rotate = 45 ;
var contentPage ;
let tl = new TimelineMax({delay : 0.3}) ;
new fullpage('#parallax', {
  autoScrolling:true,
  navigation: true,
  navigationPosition: 'left',
  // scrollHorizontally :true ,
  fixedElements: '#nav' , 
  slidesNavigation: true,
  slidesNavPosition: 'bottom', 
  loopHorizontal: true,
  parallax: true,
  parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

  afterLoad: function(origin, destination, direction){
    document.querySelector('.connect-with-me').style.display = 'flex'
    if (origin.index === 2){
      gsap.to('.clip', 0.001,
        {
          duration:0.8,
          clipPath: 'circle(100%)',
          // opacity:1,
          ease: Back.easeIn,
          
        } ,
      ) ;
    }
    if (origin.index === 4){
      document.querySelector('.connect-with-me').style.display = 'none'
      console.log('here');
    }
  },
  onLeave: function(anchorLink, index, slideAnchor, slideIndex){
   
    rotate += 120;

    tl.to('.bg-frame', 0.001,
      {
        delay: 0.2,
        rotate: rotate,
        ease: Back.easeInOut,
        
      } 
    ) ;

    let section  = index.item ;
    let h1 = section.querySelector('h1') ;
      tl.fromTo(h1 , 1 , {y : '-350' , opacity : 0, duration: 0.9} , {y : 0 , opacity : 1 }) ;
      
    if(index.index === 1  ) {
      slideNumber.textContent = 2 ; 
      imgAnimation()
    }
    else if(index.index === 2)
    {
      gsap.to('.clip', 0.001,
        {
          duration:0.9,
          // opacity:0,
          clipPath: 'circle(0%)',
          ease: Back.easeInOut,
          
        } 
      ) ;
      slideNumber.textContent = 3 ;
    }
    else if(index.index === 3)
    {
       slideNumber.textContent = 4 ;
    }
    else {
      slideNumber.textContent = 1 ;
      
    }
  },


  onSlideLeave: function(section, origin, destination, direction){
    imgAnimation();
    let item  = origin.item ;
    let h1 = item.querySelector('.fp-tableCell h1') ;
      gsap.fromTo(h1 , 1 , {y : '-350' , opacity : 0, duration: 0.9} , {y : 0 , opacity : 1 }) ;
  }
  
});
fullpage_api.setAllowScrolling(true);

function getContentPage(pageName){
  contentPage = document.querySelector(`.${pageName}`);
  // contentPage = pageName;
  console.log(contentPage);
}

const imgAnimation = () =>{
  gsap.registerPlugin(CSSRulePlugin);
  const rule = CSSRulePlugin.getRule(".image-container:after");
  let tl2 = new TimelineMax({delay : 0.3}) ;
  tl2.to(rule, { duration: 1, width: "100%", ease: "Power2.ease" })
 .to(rule, { duration: 0, right: 0, left: "unset" })
 .to(rule, { duration: 1, width: "0%", ease: "Power2.ease" })
 .to(".project-img", { duration: 0.2, opacity: 1, delay: -1 })
 .from(".project-img", {
     duration: 1,
     scale: 1.4,
     ease: "Power2.easeInOut",
     delay: -1.2
 });
}