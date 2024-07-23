let container=document.querySelector(".main");
let all=document.querySelector("#all");
let bre=document.querySelector("#bre");
let din=document.querySelector("#din");
let dri=document.querySelector("#dri");
let lun=document.querySelector("#lun");
let idx=0;
function main() {
  container.innerHTML = items.map(disp).join("");
  all.addEventListener("click",()=>{
    container.innerHTML = items.map(disp).join("");
  })
  bre.addEventListener("click",()=>{
    container.innerHTML = items.filter(item => item.id === "breakfast").map(disp).join("");
  })
  din.addEventListener("click",()=>{
    container.innerHTML = items.filter(item => item.id === "dinner").map(disp).join("");
  })
  dri.addEventListener("click",()=>{
    container.innerHTML = items.filter(item => item.id === "drink").map(disp).join("");
  })
  lun.addEventListener("click",()=>{
    container.innerHTML = items.filter(item => item.id === "lunch").map(disp).join("");
  })
}
items =[{
  id:"breakfast",
  photo:"item-1.jpeg",
  name:"breakfast-1",
  content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab eaque fugiat officia dolor! Velit nisi maiores dolore nostrum impedit unde dolores nesciunt. Labore odit magni ipsam! Animi tenetur debitis doloremque voluptatibus alias, odit a?  "
},
{
  id:"dinner",
  photo:"item-2.jpeg",
  name:"dinner-1",
  content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab eaque fugiat officia dolor! Velit nisi maiores dolore nostrum impedit unde dolores nesciunt. Labore odit  alias, odit a?  "
},
{
  id:"drink",
  photo:"item-3.jpeg",
  name:"drink-1",
  content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab eaque fugiat officia dolor! Velit nisi maiores dolore nostrum impedit unde dolores nesciunt. Labore odit magni ipsam! Animi tenetur debitis doloremque  odit a?  "
},
{
  id:"breakfast",
  photo:"item-4.jpeg",
  name:"breakfast-2",
  content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab eaque fugiat officia dolor! Velit nisi maiores dolore nostrum impedit unde dolores nesciunt. Labore odit magni ipsam! Animi debitis doloremque voluptatibus alias, odit a?  "
},
{
  id:"dinner",
  photo:"item-5.jpeg",
  name:"dinner-2",
  content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab eaque fugiat officia dolor! Velit nisi maiores dolore nostrum impedit unde dolores nesciunt. Labore odit magni ipsam! Animi  alias, odit a?  "
},
{
  id:"drink",
  photo:"item-6.jpeg",
  name:"drink-2",
  content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab eaque fugiat officia dolor! Velit nisi maiores dolore nostrum impedit unde dolores nesciunt. Labore odit magni ipsam! Animi tenetur debitis doloremque voluptatibus alias, odit a?  "
},
{
  id:"breakfast",
  photo:"item-7.jpeg",
  name:"breakfast-3",
  content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab eaque fugiat officia dolor! Velit nisi maiores dolore nostrum impedit unde dolores nesciunt. Labore odit magni ipsam! Animi tenetur debitis  odit a?  "
},
{
  id:"dinner",
  photo:"item-8.jpeg",
  name:"dinner-3",
  content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab eaque fugiat officia dolor! Velit nisi maiores dolore nostrum impedit unde dolores nesciunt. Labore odit magni ipsam! Animi odit a?  "
},
{
  id:"drink",
  photo:"item-9.jpeg",
  name:"drink-3",
  content:"Lorem ipsum dolor sit,  elit. Expedita ab eaque fugiat officia dolor! Velit nisi maiores dolore nostrum impedit unde dolores nesciunt. Labore odit magni ipsam! Animi tenetur debitis doloremque voluptatibus alias, odit a?  "
},
{
  id:"lunch",
  photo:"item-10.jpeg",
  name:"Lunch",
  content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab eaque fugiat officia dolor! Velit nisi maiores dolore nostrum impedit unde dolores nesciunt. Labore odit magni ipsam! Animi tenetur debitis doloremque voluptatibus alias, odit a?  "
}
];

function disp(func){
  return `
  <div class="col-5 rounded-4 border border-4 border-info mb-3">
        <div class="row main">
          <div class="col-4 p-0">
            <img src="${func.photo}" alt=""  class=" rounded-3 img">
          </div>
          <div class="col-8 text-start p-0 ">
            <div class="p-3">
              <h3>${func.name}</h3>
              <p class="p-0 m-0">${func.content}</p>
            </div>
          </div>
        </div>
      </div>
  `
}


main();