let jsonData
fetch("data.json").then(response => {return response.json()}).then(data =>{jsonData = data})
let name = document.querySelector(".name")
let role = document.querySelector(".role")
let info = document.querySelector(".info")
let image = document.querySelector(".image")

let btns = document.querySelectorAll(".crew-tab")
for (let i = 0; i < btns.length; i++) {
    const element = btns[i];
    element.addEventListener("click", function (e){
        name.innerText = jsonData.crew[i].name
        role.innerText = jsonData.crew[i].role
        info.innerText = jsonData.crew[i].bio
        let img = "/starter-code"+jsonData.crew[i].images.png
        image.setAttribute("src", img)
        btns.forEach(btn => {
            btn.className = "crew-tab"
        });
        element.className = "crew-tab selected"
    })   
}