window.addEventListener("scroll", ()=>{
    const header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0);
});


navbar = document.querySelector('header .navlinks');

document.querySelector('#menuBtn').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
}
search = document.querySelector('header .search');

document.querySelector('#searchBtn').onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}


window.addEventListener("scroll", ()=>{
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".navlinks ul li a[href*=" + id + "]").classList.add("active");
        }else{
            document.querySelector(".navlinks ul li a[href*=" + id + "]").classList.remove("active");
        }
    });
});


const links = document.querySelectorAll(".navlinks ul li a");
links.forEach(click =>{
    click.addEventListener("click", ()=>{
        navbar.classList.remove('active');
    })
} )