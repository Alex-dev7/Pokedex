
const tagButton = document.querySelector(".tagButton")
const tagsContainer = document.querySelector(".tagContainer")


// this function generates new input fields for the tag key in the form, every time the tagButton is clicked
tagButton.addEventListener("click", (e) => {
     e.preventDefault()

    const lineBreak = document.createElement('br')
    const newInput = document.createElement("input") 
    newInput.type = "text"
    newInput.name = "type[]"
    newInput.placeholder = "add type"
    tagsContainer.append(newInput, lineBreak)
   

})

