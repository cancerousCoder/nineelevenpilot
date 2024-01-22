const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    alert("Use a computer for better UI");
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    alert("Use a computer for better UI");
  }
};
getDeviceType();

let name = prompt("Whattt is your name??");
document.getElementById("question").innerText=`${name} will you be my valintine?`
const no = document.getElementById("no");
const aud = new Audio('https://cancerouscoder.github.io/nineelevenpilot/resource/song.mp3');
const hellno = new Audio('https://cancerouscoder.github.io/nineelevenpilot/resource/no.mp3');



let x = 0;
let y = 0;

window.addEventListener('mousemove', (event) => {
    x = event.clientX
    y = event.clientY
});

let margin = Math.floor(Math.random() * 250)

no.addEventListener("mouseenter", (e)=>{
    margin = Math.floor(Math.random() * 250)
    if (margin%2==0){
        no.style.top=`${-margin}px`
        no.style.left=`${margin}px`
    }else{
        no.style.top=`${margin}px`
        no.style.left=`${-margin}px`
    }
})

no.addEventListener("mouseover", (e)=>{
    margin = Math.floor(Math.random() * 250)
    if (margin%2==0){
        no.style.top=`${-margin}px`
        no.style.left=`${margin}px`
    }else{
        no.style.top=`${margin}px`
        no.style.left=`${-margin}px`
    }
})

function change(){
    if(name=="nandini" || name == "Nandini"|| name == "Nandini "|| name == "nandini "){
        document.getElementById("gif").classList.remove('gifA')
        document.getElementById("gif").classList.add('gifB')
        no.style.display="none";
        aud.play();
        document.getElementById("question").innerText="I loveee you moreeee ❤️🥹"
    }else{
        document.getElementById("gif").classList.remove('gifA')
        document.getElementById("gif").innerText = "hell no!!"
        hellno.play();
    }
}

function never(){
    if(name=="nandini" || name == "Nandini"){
        alert(`${name} is your name, right?`)
        alert("sending response to admin")
        document.getElementById("gif").classList.remove('gifA')
        document.getElementById("gif").classList.add('gifC')
        document.getElementById("question").innerText=`im a ghost`
        document.getElementById("yes").style.display="none"
        document.getElementById("no").style.display="none"
    }
}
