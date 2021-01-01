window.addEventListener('DOMContentLoaded' , e => {
  document.querySelector('.loading').style.display  =  'none';
  document.querySelector('.portfolio').style.display  = 'block' ;
  
})
var slideNumber = document.getElementById('slid-number');
slideNumber.textContent = 1 ;
var rotate = 45 ;
let tl = new TimelineMax({delay : 0.3}) ;
// function fullpageInit() {
  
//   var element = document.getElementById("parallax");
//   if (typeof element != "undefined" && element != null) { // check if fullpage exists
//        new fullpage('#parallax', {
//         autoScrolling:true,
//         navigation: true,
//         navigationPosition: 'left',
//         // scrollHorizontally :true ,
//         fixedElements: '#nav' , 
//         slidesNavigation: true,
//         slidesNavPosition: 'bottom', 
//         loopHorizontal: true,
//         parallax: true,
//         parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
      
//         afterLoad: function(origin, destination, direction){
//         //   tl.to('.bg-frame', 0.001,
//         // {
//         //     delay: 0.2,
//         //     rotate: rotate,
//         //     ease: Back.easeInOut,
//         //     } ,
//         //   ) ;
//         },
//         onLeave: function(anchorLink, index, slideAnchor, slideIndex){
         
//           rotate += 120;
      
//           tl.to('.bg-frame', 0.001,
//             {
//               delay: 0.2,
//               rotate: rotate,
//               ease: Back.easeInOut,
              
//             } 
//           ) ;
      
//           let section  = index.item ;
//           let h1 = section.querySelector('h1') ;
//             tl.fromTo(h1 , 1 , {y : '-350' , opacity : 0, duration: 0.9} , {y : 0 , opacity : 1 }) ;
          
//           if(index.index === 1  ) {
//             slideNumber.textContent = 2 ; 
//             let project = section.querySelector('.slid__img-picker');
//             project.addEventListener('click' , e => {
//               console.log(' i am clicked ');
//             })
              
//             TweenMax.fromTo( project  , .7 , {x : '-550' , opacity : 0 } , {x : 0 , opacity : 1 }) ;
             
//           }
//           else if(index.index === 2)
//             slideNumber.textContent = 3 ;
//           else if(index.index === 3)
//             slideNumber.textContent = 4 ;
//           else 
//             slideNumber.textContent = 1 ;
//         }
        
//       });
//   }
// }

// function destroyFullpage() {
//   fullpage_api.destroy("all");
// }    

// barba.hooks.afterLeave((data) => { // after leave from page destroy fullpage
//   destroyFullpage();
// });
  
// barba.hooks.beforeEnter((data) => { // after page loaded init fullpage again
//   fullpageInit();
// });

// barba.init({
//   transitions:[
//     {
//       name: 'home',
//       sync: true,
//       to: {
//         namespace: ['home'],
//       },

//       // happen once
//       once() {}, // for css plug
//       leave() {},
//       enter() {},

//     //   beforeOnce() {console.log('before');},
//     //   afterOnce() {console.log('after');},
//     },
//     {
//       name: 'clip',
//       sync: true,
//       to: {
//         namespace: ['clip'],
//       },
//       leave() {},
//       enter() {},
//     },
//   ]
// })

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