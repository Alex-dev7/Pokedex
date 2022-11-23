function renderData(obj, data) {
    console.log(data.name)
    for(let key in obj){
        // console.log(key)
        
            if(key === "misc"){
                
                obj[key].classification = data.classification
            } else if(key === "stats") {
                obj[key].hp = data.hp
                obj[key].attack = data.attack
                obj[key].defence = data.defence
                obj[key].spattack = data.spattack
                obj[key].spdefense= data.spdefense
                obj[key].speed = data.speed
            } else  {
                obj.name = data.name
                obj.id = data.id
                obj.img = data.img
                obj.type = data.type
            }
    }
}

function checkIfTrue(item){
    if(item === true){
        return true
    } else {
        return false
    }
}

module.exports = {
    renderData,
    checkIfTrue
}