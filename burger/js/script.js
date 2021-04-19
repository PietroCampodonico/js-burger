window.addEventListener("load", function(){

    subTotal();
})

var submitBtn = document.getElementById("button");
var burgerCustomName = document.getElementById("name");
var sum = 50;
var discountPrice = sum - 20;
var couponField = document.getElementById("coupon");
var couponsValidi = ["asda1566", "gdfg1651", "werw0616", "qweqw6548",]


function subTotal() {
    submitBtn.addEventListener("click", function(){
        var ingredientsList = document.querySelectorAll("input.ingredient-checkbox");
        var couponCheck = false;

        if (!burgerCustomName.value) {
            alert("inserire il nome dell'hamburger personalizzato!")
        } else {
            for (var i = 0; i < couponsValidi.length; i++) {
    
                if (couponField.value === couponsValidi[i]) {

                    couponCheck = true;

                    alert("Hai diritto a uno sconto!");

                    for (var i = 0; i < ingredientsList.length; i++) {
                        sum = addToSum(sum, ingredientsList[i]);
                    }

                    document.getElementById("price").innerText = discountPrice;

                } else {

                    for (var i = 0; i < ingredientsList.length; i++) {
                        sum = addToSum(sum, ingredientsList[i]);
                    }
                    document.getElementById("price").innerText = sum;
                }
            }
        }  
    })  
}

function addToSum(sommaPrecedente, elementoLista) {
    if (elementoLista.checked) {
        sommaPrecedente += parseInt(elementoLista.value);
    }
    
    return sommaPrecedente
}



