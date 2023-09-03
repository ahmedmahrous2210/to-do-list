const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const flagsArray = localStorage.getItem('flags') ? JSON.parse(localStorage.getItem('flags')) : [];

document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item")
  createItem(item)
})

document.querySelector("#item").addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    const item = document.querySelector("#item")
    createItem(item)
  }
})
function logOut(){
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  window.location.href="login.html";
} 
function displayDate(){
  let date = new Date()
  // convert it to string first then split it whenever there is a space
  date = date.toString().split(" ")
  date = date[1] + " " + date[2] + " " + date[3] 
  document.querySelector("#date").innerHTML = date 
}

function displayItems(){
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  let items = ""
  for(let i = 0; i < itemsArray.length; i++){
    items += `<div class="item">
                <div class="input-controller">
                  <textarea disabled>${itemsArray[i]}</textarea>
                  <div class="edit-controller">
                  <i class="fa-solid fa-check checkBtn"></i>
                  <i class="fa-regular fa-trash-can deleteBtn"></i>
                  <i class="fa-solid fa-pen-to-square editBtn"></i>
                  </div>
                </div>
                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>
                </div>
              </div>`


            

  }
  // for()
  document.querySelector(".to-do-list").innerHTML = items
  for(let i = 0; i < itemsArray.length; i++){
  if(flagsArray[i] === "1")
  
  activateCheckListeners_LTflags(i,"1")
else
activateCheckListeners_LTflags(i,"0")
  }
 
  activateCheckListeners_LT()
  activateDeleteListeners()
  activateEditListeners()
  activateSaveListeners()
  activateCancelListeners()
}

function activateCheckListeners_LTflags(index,flag){

  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  inputs[index].disabled = false 
  if(flag ==="1")
  inputs[index].style.textDecoration = 'line-through'
else
  inputs[index].style.textDecoration = "none"

	inputs[index].disabled = true
 
}
function activateCheckListeners_LT(){
  let checkBtn = document.querySelectorAll(".checkBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  
  checkBtn.forEach((kB, i) => {
    kB.addEventListener("click", () => {   
	inputs[i].disabled = false 
	if(inputs[i].style.textDecoration === 'line-through')
  {
		inputs[i].style.textDecoration = "none"

    flagsArray[i]="0"
    localStorage.setItem('flags', JSON.stringify(flagsArray))
    // location.reload()
  }
	else
  {
		inputs[i].style.textDecoration = 'line-through'

    flagsArray[i]="1"
    localStorage.setItem('flags', JSON.stringify(flagsArray))
    // location.reload()
  }
	inputs[i].disabled = true
  })  
  })
}

function activateDeleteListeners(){
  let deleteBtn = document.querySelectorAll(".deleteBtn")
  deleteBtn.forEach((dB, i) => {
    dB.addEventListener("click", () => { deleteItem(i) })
  })
}

function activateEditListeners(){
  const editBtn = document.querySelectorAll(".editBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  editBtn.forEach((eB, i) => {
    eB.addEventListener("click", () => { 
      updateController[i].style.display = "block"
      inputs[i].disabled = false })
  })
}

function activateSaveListeners(){
  const saveBtn = document.querySelectorAll(".saveBtn")
  const inputs = document.querySelectorAll(".input-controller textarea")
  saveBtn.forEach((sB, i) => {
    sB.addEventListener("click", () => {
      updateItem(inputs[i].value, i)
    })
  })
}

function activateCancelListeners(){
  const cancelBtn = document.querySelectorAll(".cancelBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  cancelBtn.forEach((cB, i) => {
    cB.addEventListener("click", () => {
      updateController[i].style.display = "none"
      inputs[i].disabled = true
      inputs[i].style.border = "none"
    })
  })
}

function createItem(item){
  itemsArray.push(item.value)
  flagsArray.push("0")
  localStorage.setItem('items', JSON.stringify(itemsArray))
  localStorage.setItem('flags', JSON.stringify(flagsArray))
  location.reload()
}

function deleteItem(i){
  itemsArray.splice(i,1)
  flagsArray.splice(i,1)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  localStorage.setItem('flags', JSON.stringify(flagsArray))
  location.reload()
}

function updateItem(text, i){
  itemsArray[i] = text
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

window.onload = function() {
  displayDate()
  displayItems()
};
