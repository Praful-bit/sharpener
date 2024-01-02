const form = document.querySelector('form')
const fruits = document.querySelector('.fruits')

form.addEventListener("submit",function(event){
event.preventDefault()

const fruitsAdd = document.getElementById("fruit-to-add");

const list = document.createElement("li")
// list.innerHTML = fruitsAdd.value + '<button class="delete-btn">x</button>'

const listText = document.createTextNode(fruitsAdd.value)
list.appendChild(listText)
list.className ='fruit'


const deleteBtn = document.createElement('button');
const deleteBtnText = document.createTextNode("x");
deleteBtn.appendChild(deleteBtnText)
deleteBtn.className = "delete-btn"
list.appendChild(deleteBtn)


const editBtn = document.createElement("button");
  const editBtnText = document.createTextNode("Edit");
  editBtn.appendChild(editBtnText);
  editBtn.className = "edit-btn";
  list.appendChild(editBtn);

fruits.appendChild(list)

fruits.addEventListener('click', function(event){
if(event.target.classList.contains('delete-btn')){
const fruitDelete = event.target.parentElement;
fruits.removeChild(fruitDelete)
} else if (event.target.classList.contains("edit-btn")) {
      const fruitEdit = event.target.parentElement;
      const existingText = fruitEdit.firstChild.nodeValue;
      const newText = prompt("Edit the fruit:", existingText);

      if (newText !== null && newText.trim() !== "") {
        fruitEdit.firstChild.nodeValue = newText;
      }
    }
})

})
