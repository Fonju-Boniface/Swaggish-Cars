//   function goodToGo() {
// const inputname = document.querySelector("#inputname");

const inputEl = document.getElementById("file-input-element");
const BODD = document.getElementById("bodd");

inputEl.addEventListener("change", () => {
  const file = inputEl.files[0];
  const fr = new FileReader();
  fr.readAsDataURL(file);

  fr.addEventListener("load", () => {
    const url = fr.result;
    localStorage.setItem("image", url);
    // Saves image to localStorage
  });
  window.location.reload();
});
const url = localStorage.getItem("image");
// Get data URL from localStorage

const img = new Image();
img.src = url;

let proPic = document.querySelectorAll("#profile-pic");
//   let GranTT = document.querySelectorAll("#grandTotal")

proPic.forEach((proPicChange) => {
  let ProPchange = img.src;
  proPicChange.src = ProPchange;
});



NamE = document.querySelector("#profName");

NamE.innerHTML = localStorage.getItem("value").slice(0, 7);

inputname.addEventListener("keyup", displayEvent);

function displayEvent() {
  localStorage.setItem("value", inputname.value);
  NamE.innerHTML = localStorage.getItem("value").slice(0, 7);;
  // subName = localStorage.getItem('value');
}


let NameLength =  document.getElementById("namelenth")
let NameLengthText =  document.getElementById("namelenthText")

setInterval(() => {
    if (inputname.value.split("").length >= 8) {
        const inputname = document.querySelector("#inputname");
      // alert("name is too long please try again make sure your fist name is less than 7 characters")
      NameLength.innerHTML = inputname.value.split("").length;
      inputname.style.color = "red"
      NameLength.style.color = "red"
      
      NameLengthText.innerHTML = "Name is too long";
      NameLengthText.style.color = "red"
    //   return
    } else if (inputname.value.split("").length <= 3) {
        NameLength.innerHTML =inputname.value.split("").length;
      inputname.style.color = "yellow"
      NameLength.style.color = "yellow"

      NameLengthText.innerHTML = "Name is too short";
      NameLengthText.style.color = "yellow"
      
    //   return
    } else{
      inputname.style.color = "green"
      NameLength.style.color = "green"
      NameLength.innerHTML =inputname.value.split("").length;

      NameLengthText.innerHTML = "Name is moderate";
      NameLengthText.style.color = "green"
    }

    let proPName = document.querySelectorAll("#profile-name-use");
    //   let GranTT = document.querySelectorAll("#grandTotal")
    
    proPName.forEach((proNameChange) => {
      let formit = inputname.value.split(" ");
      let newFormit = formit[0];
    //   alert(damd.slice(0, 3));
    
      proNameChange.textContent = newFormit.slice(0, 7);
    });
    
    function goodToGo() {
      window.location.reload();
    }
});

// alert