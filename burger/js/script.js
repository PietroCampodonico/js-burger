window.addEventListener("load", function(){

    subTotal()
})

var submitBtn = document.getElementById("button");
var burgerCustomName = document.getElementsByClassName("name-burger");
var sum = 50;


function subTotal() {
    submitBtn.addEventListener("click", function(){
        var ingredientsList = document.querySelectorAll("input.ingredient-checkbox");
        console.log(ingredientsList)

        
        //FACCIO UN CICLO FOR CON UN IF PER OGNI ELEMENTO DELLA LISTA
        /*
        for (var i = 0; i < ingredientsList.length; i++) {

            
           if (ingredientsList[i].checked) {
               sum += parseInt(ingredientsList[i].value);
           }
        } 
        */  

           //oppure scrivo una funzione generica e la richiamo nel ciclo

           function addToSum(sommaFinale, ingrediente) {
                if (ingrediente.checked) {
                    sommaFinale += parseInt(ingrediente.value);
                }
           }

           for (var i = 0; i < ingredientsList.length; i++) {
              
                sum = addToSum(sum, ingredientsList[i])
           }
        
        console.log(sum)
    })  
}
