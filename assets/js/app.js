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
  //   tl.to('.bg-frame', 0.001,
  // {
  //     delay: 0.2,
  //     rotate: rotate,
  //     ease: Back.easeInOut,
  //     } ,
  //   ) ;
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
      let project = section.querySelector('.slid__img-picker');
      project.addEventListener('click' , e => {
        console.log(' i am clicked ');
      })
        
      TweenMax.fromTo( project  , .7 , {x : '-550' , opacity : 0 } , {x : 0 , opacity : 1 }) ;
       
    }
    else if(index.index === 2)
      slideNumber.textContent = 3 ;
    else if(index.index === 3)
      slideNumber.textContent = 4 ;
    else 
      slideNumber.textContent = 1 ;
  }
  
});
fullpage_api.setAllowScrolling(true);

function getContentPage(pageName){
  contentPage = document.querySelector(`.${pageName}`);
  // contentPage = pageName;
  console.log(contentPage);
}