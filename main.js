function toggleMenu(){
    let menuBtn = document.getElementById("menu-btn");
    let navLinks = document.getElementById("nav-links");
    
    if(menuBtn.classList.contains("menu-btn-open")){
        menuBtn.classList.remove("menu-btn-open");
        navLinks.classList.remove("nav-links-open");
        

    } else {
        menuBtn.classList.add("menu-btn-open");
        navLinks.classList.add("nav-links-open");
    }
}