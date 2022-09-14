const listNav = document.querySelectorAll('.list-nav__item a');
let currentPage;
const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");

    function toggleMenu(){
        nav.classList.toggle("nav-active");
    }
    burger.addEventListener('click', ()=> {
        toggleMenu();
    });

    document.addEventListener('click', e => {
        let target = e.target;
        let its_menu = target == nav || nav.contains(target);
        let its_hamburger = target == burger;
        let menu_is_active = nav.classList.contains('nav-active');
        
        if (!its_menu && !its_hamburger && menu_is_active) {
        toggleMenu();
        }
})

function getParams(){
    const url = decodeURIComponent(window.location.search).substring(1);
    const params = url.split("=")[1];
    currentPage = params
    
  }

  getParams();

  
listNav.forEach((item) => {
    console.log(currentPage);
    if(item.innerHTML == currentPage){
        item.parentNode.classList.add("list-nav__item_active");
    }else if(currentPage === undefined){
        listNav[0].parentNode.classList.add("list-nav__item_active");
    }
});