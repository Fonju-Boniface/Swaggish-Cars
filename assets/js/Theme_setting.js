let ToggleSettings  = document.querySelector("#ToggleSettings")

ToggleSettings.addEventListener("click", () => {
    document.querySelector(".settings").classList.toggle("hidden")
    if (document.querySelector(".settings").classList.contains("hidden")) {
        ToggleSettings.style.background = "var(--ifm-color-primary-g-depres)"
    } else {
        ToggleSettings.style.background = "none"
    }
    
})



let toggler = document.querySelector('.toggler')
let bodY = document.querySelector('.bodY')
toggler.addEventListener('click', () =>{
    toggler.classList.toggle("togglerAct")
    bodY.classList.toggle("ActiveBody")
})


