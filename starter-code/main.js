let jsonData
fetch("data.json").then(response => {return response.json()}).then(data =>{jsonData = data})

let crew_btns = document.querySelectorAll(".crew-tab")
let crewname = document.querySelector(".crewname")
let crewrole = document.querySelector(".crewrole")
let crewinfo = document.querySelector(".crewinfo")
let crewimage = document.querySelector(".crewimage")
for (let i = 0; i < crew_btns.length; i++) {
    const element = crew_btns[i];
    element.addEventListener("click", function (e){
        crewname.innerText = jsonData.crew[i].name
        crewrole.innerText = jsonData.crew[i].role
        crewinfo.innerText = jsonData.crew[i].bio
        let img = "/starter-code"+jsonData.crew[i].images.png
        crewimage.setAttribute("src", img)
        crew_btns.forEach(btn => {
            btn.className = "crew-tab"
        });
        element.className = "crew-tab selected"
    })   
}


let dest_btns = document.querySelectorAll(".dest-tab")
let dest_name = document.querySelector(".destname")
let dest_info = document.querySelector(".destinfo")
let dest_image = document.querySelector(".destimage")
let dist = document.querySelector(".dist")
let time = document.querySelector(".time")

for (let i = 0; i < dest_btns.length; i++) {
    const element = dest_btns[i];
    element.addEventListener("click", function (e){
        dest_name.innerText = jsonData.destinations[i].name
        dest_info.innerText = jsonData.destinations[i].description
        dist.innerText = jsonData.destinations[i].distance
        time.innerText = jsonData.destinations[i].travel
        dest_image.setAttribute("src", jsonData.destinations[i].images.png)
        dest_btns.forEach(btn => {
            btn.className = "dest-tab"
        });
        element.className = "dest-tab selected"
    })
}


let tech_btns = document.querySelectorAll(".tech-tab")
let tech_name = document.querySelector(".techname")
let tech_info = document.querySelector(".techinfo")
let tech_image = document.querySelector(".techimage")

for (let i = 0; i < tech_btns.length; i++) {
    const element = tech_btns[i];
    element.addEventListener("click", function (e){
        tech_name.innerText = jsonData.technology[i].name
        tech_info.innerText = jsonData.technology[i].description
        tech_image.setAttribute("src", jsonData.technology[i].images.portrait)
        tech_btns.forEach(btn => {
            btn.className = "tech-tab"
        });
        element.className = "tech-tab selected"
    })
}