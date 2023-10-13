// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#firstclass"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#firstclass" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#firstclass", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#firstclass").style.transform ? "transform" : "fixed"
// });





// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
window.addEventListener("scroll",function(){
  var header = document.querySelector("nav");
  var scrollvalue = this.window.scrollY;
  console.log(scrollvalue);
  if(scrollvalue > 100){
    header.classList.add("sticky");
  }
  else{
    header.classList.remove("sticky");
  }


})

var typed = new Typed('.head-span', {
  strings: ["Ahad Qureshi.", "Fronted Developer"," web designer."],
  loop: "true",
  typeSpeed: 80,
  backSpeed: 80,
  backDelay:1500
});