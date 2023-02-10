document.getElementById('plus-phone').addEventListener('click', function(){
    productAmountHandle('phone', true);
});
document.getElementById('minus-phone').addEventListener('click', function(){
    productAmountHandle('phone', false)
});

document.getElementById('plus-case').addEventListener('click', function(){
    productAmountHandle('case', true);
})
document.getElementById('minus-case').addEventListener('click', function(){
    productAmountHandle('case', false);
})


function productAmountHandle(product, increase) {
        const productAmount = document.getElementById(product + '-amount');
        const productCount = parseInt(productAmount.value);
        let productCountUpdate = productCount;
        if(increase == true){
            productCountUpdate = productCount + 1;
        }
        if(increase == false && productCount > 0){
            productCountUpdate = productCount - 1;
        }
        productAmount.value = productCountUpdate;
        if(product == 'phone'){
            document.getElementById(product+ '-prise').innerText = productCountUpdate * 1219;
        }
        if(product == 'case'){
            document.getElementById(product+ '-prise').innerText = productCountUpdate * 59;
        }

        totalPrise()
}

function totalPrise(){
    const phoneAmount = document.getElementById('phone-amount');
    const phoneCount = parseInt(phoneAmount.value);

    const caseAmount = document.getElementById('case-amount');
    const caseCount = parseInt(caseAmount.value);

    const subTotal = phoneCount * 1219 + caseCount * 59;
    document.getElementById('subtotal').innerText = subTotal;
    
    const tax = subTotal * .10; //if tax rate 10%
    document.getElementById('tax').innerText = Math.round(tax);

    const total = subTotal + tax;
    document.getElementById('total').innerText = Math.round(total);
}

document.getElementById('remove-phone').addEventListener('click', function(){
    removeProduct('phone');
    totalPrise();
})
document.getElementById('remove-case').addEventListener('click', function(){
    removeProduct('case');
    totalPrise();
})


function removeProduct (product){
    const productAmount = document.getElementById(product + '-amount');
    const productCount = parseInt(productAmount.value);
    const productCountUpdate = productCount * 0;
    productAmount.value = productCountUpdate;
    document.getElementById(product + '-prise').innerText = productCountUpdate;

}













/* document.getElementById('plus-phone').addEventListener('click', function(){
    productAmountHandle('phone', true);
});
document.getElementById('minus-phone').addEventListener('click', function(){
    productAmountHandle('phone', false)
});

document.getElementById('plus-case').addEventListener('click', function(){
    productAmountHandle('case', true);
})
document.getElementById('minus-case').addEventListener('click', function(){
    productAmountHandle('case', false);
})


function productAmountHandle(product, increase) {
        const productAmount = document.getElementById(product + '-amount');
        const productCount = parseInt(productAmount.value);
        let productCountUpdate = productCount;
        if(increase == true){
            productCountUpdate = productCount + 1;
    }
        if(increase == false && productCount > 0){
            productCountUpdate = productCount - 1;
    }
        productAmount.value = productCountUpdate;
        if(product == 'phone'){
            document.getElementById(product+ '-prise').innerText = productCountUpdate * 1219;
        }
        if(product == 'case'){
            document.getElementById(product+ '-prise').innerText = productCountUpdate * 59;
        }

        totalPrise()
}

function totalPrise(){
    const phoneAmount = document.getElementById('phone-amount');
    const phoneCount = parseInt(phoneAmount.value);

    const caseAmount = document.getElementById('case-amount');
    const caseCount = parseInt(caseAmount.value);

    const subTotal = phoneCount * 1219 + caseCount * 59;
    document.getElementById('subtotal').innerText = subTotal;
    
    const tax = subTotal * .10; //if tax rate 10%
    document.getElementById('tax').innerText = Math.round(tax);

    const total = subTotal + tax;
    document.getElementById('total').innerText = total;
}


 
document.getElementById('remove-phone').addEventListener('click', function(){

}) */





