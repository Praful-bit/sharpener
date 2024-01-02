const non = document.querySelector("h2")
   non.style.marginLeft = "30px"

const select = document.querySelector("#main-heading")
    select.style.textAlign = "right";
    
    const basket = document.querySelector("#basket-heading");
    basket.style.color = "brown"

    const fruits = document.querySelector(".fruits")
    fruits.style.backgroundColor = "gray"
    fruits.style.margin ="30px"
    fruits.style.padding = "30px"
    fruits.style.width = "50%"
    fruits.style.borderRadius = "3px"
    fruits.style.listStyleType ="none"

    const fruit = document.querySelectorAll(".fruit")
    for(let i=0; i<fruit.length; i++){
        fruit[i].style.backgroundColor = "white"
        fruit[i].style.padding = "10px"
        fruit[i].style.margin = "10px"
        fruit[i].style.borderRadius ="5px"
    }
const evenfruit = document.querySelectorAll(".fruit:nth-child(even)")

for(let i=0; i<evenfruit.length; i++){
    evenfruit[i].style.backgroundColor = "brown"
    evenfruit[i].style.color = "white"
  }

const oddfruit = document.querySelectorAll(".fruit:nth-child(odd)")

for(let i=0; i<oddfruit.length; i++){
    oddfruit[i].style.backgroundColor = "white"
    oddfruit[i].style.color = "black"
  }