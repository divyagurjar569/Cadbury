
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


function loaderAnimation(){
  
var tl=gsap.timeline()
tl.to(' .container .loaderimg4',{
  x:'20vw',
  delay:.5,
},'same')

tl.to(' .container .loaderimg3',{
  x:'25vw',
  delay:.5,
},'same')
tl.to(' .container .loaderimg3',{
  x:'45vw',
  delay:1,
},'same1')


tl.to(' .container .loaderimg2',{
  x:'31vw',

  delay:1,
  
},'same1')


tl.to(' .container .loaderimg2',{
  x:'51vw',
  delay:1,
},'same2')


tl.to(' .container .loaderimg1',{
  x:'45vw',

  delay:1,
  
},'same2')
tl.to('.film',{
  opacity:0,
  duration:.5,
  scale:0,
})


tl.to('.loadertext .loaderimg',{
  y:-300,
  duration:.5,
  zIndex:999,
  ease:'expo.Inout'
})

tl.to('.loader .loaderimgcontainersimg',{
  y:-130,
  duration:.7,
  ease:'expo.Inout',
  transform:'rotate(-20deg)',
})

tl.to('.loader',{
  display:'none',
  duration:1,
  ease:'expo.Inout',
  delay:.5,
})
}


loaderAnimation();



function page2Animation(){
  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:'.page2',
      scrub:true,
      pin:true,
    }
  });

  tl2.to('.page2left .h21left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same');

  tl2.to('.page2right .h21right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same');

  tl2.to('.page2left .h22left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same1');

  tl2.to('.page2right .h22right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same1');

  tl2.to('.page2left .h21left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same1');

  tl2.to('.page2right .h21right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same1');

  tl2.to('.page2left .h23left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same2');

  tl2.to('.page2right .h23right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same2');

  tl2.to('.page2left .h22left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same2');

  tl2.to('.page2right .h22right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same2');

  tl2.to('.page2left .h24left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same3');

  tl2.to('.page2right .h24right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same3');

  tl2.to('.page2left .h23left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same3');

  tl2.to('.page2right .h23right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same3');

  tl2.to('.page2left .h25left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same4');

  tl2.to('.page2right .h25right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same4');

  tl2.to('.page2left .h24left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same4');

  tl2.to('.page2right .h24right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same4');

  tl2.to('.page2left .h26left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same5');

  tl2.to('.page2right .h26right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same5');

  tl2.to('.page2left .h25left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same5');

  tl2.to('.page2right .h25right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same5');

  tl2.to('.page2left .h27left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same6');

  tl2.to('.page2right .h27right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same6');

  tl2.to('.page2left .h26left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same6');

  tl2.to('.page2right .h26right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same6');

  tl2.to('.page2left .h28left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same7');

  tl2.to('.page2right .h28right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same7');

  tl2.to('.page2left .h27left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same7');

  tl2.to('.page2right .h27right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same7');

  tl2.to('.page2left .h29left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same8');

  tl2.to('.page2right .h29right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same8');

  tl2.to('.page2left .h28left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same8');

  tl2.to('.page2right .h28right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same8');

  tl2.to('.page2left .h210left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same9');

  tl2.to('.page2right .h210right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same9');

  tl2.to('.page2left .h29left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same9');

  tl2.to('.page2right .h29right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same9');

  tl2.to('.page2left .h211left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same10');

  tl2.to('.page2right .h211right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same10');

  tl2.to('.page2left .h210left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same10');

  tl2.to('.page2right .h210right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same10');

  tl2.to('.page2left .h212left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same11');

  tl2.to('.page2right .h212right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same11');

  tl2.to('.page2left .h211left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same11');

  tl2.to('.page2right .h211right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same11');

  tl2.to('.page2left .h213left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same12');

  tl2.to('.page2right .h213right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same12');

  tl2.to('.page2left .h212left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same12');

  tl2.to('.page2right .h212right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same12');
}

page2Animation();

