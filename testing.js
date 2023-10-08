let tablinkss = document.getElementsByClassName("tab-links");
let tabcontentss = document.getElementsByClassName("tab-content");


function opentab(tabname) {
  for (tablink of tablinkss) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontentss) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");

  document.getElementById(tabname).classList.add("active-tab");

}