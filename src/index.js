import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

//
//
//         -------MOUSEOVER - MOUSEOUT-------
//
//
const nav = document.querySelectorAll(".nav-link");
nav.forEach(item => {
    item.addEventListener("mouseover", (event) => {
    item.style.backgroundColor = "grey";
    item.style.border = "1px solid black";
    item.style.padding = "5px";
    item.style.color = "white"
    item.style.borderRadius = "5px"
    item.style.transitionDuration = "0.5s"
});
item.addEventListener("mouseout",(event) => {
    item.style.backgroundColor = "unset";
    item.style.border = "none";
    item.style.padding = "0";
    item.style.color = "black"
    item.style.borderRadius = "0"
})
});

let kucult= true;
 const test = document.querySelector(".nav ");
 test.addEventListener("mouseover", (event) => {
     event.target.style.color = "orange";})

      const test1 = document.querySelectorAll("img");
    test1[1].addEventListener('dblclick', (event) => {
     if(kucult){
 kucult=false;
 event.target.style.height = "64px";
 event.target.style.width = "64px";
     }else{
 kucult = true;
 event.target.setAttribute("class","animation")
     }
   });

   const header = document.querySelector("header");
    const bodyletter = document.querySelector("body");
    bodyletter.addEventListener("keydown" , (event) => {
    if(event.key == 2){
    bodyletter.style.letterSpacing = "1px";
    const colors = ["#FF5733","#FFF333","#9CFF33","#33FFD4","#33C7FF","#3333FF","#CE33FF","#FF339C","#FF3333"]
    function generalRandomNumber (number) {
    return Math.floor(Math.random() * number);
    }
    bodyletter.style.backgroundColor = colors[generalRandomNumber(colors.length)];
    header.style.backgroundColor = colors[generalRandomNumber(colors.length)];
    }
});
const purpleBlock = document.querySelector('div');
window.addEventListener("load", (event) => {
    setTimeout((a) => {
        purpleBlock.style.display = "none"
    }, 2000)
    })
  

function tarihSaat() {
    let date = new Date().toLocaleDateString("tr-TR");
    document.getElementById("zaman").innerHTML = date;
}
setInterval(tarihSaat,1000)
    zaman.addEventListener("wheel", (event) => {
        zaman.style.fontSize = "2rem"
    })
    
    const head = document.querySelector(".main-navigation");
window.addEventListener("scroll", () => {
    head.style.backgroundColor = "pink";
    head.style.transition = "backgroundColor 3s linear";
});


const body = document.querySelector("body");
window.addEventListener("resize", () => {
    body.style.backgroundColor = "black";
    img[0].style.display ="none";
    img[1].style.display ="none";
    img[2].style.display ="none";
    img[3].style.display ="none";
    button[0].style.display = "none";
    button[1].style.display = "none";
    button[2].style.display = "none";
    const banner= document.createElement("div");
    banner.style.height = "200px";
    banner.style.width = "200px";
    banner.textContent = "Selamlar !";
    banner.style.backgroundColor ="green"
    banner.textContent = "Merhabalar !"
    banner.style.fontSize = "4rem";
    connectSection.appendChild(banner);
})

const welcome = document.querySelector("intro h2");
welcome.addEventListener("select", () => {
    welcome.style.backgroundColor = "red";
})

document.getElementById("focusButton").addEventListener("click", () => {
    document.getElementById("mail").focus();
     
  });
   document.getElementById("focusButton").addEventListener("click" , (event) => {
      event.target.style.backgroundColor = "red"
      });
  