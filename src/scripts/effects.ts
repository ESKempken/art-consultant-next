// import type { Track } from './types';



//  Track travel between anchors
const travelProgress = (pointA: number, pointB: number, fromTop?: boolean) : number => {
  
  const measureFrom = fromTop ? window.scrollY : window.scrollY + window.innerHeight;
  
  const spaceBetween = pointB - pointA;  
    
  if (measureFrom < pointA) {
    return 0;
  } else if (measureFrom > pointB) {
    return 100;
  } else { 
    return Math.round((measureFrom - pointA) * 100 / spaceBetween);
  }
};






const frameEffect = () : void => {
  const summaryEl = document.getElementById('summary')!;
  const frameEl = document.body;

  const anchorTop = summaryEl.offsetTop;
  const anchorBot = summaryEl.offsetTop + summaryEl.offsetHeight;

  window.addEventListener('scroll', () => {
    let percentage = travelProgress(anchorTop, anchorBot);
    
    // // Cal: Ease in
    percentage = Math.pow(100, (percentage / 100 )) || 0;


    
    // Cal: Half of 25% (frame size is 75%)
    const edgeSpacer = percentage * 0.125 + '%';
   

    frameEl.style.setProperty('--crop', edgeSpacer);
  });
};


const fadeGallery = () : void => {
  //   const galleryListEl = document.getElementById('gallery-list')!;

  //   const anchorTop = galleryListEl.offsetTop;
  //   const anchorBot = anchorTop + galleryListEl.offsetHeight;


  //   window.addEventListener('scroll', () => {
  //     let percentage = travelProgress(anchorTop, anchorBot);
   
  //     let decimal = (100 - percentage) / 100;

  //     galleryListEl.children[0].children[0].style.opacity = decimal;
  //     galleryListEl.children[1].children[0].style.opacity = decimal;
  //     galleryListEl.children[2].children[0].style.opacity = decimal;
  //   });
};


const frameTexture = () : void => {
  const frameEl = document.getElementById('frame')!;
  const achorBot = document.documentElement.scrollHeight - window.innerHeight;

  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    
    if (window.scrollY >= achorBot) {
      frameEl.classList.add('--texture');
    } else {
      frameEl.classList.remove('--texture');
    }
  });
};




const navFooter = () : void => {
  const navEl = document.getElementById('header')!;
  const achorBot = document.documentElement.scrollHeight - window.innerHeight;

  
  window.addEventListener('scroll', () => {
    console.log(achorBot, window.scrollY);
     
    if (window.scrollY >= achorBot) {
      navEl.removeAttribute('hidden');
    } else {
      navEl.setAttribute('hidden', 'true');
    }
  });
};





export { frameEffect, fadeGallery, frameTexture, navFooter, travelProgress };