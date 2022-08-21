
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


    page.innerHTML = ""
    loadCont.appendChild(load)
    page.appendChild(loadCont)
    setTimeout(() => {
        fetch("home/home.html").then(reponse => reponse.text()).then(res => page.innerHTML = res)
    }, 700);

    // let nw = new XMLHttpRequest()
    // nw.open("GET", "../home/home.html")
    // nw.send()
    // nw.onreadystatechange = function(){
    //     page.innerHTML = nw.responseText
    // }

navLis.forEach((ele) =>{
    ele.addEventListener("click", (e)=>{
        navLis.forEach((ele)=>{
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
            setTimeout(() => {
                fetch("../home.html").then(reponse => reponse.text()).then(res => page.innerHTML = res)
            }, 700);
        }
        if(e.currentTarget.textContent === "About Us"){
            page.innerHTML = ""
            loadCont.appendChild(load)
            page.appendChild(loadCont)
            setTimeout(() => {
                fetch("../about.html").then(reponse => reponse.text()).then(text => page.innerHTML = text)
            }, 700);
        }
        if(e.currentTarget.textContent === "Projects"){
            page.innerHTML = ""
            loadCont.appendChild(load)
            page.appendChild(loadCont)
            setTimeout(() => {
                fetch("../projects.html").then(reponse => reponse.text()).then(text => page.innerHTML = text)
            }, 700);
        }
    })
})

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