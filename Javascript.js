function changeBg(){
    let navbarBg = document.getElementById('navbarBg');
    let scrollValue = window.scrollY;
    if(scrollValue > 150){
        navbarBg.classList.add('change');            
    }else{
        navbarBg.classList.remove('change');
        navbarBg.style.transition = "all .3s ease";
    }
}
window.addEventListener('scroll', changeBg);