let restaurante = prompt("que tipo de cena busca hoy?")

while (restaurante != "arroz chaufa"){
    switch (restaurante){

        case "papas a la huancaina":
            alert("hoy tenemos disponible papas a la huancaina")
            break;
        case "pollo broaster":
            alert("hoy tenemos disponible pollo broaster")
            break;
        case "pollo a la brasa":
            alert("hoy tenemos disponible pollo a la brasa")
            break;
        case "anticuchos":
            alert("hoy tenemos disponible anticuchos")
            break;
        default:
            alert("no tenemos disponible esa comida el dia de hoy")                
    }
    restaurante = prompt("desea algo mas?")
    

}

if (restaurante = "arroz chaufa"){
    alert(" no tenemos disponible arroz chaufa el dia de hoy")
}