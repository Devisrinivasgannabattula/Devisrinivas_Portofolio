// Scroll to section
function scrollToSection(id){document.getElementById(id).scrollIntoView({behavior:"smooth"});}



// Scroll to top
const scrollBtn=document.getElementById('scrollToTop');
window.onscroll=function(){scrollBtn.style.display=window.pageYOffset>200?"block":"none";};
function scrollToTop(){window.scrollTo({top:0,behavior:"smooth"});}




// Fade-in sections
const sections=document.querySelectorAll('section');
function fadeIn(){sections.forEach(s=>{const top=s.getBoundingClientRect().top; const screen=window.innerHeight/1.3;if(top<screen){s.classList.add('in-view');}});}
window.addEventListener('scroll',fadeIn);
const carousel = document.querySelector('.projects-carousel');
let speed = 1; // pixels per frame
let carouselX = 0;

function animateCarousel() {
    carouselX -= speed; // move left
    const firstCardWidth = carousel.children[0].offsetWidth + 32; // card + gap
    if (Math.abs(carouselX) >= firstCardWidth) {
        // move first card to the end
        carousel.appendChild(carousel.children[0]);
        carouselX += firstCardWidth;
    }
    carousel.style.transform = `translateX(${carouselX}px)`;
    requestAnimationFrame(animateCarousel);
}

animateCarousel();



// Mouse Smoke Effect
const canvas=document.getElementById('smokeCanvas'); const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth; canvas.height=window.innerHeight;
let particles=[];
class Particle{constructor(x,y){this.x=x;this.y=y;this.size=Math.random()*10+5;this.speedX=(Math.random()-0.5)*2;this.speedY=(Math.random()-0.5)*2;this.alpha=1;}
update(){this.x+=this.speedX; this.y+=this.speedY; this.alpha-=0.01;}
draw(){ctx.fillStyle=`rgba(255,140,0,${this.alpha})`; ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2); ctx.fill();}}
function handleParticles(){for(let i=0;i<particles.length;i++){particles[i].update();particles[i].draw(); if(particles[i].alpha<=0){particles.splice(i,1);i--;}}}
window.addEventListener('mousemove',(e)=>{particles.push(new Particle(e.x,e.y));});
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);handleParticles();requestAnimationFrame(animate);}
animate();
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});

// Background color scroll animation
const colors = [
  "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
  "linear-gradient(135deg, #120b35, #14de76ff)",
  "linear-gradient(135deg, #1a0022, #92d5c3ff)",
  "linear-gradient(135deg, #002633, #46a9e3ff)",
  "linear-gradient(135deg, #332100, #3336bfff)",
  "linear-gradient(135deg, #001a0d, #004d26)"
];

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollPos / docHeight;
  const colorIndex = Math.floor(scrollPercent * (colors.length - 1));
  document.body.style.background = colors[colorIndex];
});


window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const hero = document.getElementById('hero');

    // Show loader for at least 3 seconds
    setTimeout(() => {
        preloader.style.display = 'none';
        hero.style.opacity = '1';
    }, 3000); // 3000 ms = 3 seconds
});

// Navigation link active
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        navLinks.forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// Skills bounce effect
const skillsSection = document.getElementById('skills');
const skillCards = document.querySelectorAll('.skill-card');
let skillsAnimated = false;

function animateSkills() {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight / 1.2;

    if (sectionTop < screenHeight && !skillsAnimated) {
        skillCards.forEach((card, index) => {
            card.style.setProperty('--duration', (0.8 + Math.random() * 0.4) + 's');
            setTimeout(() => {
                card.classList.add('bounce');
                setTimeout(() => {
                    card.classList.add('bounce-loop'); // continuous subtle bounce
                }, parseFloat(card.style.getPropertyValue('--duration')) * 1000);
            }, index * 120);
        });
        skillsAnimated = true;
    }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills); // triggers if already in view

