// let tablinks = document.getElementsByClassName("tab-links");
// let tabcontents = document.getElementsByClassName("tab-content");


// function opentab(tabname) {
//   for (tablink of tablinks) {
//     tablink.classList.remove("active-link");
//   }
//   for (tabcontent of tabcontents) {
//     tabcontent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-link");

//   document.getElementById(tabname).classList.add("active-tab");

// }

let tablinkss = document.getElementsByClassName("tab-links");
let tabcontentss = document.getElementsByClassName("tab-content");


function opentab(tabname) {
  document.querySelector(".settings").classList.remove("hidden")
  menuOverlay.classList.remove("active");
    navMenu.classList.remove("open");
    ToggleBars.classList.add("fa-bars")
      ToggleBars.classList.remove("fa-xmark")
  for (tablink of tablinkss) {
    tablink.classList.remove("active-link");
    
  }
  for (tabcontent of tabcontentss) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  
  document.getElementById(tabname).classList.add("active-tab");

}
// let height = document.getElementById("header").clientHeight
// alert('you header hoeight is '+ height)



// menu-overlay




// (() =>{
 
  var openNavMenu = document.querySelector(".open-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  closeNavMenu = document.querySelector("#toggleMobileSidbBar"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 1210;
  
  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", Nvatogle);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);
  
 const ToggleBars = document.querySelector("#ToglleBars")

  function Nvatogle() {
  	menuOverlay.classList.toggle("active");
    navMenu.classList.toggle("open");
    
    if (navMenu.classList.contains("open")) {
      ToggleBars.classList.remove("fa-bars")
      ToggleBars.classList.add("fa-xmark")
      document.querySelector(".settings").classList.remove("hidden")
    }
    else {
      ToggleBars.classList.add("fa-bars")
      ToggleBars.classList.remove("fa-xmark")
      // document.querySelector(".settings").classList.add("hidden")
    }
  }


  function toggleNav() {
  	document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
      	window.innerWidth <= mediaSize){
      	// prevent default anchor click behavior
      	event.preventDefault();
      	const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
        	collapseSubMenu();
        }
        else{
          // collapse existing expanded menuItemHasChildren
          if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
  	navMenu.querySelector(".menu-item-has-children.active .sub-menu")
  	.removeAttribute("style");
  	navMenu.querySelector(".menu-item-has-children.active")
  	.classList.remove("active");
  }
  function resizeFix(){
  	 // if navMenu is open ,close it
  	 if(navMenu.classList.contains("open")){
  	 	toggleNav();
  	 }
  	 // if menuItemHasChildren is expanded , collapse it
  	 if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
     	resizeFix();
     }
  });

// })();