/* document.getElementById('plus-phone').addEventListener('click', function(){
    productAmountHandle(true, true);
});
document.getElementById('minus-phone').addEventListener('click', function(){
    productAmountHandle(true, false)
});

document.getElementById('plus-case').addEventListener('click', function(){
    productAmountHandle(false, true);
})
document.getElementById('minus-case').addEventListener('click', function(){
    productAmountHandle(false, false);
})

function productAmountHandle(phone, increase) {
    // Phone
    if(phone == true){
        const phoneAmount = document.getElementById('phone-amount');
        const phoneCount = parseInt(phoneAmount.value);
        let phoneCountUpdate = phoneCount;
        if(increase == true){
        phoneCountUpdate = phoneCount + 1;
    }
        if(increase == false && phoneCount > 0){
        phoneCountUpdate = phoneCount - 1;
    }
        phoneAmount.value = phoneCountUpdate;
        document.getElementById('phone-prise').innerText = phoneCountUpdate * 1219;
    }

    // Case
    if(phone == false){
        const caseAmount = document.getElementById('case-amount');
        const caseCount = parseInt(caseAmount.value);
        let caseCountUpdate = caseCount;
        if(increase == true){
        caseCountUpdate = caseCount + 1;
    }
        if(increase == false && caseCount > 0){
        caseCountUpdate = caseCount - 1;
    }
        caseAmount.value = caseCountUpdate;
        document.getElementById('case-prise').innerText = caseCountUpdate * 59;
    }
} */



/* document.getElementById('plus-phone').addEventListener('click', function(){
    const phoneAmount = document.getElementById('phone-amount');
    const phoneCount = parseInt(phoneAmount.value);
    const phoneCountUpdate = phoneCount + 1;
    phoneAmount.value = phoneCountUpdate;
    document.getElementById('phone-prise').innerText = phoneCountUpdate * 1219;
});

document.getElementById('minus-phone').addEventListener('click', function(){
    productAmountHandle()
});

function productAmountHandle(increase) { 
    const phoneAmount = document.getElementById('phone-amount');
    const phoneCount = parseInt(phoneAmount.value);
    const phoneCountUpdate = phoneCount - 1;
    phoneAmount.value = phoneCountUpdate;
    document.getElementById('phone-prise').innerText = phoneCountUpdate * 1219;
} */

/* function productAmountHandle(increase) { 
    const phoneAmount = document.getElementById('phone-amount');
    const phoneCount = parseInt(phoneAmount.value);
    let phoneCountUpdate = phoneCount;
    if(increase == true){
        phoneCountUpdate = phoneCount + 1;
    }
    if(increase == false && phoneCount > 0){
        phoneCountUpdate = phoneCount - 1;
    }
    phoneAmount.value = phoneCountUpdate;
    document.getElementById('phone-prise').innerText = phoneCountUpdate * 1219;
} */
/* function caseAmountHandle(increase){
    const caseAmount = document.getElementById('case-amount');
    const caseCount = parseInt(caseAmount.value);
    let caseCountUpdate = caseCount;
    if(increase == true){
        caseCountUpdate = caseCount + 1;
    }
    if(increase == false && caseCount > 0){
        caseCountUpdate = caseCount - 1;
    }
    caseAmount.value = caseCountUpdate;
    document.getElementById('case-prise').innerText = caseCountUpdate * 59;
} */

/* document.getElementById('plus-case').addEventListener('click', function(){
    caseAmountHandle(true);
})
document.getElementById('minus-case').addEventListener('click', function(){
    caseAmountHandle(false);
})

function caseAmountHandle(increase){
    const caseAmount = document.getElementById('case-amount');
    const caseCount = parseInt(caseAmount.value);
    let caseCountUpdate = caseCount;
    if(increase == true){
        caseCountUpdate = caseCount + 1;
    }
    if(increase == false && caseCount > 0){
        caseCountUpdate = caseCount - 1;
    }
    caseAmount.value = caseCountUpdate;
    document.getElementById('case-prise').innerText = caseCountUpdate * 59;
} */