

window.addEventListener('load' , e => {
  document.querySelector('.loading').style.display  =  'none';
  document.querySelector('.portfolio').style.display  = '' ;
})
var myFullpage = new fullpage('#parallax', {
  autoScrolling:true,
  navigation: true,
  navigationPosition: 'left',
  // scrollHorizontally :true ,
  fixedElements: '#nav' , 
  slidesNavigation: true,
  slidesNavPosition: 'bottom', 
  loopHorizontal: true,

  afterLoad: function(anchorLink, index){

// // Set elements to 0 opacity at first
//     TweenMax.from('.fatima', 1.6, {
//       delay: 0.6,
//       right: 400,
//       opacity:0,
//       ease: Expo.easeInOut,
      
//     })
  document.querySelector('.loading').style.display  =  'none';
    document.querySelector('.portfolio').style.display  = '' ;
  },
  onLeave: function(anchorLink, index, slideAnchor, slideIndex){
    let tl = new TimelineMax({delay : 0.9}) ;
    TweenMax.fromTo('.bg-frame', 0.001,
    {
      delay: 0.95,
      rotate: 280,
      ease: Expo.easeIn,
      
    } 
    , {
      delay: 0.9,
      rotate: 20,
      ease: Back.easeInOut,
      } ,
    ) ;


    let section  = index.item ;
    let h1 = section.querySelector('h1') ;
     
    // new SplitText("h1", { type: "lines", linesClass: "lineChild" });
    // new SplitText("h1", { type: "lines", linesClass: "lineParent" });
    // var tl2 = new TimelineMax({repeat:-1, repeatDelay:0.5, yoyo:true});
    // tl2.staggerFrom(".lineChild", 0.75, {y:50}, 0.25);
      TweenMax.fromTo(h1 , 1 , {y : '-350' , opacity : 0, duration: 1.5} , {y : 0 , opacity : 1 }) ;
    
    if(index.index === 1  ) {
      console.log(index.index);
      let project = section.querySelector('.slid__img-picker');
      project.addEventListener('click' , e => {
        console.log(' i am clicked ');
      })
        
      
      TweenMax.fromTo( project  , .7 , {x : '-550' , opacity : 0 } , {x : 0 , opacity : 1 }) ;
      console.log(project);
      // console.log(index);
      // let tween =TweenMax.to('.bg-frame', 0.1, {
      //   delay: 0.9,
      //   scale: 1.6,
      //   x : -400 ,
      //   rotate: 120,
      //   ease: Expo.easeInOut,
        
      //   } ,
      // );
       
    }
  }
});
fullpage_api.setAllowScrolling(true);