
let navLis = document.querySelectorAll(".nav li")
let navBack = document.querySelector("header .nav .back")
let nav = document.querySelector(".nav")
let bar = document.querySelector(".bar")
let xmark = document.querySelector(".xmark")
let externalPage;
let page = document.querySelector(".pages")
let loadCont = document.createElement("div")
loadCont.classList.add("loading")
let load = document.createElement("div")
load.classList.add("load")
let content;
let activePage;

let footerNav = document.querySelectorAll(".footer .links li")

    page.innerHTML = ""
    loadCont.appendChild(load)
    page.appendChild(loadCont)
    footerNav.forEach(ele=>ele.classList.remove("active"))

    setTimeout(() => {
        let activePage = new XMLHttpRequest();
        activePage.open("GET", "home/home.html")
        activePage.onreadystatechange = function(){
            page.innerHTML = activePage.responseText
            if(activePage.readyState === 4){
                homeEvents()
            }
        }
        activePage.send()
        footerNav[0].classList.add("active")
    }, 700);

function navs(navlies){
navlies.forEach((ele) =>{
    ele.addEventListener("click", (e)=>{
        navlies.forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        if(e.currentTarget.textContent === "About Us" && navBack.style.left == "0px"){
            navBack.style.left = "110px"
        }else if(e.currentTarget.textContent === "Projects" && navBack.style.left == "0px"){
            navBack.style.left = "235px"
        }else if(e.currentTarget.textContent === "Projects" && navBack.style.left == "110px"){
            navBack.style.left = "235px"
        }else if(e.currentTarget.textContent === "Home" && navBack.style.left == "110px"){
            navBack.style.left = "0px"
        }else if(e.currentTarget.textContent === "About Us" && navBack.style.left == "235px"){
            navBack.style.left = "110px"
        }else if(e.currentTarget.textContent === "Home" && navBack.style.left == "235px"){
            navBack.style.left = "0px"
        }

        if(nav.style.height === "100vh"){
            nav.style.height = "0"
            bar.style.display = "block"
            xmark.style.display = "none"
        }

        if(e.currentTarget.textContent === "Home"){
            page.innerHTML = ""
            loadCont.appendChild(load)
            page.appendChild(loadCont)
            footerNav.forEach(ele=>ele.classList.remove("active"))
            setTimeout(() => {
                let activePage = new XMLHttpRequest();
                activePage.open("GET", "home/home.html")
                activePage.onreadystatechange = function(){
                    page.innerHTML = activePage.responseText
                    if(activePage.readyState === 4){
                        homeEvents()
                    }
                }
                activePage.send()
                footerNav[0].classList.add("active")
            }, 700);
        }
        if(e.currentTarget.textContent === "About Us"){
            page.innerHTML = ""
            loadCont.appendChild(load)
            page.appendChild(loadCont)
            footerNav.forEach(ele=>ele.classList.remove("active"))
            setTimeout(() => {
                let activePage = new XMLHttpRequest();
                activePage.open("GET", "about/about.html")
                activePage.onreadystatechange = function(){
                    page.innerHTML = activePage.responseText
                    if(activePage.readyState === 4){
                        aboutEvents()
                    }
                }
                activePage.send()
                footerNav[1].classList.add("active")
            }, 700);
        }
        if(e.currentTarget.textContent === "Projects"){
            page.innerHTML = ""
            loadCont.appendChild(load)
            page.appendChild(loadCont)
            footerNav.forEach(ele=>ele.classList.remove("active"))
            setTimeout(() => {
                let activePage = new XMLHttpRequest();
                activePage.open("GET", "projects/projects.html")
                activePage.onreadystatechange = function(){
                    page.innerHTML = activePage.responseText
                    if(activePage.readyState === 4){
                        projectsEvents()
                    }
                }
                activePage.send()
                footerNav[2].classList.add("active")
            }, 700);
        }
    })
})
}

navs(navLis)
navs(footerNav)

window.onresize = function(){
    if(window.innerWidth > 650){
        nav.removeAttribute("style")
    }
}

bar.onclick = function(){
    nav.style.height = "100vh"
    bar.style.display = "none"
    xmark.style.display = "block"
}

xmark.onclick = function(){
    nav.style.height = "0"
    bar.style.display = "block"
    xmark.style.display = "none"
}

function homeEvents(){
        let cardsContainer = document.querySelector(".cards")
        let isDown = false;
        let startX;
        let scrollLeft;
        cardsContainer.addEventListener("mousedown", function(e){
            isDown = true;
            startX = e.pageX - cardsContainer.offsetLeft
            scrollLeft = cardsContainer.scrollLeft
            cardsContainer.classList.add("active")
        })
        cardsContainer.addEventListener("mouseleave", function(){
            isDown = false;
            cardsContainer.classList.remove("active")
        })
        cardsContainer.addEventListener("mouseup", function(){
            isDown = false;
            cardsContainer.classList.remove("active")
        })
        cardsContainer.addEventListener("mousemove", function(e){
            if(!isDown) return;
            e.preventDefault()
            let x = e.pageX - cardsContainer.offsetLeft;
            let walk = (x - startX);
            cardsContainer.scrollLeft = scrollLeft - walk
        })


        let showProjects = document.querySelector(".last-proj .show-btn")
        showProjects.onclick = function(){
            navBack.style.left = "235px";
            navLis.forEach(ele=>ele.classList.remove("active"))
            Array.from(navLis)[2].classList.add("active")
            page.innerHTML = ""
            loadCont.appendChild(load)
            page.appendChild(loadCont)
            setTimeout(() => {
                let activePage = new XMLHttpRequest();
                activePage.open("GET", "projects/projects.html")
                activePage.onreadystatechange = function(){
                    page.innerHTML = activePage.responseText
                    if(activePage.readyState === 4){
                        projectsEvents()
                    }
                }
                activePage.send()
            }, 700);
        }
}