function page4Animation(){
  var tl4=gsap.timeline(
 {
  scrollTrigger:{
    trigger:'.page4',
    scroller:'body',
  }
 }
  );
  tl4.to('.container4',{
    x:'-60vw',
    duration:1,
    ease:'expo.Inout',
    delay:1,
  },'same')
 
 tl4.to('.page4 h1',{
  
  color:'white',
 duration:1,
 delay:1,
},'same')
  tl4.to('#one',{
    rotate:'-13deg',
    scale:.6,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same')
  tl4.to('#two',{
    rotate:'13deg',
    scale:1.1,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same')
 
  tl4.to('.container4',{
  
    ease:'expo.Inout',
  delay:1,
},'same')

  tl4.to('.container4',{
    x:'-110vw',
    duration:1,
    ease:'expo.Inout',
  delay:1,
  },'same2')
  tl4.to('#two',{
    rotate:'-4deg',
    scale:.6,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same2')
  tl4.to('#three',{
    rotate:'8deg',
    scale:1.1,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same2')
 
  
  tl4.to('#three',{
    rotate:'-13deg',
    scale:.6,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same3')
  tl4.to('.container4',{
    x:'-161vw',
    duration:1,
    ease:'expo.Inout',
    delay:1
  },'same3')
  
  tl4.to('#four',{
    rotate:'13deg',
    scale:'1.2',

    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same3')
 
    tl4.to('.page4 h1',{
      color:'#f7f2f5',
      duration:1,
      delay:1,
    },'same3')
  
}
page4Animation();

function page4Animation2(){

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll('.page5_container_box');

  function applyRandomRotation() {
      boxes.forEach(box => {
          const randomRotation = Math.random() * 20 - 10; // Generates a random number between -10 and 10
          box.style.transform = `rotate(${randomRotation}deg)`;
      });
  }

  applyRandomRotation();

  setInterval(applyRandomRotation, 3000); // 3000 milliseconds = 3 seconds
});
}
page4Animation2()
function page5Animation1(){
  var t = gsap.timeline();

var h1 = document.querySelector(".page5_text h1");
var texh1 = h1.textContent;
var splited = texh1.split("");
console.log(splited);
var clutter = "";
splited.forEach(function (elem) {
  clutter += `<span class='inline-block'>${elem === ' ' ? `&nbsp;` : elem}</span>`;
  console.log(clutter);

})
h1.innerHTML = clutter;
t.to(".page5_text h1>span", {
  y: -70,
  // opacity: 0,
  duration: .3,
  delay:.1,
  stagger: 0.1
})
}
page5Animation1();



function page5Animation() {
const container = document.querySelector('.container4');

function handleMouseMove(event) {
  const { clientX: x, clientY: y } = event;
  const { innerWidth: width, innerHeight: height } = window;
  const rotateY = ((x / width) * 2) - 1; // Very subtle 3D tilt (1 degree)
  const rotateX = ((y / height) * -2) + 1; // Very subtle 3D tilt (1 degree)

  gsap.to(container, {
    rotationY: rotateY,
    rotationX: rotateX,
    ease: 'power4.out', // Smooth easing
    duration: 1, // Smooth transition
    transformPerspective: 800,
    transformOrigin: 'center center'
  });
}

window.addEventListener('mousemove', handleMouseMove);
}

page5Animation();





function page3Animation(){
  
function horizontalLoop(items, config = {}) {
  // Convert items to an array and set default values for config
  items = gsap.utils.toArray(items);
  const {
      repeat = -1,
      paused = false,
      speed = 1,
      snap = 1,
      paddingRight = 0,
      reversed = false

  } = config;

  // Create a GSAP timeline
  let tl = gsap.timeline({
      repeat,
      paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
  });

  const length = items.length;
  const widths = [];
  const xPercents = [];
  let startX = items[0].offsetLeft;
  let totalWidth, curX, distanceToStart, distanceToLoop;
  const pixelsPerSecond = speed * 100;

  // Helper function to handle snapping
  const snapValue = snap === false ? v => v : gsap.utils.snap(snap);

  // Set initial properties for items and calculate widths and xPercents
  gsap.set(items, {
      xPercent: (i, el) => {
          const width = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
          const xPercent = snapValue(parseFloat(gsap.getProperty(el, "x", "px")) / width * 100 + gsap.getProperty(el, "xPercent"));
          xPercents[i] = xPercent;
          return xPercent;
      }
  });
  gsap.set(items, { x: 0 });

  // Calculate totalWidth
  totalWidth = items[length - 1].offsetLeft +
      xPercents[length - 1] / 100 * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") +
      parseFloat(paddingRight);

  // Build the timeline
  items.forEach((item, i) => {
      curX = xPercents[i] / 100 * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

      tl.to(item, {
          xPercent: snapValue((curX - distanceToLoop) / widths[i] * 100),
          duration: distanceToLoop / pixelsPerSecond
      }, 0)
      .fromTo(item, {
          xPercent: snapValue((curX - distanceToLoop + totalWidth) / widths[i] * 100)
      }, {
          xPercent: xPercents[i],
          duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false
      }, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
  });

  const times = items.map((item, i) => (item.offsetLeft + xPercents[i] / 100 * widths[i] - startX) / pixelsPerSecond);

  // Function to move to a specific index
  function toIndex(index, vars = {}) {
      const newIndex = gsap.utils.wrap(0, length, index);
      let time = times[newIndex];

      if ((time > tl.time()) !== (index > curIndex)) {
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
      }

      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
  }

  // Add methods to the timeline
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;

  // Pre-render for performance
  tl.progress(1, true).progress(0, true);

  // Reverse the timeline if needed
  if (reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
  }

  return tl;
}

  document.querySelectorAll('.page3_img').forEach(img => {
    img.addEventListener('mouseover', () => {
      document.querySelectorAll('.elem_stripe1 h1').forEach(h1 => {
        h1.classList.add('hover-effect');
      });
    });

    img.addEventListener('mouseout', () => {
      document.querySelectorAll('.elem_stripe1 h1').forEach(h1 => {
        h1.classList.remove('hover-effect');
      });
    });
  });

const elems = gsap.utils.toArray(".elem_stripe1");
const loop = horizontalLoop(elems, {paused:false,repeat:-1});
// loaderAnimation();
// Wrap the whole script in a DOMContentLoaded event listener to ensure it runs after the DOM is fully loaded
document.querySelectorAll('.page3_img').forEach((img) => {
  img.addEventListener('mouseenter', () => {
    var t4 = gsap.timeline();
    var h1 = document.querySelector(".page3_text h1");
    var index = img.getAttribute('data-index');
    var h2 = document.querySelector(`.page3_text h2[data-index="${index}"]`);

    // Check if spans are already created to avoid duplication for h1
    if (!h1.querySelector('span')) {
      var texh1 = h1.textContent;
      var splited = texh1.split("");
      var clutter = "";
      splited.forEach(function (elem) {
        clutter += `<span class='inline-block'>${elem === ' ' ? `&nbsp;` : elem}</span>`;
      });
      h1.innerHTML = clutter;
    }

    // Check if spans are already created to avoid duplication for h2
    if (h2 && !h2.querySelector('span')) {
      var texh2 = h2.textContent;
      var splited2 = texh2.split("");
      var clutter2 = "";
      splited2.forEach(function (elem) {
        clutter2 += `<span class='inline-block'>${elem === ' ' ? `&nbsp;` : elem}</span>`;
      });
      h2.innerHTML = clutter2;
    }

    // Ensure the animation runs only once per mouseenter
    if (!t4.isActive()) {
      t4.to(".page3_text h1 span", {
        y: -200,
        duration: 0.6 ,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.inOut" // Add easing
      }, "same");
   
      t4.to(`.page3_text h2[data-index="${index}"] span`, {
        y: '-90%',
        duration: 0.6,
        opacity: 1,
        stagger: 0.1,
        ease: "power2.inOut" // Add easing
      }, "same");
    }
  });

  img.addEventListener('mouseleave', () => {
    // Reset h1 and hide h2 on mouse leave
    gsap.to('.page3_text h1 > span', {
      duration: 0.6,
      y: 10,
      opacity: 1,
      stagger: 0.1,
      ease: "power2.inOut" // Add easing
    });

   
    
    var index = img.getAttribute('data-index');
    gsap.to(`.page3_text h2[data-index="${index}"] span`, {
      duration: 0.6,
      y: '120%',
      opacity: 1,
      stagger: 0.1,
      ease: "power2.inOut" // Add easing
    });
  });
});

document.querySelectorAll('.page3_img').forEach((img) => {
  img.addEventListener('mouseenter', () => {
    const index = img.getAttribute('data-index');
    const color = getColorByIndex(index);
    document.querySelector('.page3').style.background = color;
  });

  img.addEventListener('mouseleave', () => {
    document.querySelector('.page3').style.background = '';
  });
});

function getColorByIndex(index) {
  const colors = {
    '1': '#4C2178',
    '2': '#E9A037',
    '3': '#6E391B',
    '4': '#BC5700',
    '5': '#8A5848',
    '6': '#3A0375',
    '7': '#A12017',
    '8': '#632D21',
    '9': '#6C2D11'
  };
  return colors[index] || 'white'; // default to white if no match
}


// });



}


page3Animation();


function page1Animation(){


  document.querySelector(".page1").addEventListener("mousemove",function(dets){
    var crcle = document.querySelector(".page1left>img");
    crcle.style.transform = `translate(${dets.clientX*0.06}px,${dets.clientY*0.06}px)`;
 
  })
 
}


var h11 = document.querySelector('.page1 .h1');
var h1textcontent = h11.textContent;
var h1splittedtext = h1textcontent.split("");
var clutter = '';
h1splittedtext.forEach(function(letter) {
  clutter += `<span>${letter}</span>`;
});
h11.innerHTML = clutter;




page1Animation();



function btneffect(){
  document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".btn-liquid");
    const canvas = btn.querySelector("canvas");
    const ctx = canvas.getContext("2d");
  
    canvas.width = btn.offsetWidth + 100;
    canvas.height = btn.offsetHeight + 100;
  
    const drops = [];
    const numDrops = 30;
  
    for (let i = 0; i < numDrops; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 + 1,
        color: "rgba(255, 255, 255, 0.8)"
      });
    }
  
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      drops.forEach(drop => {
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fillStyle = drop.color;
        ctx.fill();
        ctx.closePath();
  
        drop.y += drop.speedY;
        drop.x += drop.speedX;
  
        if (drop.y > canvas.height) {
          drop.y = -drop.radius;
          drop.x = Math.random() * canvas.width;
        }
      });
  
      requestAnimationFrame(draw);
    }
  
    draw();
  });
  
}

btneffect();







function page6Animation() {
  var elements = document.querySelectorAll(".page6_right [id^='elem']");
  var images = document.querySelectorAll(".page6left_imgcontan [id^='img']");
  var zIndex = 1; // initial z-index value

  elements.forEach(function(element, index) {
      element.addEventListener("mouseenter", function() {
          // Bring the corresponding image to the top
          images[index].style.zIndex = zIndex++;
          
          // Animate the position
          gsap.to(images[index], {
              x: "-40vw",
              rotate:"5",
              duration: 0.9,
              ease: "power2.inOut"
          });
      });

      element.addEventListener("mouseleave", function() {
          // Reset the z-index and animate back
          images[index].style.zIndex = "";
          gsap.to(images[index], {
              x: "0",
              rotate:"-5",
              duration: 0.9,
              ease: "power2.inOut"
          });
      });
  });
}

page6Animation();

function page7Animation(){
  gsap.to('.text7container h1',{
    y:-180,
    duration:.8,
    ease:'expo.Inout',
    scrollTrigger:{
      trigger:'.page7',
     
    }
  })

  var page7 =document.querySelector('.page7');
  page7.addEventListener('mousemove',function(){
    gsap.to('.page7coach',{
      opacity:1,
      duration:.5,
      ease:'expo.Inout',
      zIndex:9999,

    })
  })


  gsap.to('.page7 img',{
    y:-170,
    duration:.5,
    scrollTrigger:{
      trigger:'.page7',
      scroller:'body',
      scrub:true
    }
  })
}


page7Animation();

function page8Animation(){
  gsap.to('.text8container h1',{
    y:-180,
    duration:.8,
    ease:'expo.Inout',
    scrollTrigger:{
      trigger:'.page8',
     
    }
  })

  gsap.to('.page8 img',{
    y:-190,
    duration:.5,
    scrollTrigger:{
      trigger:'.page8',
      scroller:'body',
      scrub:true
    }
  })

  var page8=document.querySelector('.page8');
  page8.addEventListener('mousemove',function(){
    gsap.to('.page8coach',{
      opacity:1,
      duration:.5,
      ease:'expo.Inout',
      zIndex:9999,

    })
  })

  gsap.to('.page8',{
    y:-700,
    duration:.5,
    scrollTrigger:{
      trigger:'.page7',
      pin:true,
      scrub:true,
    }
  })
}

page8Animation();


gsap.to(".ball",{
  yoyo:true,
  repeat:-1,
  duration:1,
  y:-25,
  stagger:0.1,
})