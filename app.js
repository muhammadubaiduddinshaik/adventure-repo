let searcButton =document.querySelector("#search-btn");
let searcBtn =document.querySelector(".search-btn-box");
let menu = document.querySelector("#menu-bar"); 
let nav = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vd-btn");
menu.addEventListener("click" , () =>{
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
    });
    
window.onscroll = ()=>{
    searcButton.classList.remove("fa-times");
searcBtn.classList.remove("active");
menu.classList.remove("fa-times");
nav.classList.remove("active");
}
searcButton.addEventListener("click" , () =>{
searcButton.classList.toggle("fa-times");
searcBtn.classList.toggle("active");
});
videoBtn.forEach(btn =>{
    btn.addEventListener("click",()=>{
        document.querySelector(".control .active").classList.remove("active");
        btn.classList.add("active");
        let src =btn.getAttribute("data-src");
        document.querySelector("#vd-slider").src = src; 
    });
});

var swiper = new Swiper(".rew-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,disableOnInteration:false,
    },
    breakpoint:{
        640:{
            sliderPerView:1
        },
        786:{
            sliderPerView:2,
        },
        1024:{
            sliderPerView:3,
        }
    }
});
var swiper = new Swiper(".logo-slider", {
    spaceBetween:5,
    loop:true,
    autoplay:{
        delay:2500,disableOnInteration:false,
    },
    breakpoint:{
        450:{
            sliderPerView:1
        },
        768:{
            sliderPerView:2,
        },
        991:{
            sliderPerView:3,
        },
        1200:{
            sliderPerView:4,
        }
    }
});