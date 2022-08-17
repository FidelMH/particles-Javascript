let x = 0;
let y = 0;
let p = document.querySelector('body');
console.log(p);
p.addEventListener("mousemove",e =>{
    document.getElementById('coord').innerHTML= `<p>x=${e.pageX} , y=${e.pageY}</p>`;
    x=e.pageX;
    y=e.pageY;
    
});


function generateParticle(){
    let localX = x;
    let localY = y;
    let particle =  document.createElement("div");
    particle.classList.add('bubble');
    let color = `rgb(${randInt(255)},${randInt(255)},${randInt(255)})`;
    particle.style.background=color;
    let size = randInt(10)+5;
    particle.style.height = `${size}px`;
    particle.style.width = `${size}px`;
    particle.style.top = `${localY}px`;
    particle.style.left = `${localX}px`;
    let randXdirection = Math.random() > 0.5 ? 1:-1;
    let randYdirection = Math.random() > 0.5 ? 1:-1;
    particle.style.setProperty('--left', localX+ (randInt(100)*randXdirection) +'px');
    particle.style.setProperty('--top', localY+ (randInt(100)*randYdirection) + 'px');
    p.appendChild(particle);

    setTimeout(() =>{
        particle.remove()
    }, 1000);

}

function randInt(max){
    return Math.floor(Math.random()*max);
}

setInterval(generateParticle,25);