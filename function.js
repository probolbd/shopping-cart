//Function create for product handle

function productChange(product, isIncrease) {
    const productInput = document.getElementById(product);
    const convertNumber = parseInt(productInput.value);
    let newCount = convertNumber;
    if(isIncrease== true){
        newCount = convertNumber+1;
    }
    if(isIncrease == false && convertNumber >0){
        newCount = convertNumber-1;
    }
    productInput.value= newCount;
    let totalPrice= 0;
    if(product=='phone'){
        totalPrice=newCount*1219;
    }
    if(product=='case'){
        totalPrice=newCount*59;
    }
    document.getElementById(product +'-Price').innerText= '$' + totalPrice;
    calculateSubtotal();
    
}
function calculateSubtotal() {
    const phoneTotal=document.getElementById('phone');
    const phoneTotalValue=parseInt(phoneTotal.value);
    console.log(phoneTotalValue);
    const caseTotal =document.getElementById('case');
    const caseTotalValue = parseInt(caseTotal.value);

    subtotal= phoneTotalValue*1219 +caseTotalValue*59;
    document.getElementById('subTotal').innerText= '$' + subtotal;

    const taxValue = Math.round(subtotal*.10);
    document.getElementById('tax').innerText= '$' + taxValue;
    const total = subtotal-taxValue;
    document.getElementById('total').innerText='$' +total;
}
