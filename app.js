

window.addEventListener('load' , e => {
  document.querySelector('.loading').style.display  =  'none';
  document.querySelector('.portfolio').style.display  = '' ;
  console.log('here');
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
  // onLeave: function(anchorLink, index, slideAnchor, slideIndex){
  //   TweenMax.from('.fatima', 1.6, {
  //     delay: 0.6,
  //     right: 400,
  //     ease: Expo.easeInOut,
      
  //   })
  // }
});
fullpage_api.setAllowScrolling(true);