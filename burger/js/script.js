window.addEventListener("load", function(){

    subTotal();
})

var submitBtn = document.getElementById("button");
var burgerCustomName = document.getElementsByClassName("name-burger");
var couponsValidi = ["asda1566", "gdfg1651", "werw0616", "qweqw6548",]
var sum = 50;


function subTotal() {
    submitBtn.addEventListener("click", function(){
        var ingredientsList = document.querySelectorAll("input.ingredient-checkbox");

        if (!burgerCustomName.value) {
            alert("inserire il nome dell'hamburger personalizzato!")

        } else {
            for (var i = 0; i < ingredientsList.length; i++) {
                
                //FACCIO UN CICLO FOR CON UN IF PER OGNI ELEMENTO DELLA LISTA
                /*if (ingredientsList[i].checked) {
                    sum += parseInt(ingredientsList[i].value);
                }*/
    
             //OPPURE SCRIVO UNA FUNZIONE GENERICA CHE RICHIAMO NEL CICLO
               
               sum = addToSum(sum, ingredientsList[i])
            } 
        }    
        
        console.log(sum)
    })  

}

function addToSum(sommaPrecedente, elementoLista) {
    if (elementoLista.checked) {
        sommaPrecedente += parseInt(elementoLista.value);
    }

    return sommaPrecedente
}
