
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
   
    const homeMenu = document.querySelector('#home-page');
    const cricmenu = document.querySelector('#cricket-page');
    const footmenu = document.querySelector('#football-page');
    const emenu = document.querySelector('#esports-page');
    let scrollPos = window.scrollY;
      console.log(scrollPos);
  
    // adds 'highlight' class to my menu items
    if ( scrollPos < 225) {
      homeMenu.classList.add('highlight');
      cricmenu.classList.remove('highlight');
      footmenu.classList.remove('highlight');
      emenu.classList.remove('highlight');
      return;
    } else if ( scrollPos < 611) {
     cricmenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      footmenu.classList.remove('highlight');
      emenu.classList.remove('highlight');
      return;
    } else if ( scrollPos < 994) {
     footmenu.classList.add('highlight');
     cricmenu.classList.remove('highlight');
     emenu.classList.remove('highlight');
      return;
    }else if ( scrollPos < 1507) {
        emenu.classList.add('highlight');
        footmenu.classList.remove('highlight');
        cricmenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
       
         return;
       }
       if (( scrollPos < 611) || elem) {
        elem.classList.remove('highlight');
      }
    };
    
    window.addEventListener('scroll', highlightMenu);
    window.addEventListener('click', highlightMenu);